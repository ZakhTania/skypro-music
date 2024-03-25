import { TracksType } from "@/api/tracksApi";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TrackListType = {
  tracks: [] | TracksType[];
  isShuffled: boolean;
  shuffledTracks: [] | TracksType[];
  currentTrack: null | TracksType;
  isPlaying: boolean;
  isFiltered: boolean;
  filterOptions: {
    authors: string[];
    years: string;
    genres: string[];
    searchValue: string;
  };
  filteredTracks: [] | TracksType[];
};

type SetCurrentTrackType = {
  currentTrack: TracksType;
  tracks: TracksType[];
};
const initialState: TrackListType = {
  tracks: [],
  isShuffled: false,
  shuffledTracks: [],
  currentTrack: null,
  isPlaying: true,
  isFiltered: false,
  filterOptions: {
    authors: [],
    years: "по умолчанию",
    genres: [],
    searchValue: "",
  },
  filteredTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<TracksType[]>) => {
      state.tracks = action.payload;
    },
    toggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<SetCurrentTrackType>) => {
      state.currentTrack = action.payload.currentTrack;
      state.tracks = action.payload.tracks;
      state.shuffledTracks = [...action.payload.tracks].sort(
        () => 0.5 - Math.random()
      );
    },
    nextTrack: changeTrack(1),
    prevTrack: changeTrack(-1),
    setFiltredTracks: (
      state,
      action: PayloadAction<{
        authors?: string[];
        years?: string;
        genres?: string[];
        searchValue?: string;
      }>
    ) => {
      state.filterOptions = {
        authors: action.payload.authors || state.filterOptions.authors,
        years: action.payload.years || state.filterOptions.years,
        genres: action.payload.genres || state.filterOptions.genres,
        searchValue:
          action.payload.searchValue || state.filterOptions.searchValue,
      };

      state.filteredTracks = state.tracks.filter((track) => {
        const hasAuthors = state.filterOptions.authors.length !== 0;
        const hasGenres = state.filterOptions.genres.length !== 0;
        const isSearchValueIncluded = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchValue.toLowerCase());
        if (hasAuthors && !hasGenres) {
          return (
            state.filterOptions.authors.includes(track.author) &&
            isSearchValueIncluded
          );
        }
        if(hasGenres && !hasAuthors) {
          return (
            state.filterOptions.genres.includes(track.genre) &&
            isSearchValueIncluded
          );
        }
        if(hasAuthors && hasGenres) {
          return (
            state.filterOptions.authors.includes(track.author) &&
            state.filterOptions.genres.includes(track.genre) &&
            isSearchValueIncluded
          );
        }
        return isSearchValueIncluded;
      });

      state.isFiltered =
        state.filterOptions.authors.length !== 0 ||
        state.filterOptions.genres.length !== 0 ||
        state.filterOptions.searchValue !== ""
          ? true
          : false;
    },
  },
});
function changeTrack(direction: number) {
  return (state: TrackListType) => {
    const currentTracks = state.isShuffled
      ? state.shuffledTracks
      : state.tracks;
    let newIndex =
      currentTracks.findIndex((item) => item.id === state.currentTrack?.id) +
      direction;
    newIndex = (newIndex + currentTracks.length) % currentTracks.length;
    state.currentTrack = state.tracks[newIndex];
    state.isPlaying = true;
  };
}
export const {
  setTracks,
  toggleShuffled,
  setIsPlaying,
  setCurrentTrack,
  nextTrack,
  prevTrack,
  setFiltredTracks,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

import { TrackType } from "@/api/tracksApi";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TrackListType = {
  tracks: [] | TrackType[];
  isShuffled: boolean;
  shuffledTracks: [] | TrackType[];
  currentTrack: null | TrackType;
  isLiked: boolean;
  isPlaying: boolean;
  isFiltered: boolean;
  sortStatus: string;
  filterOptions: {
    authors: string[];
    genres: string[];
    searchValue: string;
  };
  filteredTracks: [] | TrackType[];
};

type SetCurrentTrackType = {
  currentTrack: TrackType;
  tracks: TrackType[];
};
const initialState: TrackListType = {
  tracks: [],
  isShuffled: false,
  shuffledTracks: [],
  currentTrack: null,
  isLiked: false,
  isPlaying: true,
  isFiltered: false,
  sortStatus: "по умолчанию",
  filterOptions: {
    authors: [],
    genres: [],
    searchValue: "",
  },
  filteredTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.tracks = action.payload;
    },
    toggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setIsLiked: (state, action: PayloadAction<boolean>) => {
      state.isLiked = action.payload;
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
    setSorting: (state, action: PayloadAction<string>) => {
      state.sortStatus = action.payload;
      const tracks = state.isFiltered
        ? [...state.filteredTracks]
        : [...state.tracks];
      if (state.sortStatus === "сначала новые") {
        tracks.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
      } else if (state.sortStatus === "сначала старые") {
        tracks.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
      } else if (state.sortStatus === "по умолчанию") {
        tracks.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      state.filteredTracks = tracks;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        authors?: string[];
        genres?: string[];
        searchValue?: string;
      }>
    ) => {
      state.filterOptions = {
        authors: action.payload.authors || state.filterOptions.authors,
        genres: action.payload.genres || state.filterOptions.genres,
        searchValue: action.payload.searchValue || "",
      };

      const hasAuthors = state.filterOptions.authors.length !== 0;
      const hasGenres = state.filterOptions.genres.length !== 0;

      state.filteredTracks = state.tracks.filter((track) => {
        const isAuthors = hasAuthors
          ? state.filterOptions.authors.includes(track.author)
          : true;
        const isGenres = hasGenres
          ? state.filterOptions.genres.includes(track.genre)
          : true;
        const isSearchValueIncluded = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchValue.toLowerCase());

        return isAuthors && isGenres && isSearchValueIncluded;
      });

      state.isFiltered =
        hasAuthors ||
        hasGenres ||
        state.filterOptions.searchValue !== "" ||
        state.sortStatus !== "по умолчанию"
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
  setIsLiked,
  setIsPlaying,
  setCurrentTrack,
  nextTrack,
  prevTrack,
  setFilters,
  setSorting,
} = playlistSlice.actions;

export const playlistReducer = playlistSlice.reducer;

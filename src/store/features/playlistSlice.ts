import { TracksType } from "@/api/tracksApi";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TrackListType = {
  tracks: [] | TracksType[];
  isShuffled: boolean;
  shuffledTracks: [] | TracksType[];
  currentTrack: null | TracksType;
  isPlaying: boolean;
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
      action: PayloadAction<{ authors?: string[]; searchValue?: string }>
    ) => {
      state.filterOptions = {
        authors: action.payload.authors || state.filterOptions.authors,
        searchValue:
          action.payload.searchValue || state.filterOptions.searchValue,
      };
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
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

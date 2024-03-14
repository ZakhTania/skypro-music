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
    nextTrack: (state) => {
      const currentTracks = state.isShuffled
        ? state.shuffledTracks
        : state.tracks;
      const currentTrackIndex = currentTracks.findIndex(
        (item) => item.id === state.currentTrack?.id
      );
      const newTrack = currentTracks[currentTrackIndex + 1];
      if (!newTrack) {
        state.currentTrack = state.tracks[0];
      } else {
        state.currentTrack = newTrack;
      }
      state.isPlaying = true;
    },
    prevTrack: (state) => {
      const currentTracks = state.isShuffled
        ? state.shuffledTracks
        : state.tracks;
      const currentTrackIndex = currentTracks.findIndex(
        (item) => item.id === state.currentTrack?.id
      );
      const newTrack = currentTracks[currentTrackIndex - 1];
      if (!newTrack) {
        state.currentTrack = state.tracks[currentTracks.length - 1];
      } else {
        state.currentTrack = newTrack;
      }
      state.isPlaying = true;
    },
  },
});

export const {
  setTracks,
  toggleShuffled,
  setIsPlaying,
  setCurrentTrack,
  nextTrack,
  prevTrack,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

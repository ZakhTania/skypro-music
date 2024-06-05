import { SelectionListType, getSelectionList } from "@/api/selectionListAPI";
import { TrackType } from "@/api/tracksApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trackAPI = createApi({
  reducerPath: "trackAPI",
  tagTypes: ["tracks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/catalog/",
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<TrackType[], void>({
      query: () => "track/all",
      providesTags: ["tracks"],
    }),
    getSelectionList: builder.query<SelectionListType[], void>({
      query: () => `selection/`,
    }),
    getSelection: builder.query<SelectionListType, { id: string }>({
      query: ({ id }) => `selection/${id}/`,
    }),
    getFavoritesTrack: builder.query<TrackType[], void>({
      query: () => ({
        url: "track/favorite/all",
        headers: {
          Authorization: `Bearer ${getTokenFromLS().access}`,
        },
      }),
      providesTags: ["tracks"],
    }),
    setLike: builder.mutation({
      query: ({ id }) => ({
        url: `track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${getTokenFromLS().access}`,
        },
      }),
      invalidatesTags: ["tracks"],
    }),
    setDisLike: builder.mutation({
      query: ({ id }) => ({
        url: `track/${id}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getTokenFromLS().access}`,
        },
      }),
      invalidatesTags: ["tracks"],
    }),
  }),
});
export const {
  useGetTracksQuery,
  useGetSelectionListQuery,
  useGetSelectionQuery,
  useGetFavoritesTrackQuery,
  useSetLikeMutation,
  useSetDisLikeMutation,
} = trackAPI;

function getTokenFromLS() {
  try {
    const token = JSON.parse(localStorage.getItem("tokens") || "{}");
    return token || null;
  } catch {
    return null;
  }
}

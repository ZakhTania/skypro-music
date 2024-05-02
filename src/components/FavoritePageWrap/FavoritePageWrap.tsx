"use client";
import { getAllFavorites } from "@/api/favoriteTracksAPI";
import TracksLayout from "../TracksLayout/TracksLayout";
import { useGetFavoritesTrackQuery } from "@/store/api/trackAPI";

type FavoritePageType = {
  tokens: {
    access: string;
    refresh: string;
  };
};
export default function FavoritePageWrap({ tokens }: FavoritePageType) {
  // let favoriteTracksList;
  // try {
  //   favoriteTracksList = await getAllFavorites(tokens);
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
  const { data: favoriteTracksList = [] } = useGetFavoritesTrackQuery();
  return (
    <TracksLayout
      title="Мои треки"
      tracks={favoriteTracksList}
      isFilter={false}
      isSidebar={false}
      favoriteTracklist={true}
    />
  );
}

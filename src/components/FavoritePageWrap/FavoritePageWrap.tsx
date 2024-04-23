import { getAllFavorites } from "@/api/favoriteTracksAPI";
import TracksLayout from "../TracksLayout/TracksLayout";

type FavoritePageType = {
  tokens: {
    access: string;
    refresh: string;
  };
};
export default async function FavoritePageWrap({ tokens }: FavoritePageType) {
  let favoriteTracksList;
  try {
    favoriteTracksList = await getAllFavorites(tokens);
  } catch (error: any) {
    throw new Error(error.message);
  }

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

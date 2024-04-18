import { getAllFavorites } from "@/api/favoriteTracksAPI";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
import Cookies from "js-cookie";

export default async function FavoritePage() {
  const cookiesTokens = Cookies.get("tokens");
  console.log(cookiesTokens);
  let favoriteTracksList;
  try {
    if (cookiesTokens) {
      const accessToken = JSON.parse(cookiesTokens).access;
      console.log(accessToken);
      favoriteTracksList = await getAllFavorites(accessToken );
    }
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

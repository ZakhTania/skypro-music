import { getAllFavorites } from "@/api/favoriteTracksAPI";
import TracksLayout from "@/components/TracksLayout/TracksLayout";


// export default async function FavoritePage() {
//     let favoriteTracksList;
//     try {
//         favoriteTracksList = await getAllFavorites();
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   return (
//       <TracksLayout
//         title="Мои треки"
//         tracks={favoriteTracksList}
//         isFilter={false}
//         isSidebar={false}
//       />
//   );
// }

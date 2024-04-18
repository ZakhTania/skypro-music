

const FAVORITE_TRACK_URL =
  "https://skypro-music-api.skyeng.tech/catalog/track/";
const ALL_FAVORITE_TRACKS_URL =
  "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/";

export async function getAllFavorites(accessToken: string) {
  const response = await fetch(ALL_FAVORITE_TRACKS_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function postFavoriteTrack(accessToken: string, id:string) {
    const response = await fetch(ALL_FAVORITE_TRACKS_URL + `${id}/favorite/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  export async function deleteFavoriteTrack(accessToken: string, id:string) {
    const response = await fetch(ALL_FAVORITE_TRACKS_URL + `${id}/favorite/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
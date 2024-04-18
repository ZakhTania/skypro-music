const FAVORITE_TRACK_URL =
  "https://skypro-music-api.skyeng.tech/catalog/track/";
const ALL_FAVORITE_TRACKS_URL =
  "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/";

export async function getAllFavorites(accessToken: string) {
  console.log(accessToken);
  const response = await fetch(ALL_FAVORITE_TRACKS_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}

export async function postFavoriteTrack(accessToken: string, id: number) {
  console.log(id);
  console.log(accessToken);
  console.log(FAVORITE_TRACK_URL + `${id}/favorite/`);

  const response = await fetch(FAVORITE_TRACK_URL + `${id}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}

export async function deleteFavoriteTrack(accessToken: string, id: number) {
  const response = await fetch(FAVORITE_TRACK_URL + `${id}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}

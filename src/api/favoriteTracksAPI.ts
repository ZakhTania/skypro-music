import { getRefresh } from "./userAPI";

const FAVORITE_TRACK_URL =
  "https://skypro-music-api.skyeng.tech/catalog/track/";
const ALL_FAVORITE_TRACKS_URL =
  "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/";

type TokensType = {
  access: string;
  refresh: string;
};
export async function getAllFavorites(tokens: TokensType) {
  const response = await fetch(ALL_FAVORITE_TRACKS_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${tokens.access}`,
    },
  });
  const responseData = await response.json();
  if (response.status === 401) {
    const newAccessToken = await getRefresh(tokens.refresh);
    getAllFavorites(newAccessToken);
    return;
  }

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}

export async function changeLike(
  tokens: TokensType,
  id: number,
  isLiked: boolean
) {
  const response = await fetch(FAVORITE_TRACK_URL + `${id}/favorite/`, {
    method: isLiked ? "DELETE" : "POST",
    headers: {
      Authorization: `Bearer ${tokens.access}`,
    },
  });
  const responseData = await response.json();
  if (response.status === 401) {
    const newAccessToken = await getRefresh(tokens.refresh);
    changeLike(newAccessToken, id, isLiked);
    return;
  }
  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}

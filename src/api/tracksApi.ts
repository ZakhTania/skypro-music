export type TrackType = {
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: null | string;
  track_file: string;
  stared_user: StaredUser[];
};
type StaredUser = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};

const TRACKS_URL = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
export default async function getTracks(): Promise<TrackType[]> {
  const response = await fetch(TRACKS_URL, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}

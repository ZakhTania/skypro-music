export type TracksType = {
  id: number;
  name: string;
  author: string;
  realease_date: string;
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
export default function getTracks(): Promise<TracksType[]> {
  return fetch(TRACKS_URL, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      return response.json();
    })
    .catch((error: Error) => {
      alert(error.message);
    });
}

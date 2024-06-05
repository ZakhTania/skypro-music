import { TrackType } from "./tracksApi";

export type SelectionListType = {
  id: number;
  items: TrackType[];
  owner: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
};

const SELECTION_URL = "https://skypro-music-api.skyeng.tech/catalog/selection/";
export async function getPlayLists(): Promise<SelectionListType> {
  const response = await fetch(SELECTION_URL, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}
export async function getSelectionList(id: string): Promise<SelectionListType> {
  const response = await fetch(SELECTION_URL + id, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}

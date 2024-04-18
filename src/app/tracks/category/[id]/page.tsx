import { getSelectionList } from "@/api/selectionListAPI";
import TracksLayout from "@/components/TracksLayout/TracksLayout";

type CategoryType = {
  params: {
    id: string;
  };
};

export default async function Category({ params }: CategoryType) {
  let selectionList;
  try {
    selectionList = await getSelectionList(params.id);
  } catch (error: any) {
    throw new Error(error.message);
  }
  return (
      <TracksLayout
        title={selectionList.name}
        tracks={selectionList.items}
        isFilter={false}
        isSidebar={false}
        favoriteTracklist={false}
      />
  );
}

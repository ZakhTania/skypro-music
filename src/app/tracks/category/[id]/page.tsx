"use client";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
import { useGetSelectionQuery } from "@/store/api/trackAPI";

type CategoryType = {
  params: {
    id: string;
  };
};

export default function Category({ params }: CategoryType) {
  // let selectionList;
  // try {
  //   selectionList = await getSelectionList(params.id);
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
// console.log(params.id);
  const { data: selectionList } = useGetSelectionQuery({ id: params.id });
  return (
    <TracksLayout
      title={selectionList?.items[0].genre || ""}
      tracks={selectionList?.items || []}
      isFilter={false}
      isSidebar={false}
      favoriteTracklist={false}
    />
  );
}

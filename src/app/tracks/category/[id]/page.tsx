"use client";
import { getSelectionList } from "@/api/selectionListAPI";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
import { useGetSelectionListQuery } from "@/store/api/trackAPI";

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
  const { data: selectionList } = useGetSelectionListQuery({ id: params.id });
  return (
    <TracksLayout
      title={selectionList?.name || ""}
      tracks={selectionList?.items || []}
      isFilter={false}
      isSidebar={false}
      favoriteTracklist={false}
    />
  );
}

"use client";
// import getTracks from "@/api/tracksApi";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
import { useGetTracksQuery } from "@/store/api/trackAPI";

export default function MainTracksPage() {
  // let tracks;
  // try {
  //   tracks = await getTracks();
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
  const { data: tracks = [] } = useGetTracksQuery();
  return (
    <TracksLayout
      title="Треки"
      tracks={tracks}
      isFilter={true}
      isSidebar={true}
      favoriteTracklist={false}
    />
  );
}

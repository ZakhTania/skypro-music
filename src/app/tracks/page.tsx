import getTracks from "@/api/tracksApi";
import TracksLayout from "@/components/TracksLayout/TracksLayout";

export default async function MainTracksPage() {
  let tracks;
  try {
    tracks = await getTracks();
  } catch (error: any) {
    throw new Error(error.message);
  }

  return (
    <TracksLayout
      title="Треки"
      tracks={tracks}
      isFilter={true}
      isSidebar={true}
    />
  );
}

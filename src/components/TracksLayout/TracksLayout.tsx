import { TrackType } from "@/api/tracksApi";
import { Sidebar } from "@/components/Sidebar";
import { Heading } from "@/components/Heading";
import { FilterWrapper } from "@/components/FilterWrapper";
import { PlaylistContent } from "@/components/PlaylistContent";
import { CenterBlock } from "@/components/CenterBlock";
import { Search } from "@/components/Search";

type TracksLayoutType = {
  tracks: [] | TrackType[];
  title: string;
  isFilter: boolean;
  isSidebar: boolean;
  favoriteTracklist: boolean;
};

export default function TracksLayout({
  tracks = [],
  title = "Треки",
  isFilter = true,
  isSidebar = true,
  favoriteTracklist = false,
}: TracksLayoutType) {
  return (
    <>
      <CenterBlock>
        <Search />
        <Heading title={title} />
        {isFilter && <FilterWrapper />}
        <PlaylistContent tracks={tracks} isFilter={isFilter} favoriteTracklist={favoriteTracklist}/>
      </CenterBlock>
      <Sidebar isSidebar={isSidebar} />
    </>
  );
}

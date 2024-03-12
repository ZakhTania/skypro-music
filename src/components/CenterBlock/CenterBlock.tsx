import styles from "./CenterBlock.module.css";
import { Search } from "@/components/Search";
import { FilterWrapper } from "@/components/FilterWrapper";
import { Heading } from "@/components/Heading";
import { PlaylistContent } from "@/components/PlaylistContent";
import { TracksType } from "@/api/tracksApi";

interface CenterBlockType {
  isLoading: boolean;
  tracks: TracksType[];
  setCurrentTrack: (track: TracksType) => void;
}
export default function CenterBlock({
  isLoading,
  tracks,
  setCurrentTrack,
}: CenterBlockType) {
  return (
    <div className={styles.centerblock}>
      <Search />
      <Heading text="Треки" />
      <FilterWrapper />
      <PlaylistContent
        isLoading={isLoading}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
    </div>
  );
}

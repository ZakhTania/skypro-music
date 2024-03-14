import styles from "./CenterBlock.module.css";
import { Search } from "@/components/Search";
import { FilterWrapper } from "@/components/FilterWrapper";
import { Heading } from "@/components/Heading";
import { PlaylistContent } from "@/components/PlaylistContent";
import { TracksType } from "@/api/tracksApi";

type CenterBlockType = {
  tracks: TracksType[];
};
export default function CenterBlock({ tracks }: CenterBlockType) {
  return (
    <div className={styles.centerblock}>
      <Search />
      <Heading text="Треки" />
      <FilterWrapper />
      <PlaylistContent tracks={tracks} />
    </div>
  );
}

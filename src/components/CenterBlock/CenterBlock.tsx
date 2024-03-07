import styles from "./CenterBlock.module.css";
import { Search } from "@/components/Search";
import { FilterWrapper } from "@/components/FilterWrapper";
import { Heading } from "@/components/Heading";
import { PlaylistContent } from "@/components/PlaylistContent";

export default function CenterBlock() {
  return (
    <div className={styles.centerblock}>
      <Search />
      <Heading text="Треки" />
      <FilterWrapper />
      <PlaylistContent />
    </div>
  );
}

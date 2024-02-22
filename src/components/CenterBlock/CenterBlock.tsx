import styles from "./CenterBlock.module.css";
import { Search } from "@/components/Search";
import { Filter } from "@/components/Filter";
import { Heading } from "@/components/Heading";
import { PlaylistContent } from "@/components/PlaylistContent";

export default function CenterBlock() {
  return (
    <div className={styles.centerblock}>
      <Search />
      <Heading text="Треки" />
      <Filter />
      <PlaylistContent />
    </div>
  );
}

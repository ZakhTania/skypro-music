import { Search } from "@/components/Search";
import styles from "./CenterBlock.module.css";
import { Filter } from "@/components/Filter";
import { PlaylistContent } from "@/components/PlaylistContent";
import { Heading } from "@/components/Heading";

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

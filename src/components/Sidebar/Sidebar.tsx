import styles from "./Sidebar.module.css";
import { Personal } from "@/components/Personal";
import { PlaylistCover } from "@/components/PlaylistCover";


export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Personal />
      <div className={styles.block}>
        <div className={styles.list}>
          <PlaylistCover src={"/img/playlist01.png"} alt="day's playlist" />
          <PlaylistCover src={"/img/playlist02.png"} alt="one hundred dance hits" />
          <PlaylistCover src={"/img/playlist03.png"} alt="indie" />
        </div>
      </div>
    </div>
  );
}

import playlist01 from "public/img/playlist01.png";
import playlist02 from "public/img/playlist02.png";
import playlist03 from "public/img/playlist03.png";
import styles from "./Sidebar.module.css";
import { Personal } from "@/components/Personal";
import { Playlist } from "@/components/Playlist";


export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Personal />
      <div className={styles.block}>
        <div className={styles.list}>
          <Playlist src={playlist01} alt="day's playlist" />
          <Playlist src={playlist02} alt="one hundred dance hits" />
          <Playlist src={playlist03} alt="indie" />
        </div>
      </div>
    </div>
  );
}

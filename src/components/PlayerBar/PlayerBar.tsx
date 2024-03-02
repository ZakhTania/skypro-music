import styles from "./PlayerBar.module.css";
import { PlayerControls } from "./PlayerControls";
import { PlayerTrack } from "./PlayerTrack";
import Volume from "./Volume/Volume";

export default function PlayerBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress}></div>
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls />
            <PlayerTrack />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
}

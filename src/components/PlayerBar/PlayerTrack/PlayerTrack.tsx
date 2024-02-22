import { SVG } from "@/components/SVG";
import styles from "./PlayerTrack.module.css";

export default function PlayerTrack() {
  return (
    <div className={styles.trackPlay}>
      <div className={styles.contain}>
        <div className={styles.image}>
          <SVG className={styles.svg} icon="icon-note" />
        </div>
        <div className={styles.author}>
          <a className={styles.authorLink} href="http://">
            Ты та...
          </a>
        </div>
        <div className={styles.album}>
          <a className={styles.albumLink} href="http://">
            Баста
          </a>
        </div>
      </div>

      <div className={styles.likeDis}>
        <div className={`${styles.like} _btn-icon`}>
          <SVG className={styles.likeSvg} icon="icon-like" />
        </div>
        <div className={`${styles.dislike} _btn-icon`}>
          <SVG className={styles.dislikeSvg} icon="icon-dislike" />
        </div>
      </div>
    </div>
  );
}

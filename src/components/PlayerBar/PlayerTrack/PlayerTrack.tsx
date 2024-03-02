import cn from "classnames";
import { SVG } from "@/components/SVG";
import styles from "./PlayerTrack.module.css";
import stylesMod from "@/app/Modifiers.module.css";


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
        <div className={cn(styles.like, stylesMod.btnIcon)}>
          <SVG className={styles.likeSvg} icon="icon-like" />
        </div>
        <div className={cn(styles.dislike, stylesMod.btnIcon)}>
          <SVG className={styles.dislikeSvg} icon="icon-dislike" />
        </div>
      </div>
    </div>
  );
}

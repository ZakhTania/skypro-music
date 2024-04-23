import cn from "classnames";
import { SVG } from "@/components/SVG";
import styles from "./PlayerTrack.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import { TrackType } from "@/api/tracksApi";
import { MouseEvent } from "react";


type PlayerTrackType = {
  currentTrack: TrackType | null;
  isLiked: boolean;
  handleLikeClick: (event: MouseEvent) => void;
};
export default function PlayerTrack({ currentTrack, isLiked, handleLikeClick }: PlayerTrackType) {
  return (
    <div className={styles.trackPlay}>
      <div className={styles.contain}>
        <div className={styles.image}>
          <SVG className={styles.svg} icon="icon-note" />
        </div>
        <div className={styles.author}>
          <a className={styles.authorLink} href="http://">
            {currentTrack?.author}
          </a>
        </div>
        <div className={styles.album}>
          <a className={styles.albumLink} href="http://">
            {currentTrack?.name}
          </a>
        </div>
      </div>

      <div className={styles.likeDis} onClick={handleLikeClick}>
        <div>
          <SVG className={cn(
              styles.likeSvg,
              isLiked ? stylesMod.btnLiked : stylesMod.btnDontliked
            )} icon="icon-like" />
        </div>
        {/* <div className={cn(styles.dislike, stylesMod.btnIcon)}>
          <SVG className={styles.dislikeSvg} icon="icon-dislike" />
        </div> */}
      </div>
    </div>
  );
}

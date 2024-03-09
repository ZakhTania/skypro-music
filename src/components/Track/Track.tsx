import timeFormat from "@/lib/timeFormat";
import { SVG } from "../SVG";
import styles from "./Track.module.css";

type TrackType = {
  title: string;
  feat?: string;
  author: string;
  album: string;
  time: number;
  onClick: () => void;
};
export default function Track({
  title,
  author,
  album,
  feat,
  time,
  onClick,
}: TrackType) {
  return (
    <div onClick={onClick} className={styles.playlistItem}>
      <div className={styles.track}>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            <SVG className={styles.titleSvg} icon="icon-note" />
          </div>
          <div>
            <div className={styles.titleLink}>
              {title} <span className={styles.titleSpan}>{feat}</span>
            </div>
          </div>
        </div>
        <div className={styles.author}>
          <div className={styles.authorLink}>{author}</div>
        </div>
        <div className={styles.album}>
          <div className={styles.albumLink}>{album}</div>
        </div>
        <div>
          <SVG className={styles.timeSvg} icon="icon-like " />
          <span className={styles.timeText}>{timeFormat(time)}</span>
        </div>
      </div>
    </div>
  );
}

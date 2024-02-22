import { SVG } from "../SVG";
import styles from "./Track.module.css";

type TrackProps = {
  title: string;
  feat?: string;  
  author: string;
  album: string;
  time: string;
};
export default function Track({ title, author, album, feat, time }: TrackProps) {
  return (
    <div className={styles.playlistItem}>
      <div className={styles.track}>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            <SVG className={styles.titleSvg} icon="icon-note" />
          </div>
          <div>
            <a className={styles.titleLink} href="http://">
              {title} <span className={styles.titleSpan}>{feat}</span>
            </a>
          </div>
        </div>
        <div className={styles.author}>
          <a className={styles.authorLink} href="http://">
            {author}
          </a>
        </div>
        <div className={styles.album}>
          <a className={styles.albumLink} href="http://">
            {album}
          </a>
        </div>
        <div>
          <SVG className={styles.timeSvg} icon="icon-like " />
          <span className={styles.timeText}>{time}</span>
        </div>
      </div>
    </div>
  );
}

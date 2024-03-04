import styles from "./TrackSkeleton.module.css";

export default function TrackSkeleton() {
  return (
    <div className={styles.playlistItem}>
      <div className={styles.track}>
        <div className={styles.title}>
          <div className={styles.titleImage} />
          <div className={styles.titleSpan} />
        </div>
        <div className={styles.author} />
        <div className={styles.album} />
        <div className={styles.timeText} />
      </div>
    </div>
  );
}

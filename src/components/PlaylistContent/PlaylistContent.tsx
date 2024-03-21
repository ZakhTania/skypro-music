import { Track } from "@/components/Track";
import styles from "./PlaylistContent.module.css";
import cn from "classnames";
import { SVG } from "@/components/SVG";
import { TrackSkeleton } from "../TrackSkeleton";
import { TracksType } from "@/api/tracksApi";

type PlaylistContentType = {
  tracks: TracksType[];
};
export default function PlaylistContent({ tracks }: PlaylistContentType) {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <div className={cn(styles.titleCol, styles.col01)}>Трек</div>
        <div className={cn(styles.titleCol, styles.col02)}>Исполнитель</div>
        <div className={cn(styles.titleCol, styles.col03)}>Альбом</div>
        <div className={cn(styles.titleCol, styles.col04)}>
          <SVG className={styles.titleSvg} icon="icon-watch" />
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track) => (
          <Track key={track.id} track={track} tracks={tracks} />
        ))}
      </div>
    </div>
  );
}

"use client";
import { Track } from "@/components/Track";
import styles from "./PlaylistContent.module.css";
import cn from "classnames";
import { SVG } from "@/components/SVG";
import { TrackSkeleton } from "../TrackSkeleton";
import { TracksType } from "@/api/tracksApi";

interface PlaylistContentType {
  isLoading: boolean;
  tracks: TracksType[];
  setCurrentTrack: (track: TracksType) => void;
}
export default function PlaylistContent({
  isLoading,
  tracks,
  setCurrentTrack,
}: PlaylistContentType) {
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
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <TrackSkeleton key={index} />
            ))
          : tracks.map((track) => (
              <Track
                key={track.id}
                title={track.name}
                author={track.author}
                album={track.album}
                time={track.duration_in_seconds}
                onClick={() => setCurrentTrack(track)}
              />
            ))}
      </div>
    </div>
  );
}

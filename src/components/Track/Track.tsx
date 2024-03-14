"use client";
import timeFormat from "@/lib/timeFormat";
import { SVG } from "../SVG";
import styles from "./Track.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { TracksType } from "@/api/tracksApi";
import { setCurrentTrack } from "@/store/features/playlistSlice";
import { useEffect, useRef } from "react";

type TrackType = {
  track: TracksType;
  tracks: TracksType[];
};
export default function Track({ track, tracks }: TrackType) {
  const { name, author, album, duration_in_seconds, id } = track;
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const currentTrackRef = useRef<HTMLDivElement | null>(null);
  const isPlaying = useAppSelector((store) => store.playlist.isPlaying);
  useEffect(() => {
    if (!currentTrackRef.current) {
      return;
    }
    currentTrackRef.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [currentTrack]);
  return (
    <div
      onClick={() => dispatch(setCurrentTrack({ currentTrack: track, tracks }))}
      className={styles.playlistItem}
    >
      <div className={styles.track}>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            {currentTrack?.id === id && (
              <div
                ref={currentTrackRef}
                className={isPlaying ? styles.pulse : styles.current}
              />
            )}
            <SVG className={styles.titleSvg} icon="icon-note" />
          </div>
          <div>
            <div className={styles.titleLink}>
              {name} <span className={styles.titleSpan}></span>
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
          <span className={styles.timeText}>
            {timeFormat(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}

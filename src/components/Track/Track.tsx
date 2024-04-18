"use client";
import timeFormat from "@/lib/timeFormat";
import { SVG } from "../SVG";
import styles from "./Track.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { TrackType } from "@/api/tracksApi";
import { setCurrentTrack } from "@/store/features/playlistSlice";
import { MouseEvent, useEffect, useRef } from "react";
import cn from "classnames";
import {
  deleteFavoriteTrack,
  postFavoriteTrack,
} from "@/api/favoriteTracksAPI";

type TrackPropsType = {
  track: TrackType;
  tracks: TrackType[];
  isLiked: boolean;
};
export default function Track({ track, tracks, isLiked }: TrackPropsType) {
  const { name, author, album, duration_in_seconds, id, stared_user } = track;
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const currentTrackRef = useRef<HTMLDivElement | null>(null);
  const isPlaying = useAppSelector((store) => store.playlist.isPlaying);
  // const authID = JSON.parse(Cookies.get("user") ?? "").id;
  // const [isLiked, setIsLiked] = useState(false);
  // useEffect(() => {
  //   if( authID !== undefined) {
  //     setIsLiked(!!stared_user.find(({ id }) => id === authID));
  //   }

  // }, [stared_user, authID]);
  const accessToken = useAppSelector((store) => store.auth.token.access);
  useEffect(() => {
    if (!currentTrackRef.current) {
      return;
    }
    currentTrackRef.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [currentTrack]);
  const handleLikeClick = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (isLiked) {
      deleteFavoriteTrack(accessToken, id);
    } else {
      postFavoriteTrack(accessToken, id);
    }
  };
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
        <div onClick={(event: MouseEvent) => handleLikeClick(event)}>
          <SVG
            className={cn(
              styles.likeSvg,
              isLiked ? stylesMod.btnLiked : stylesMod.btnDontliked
            )}
            icon="icon-like "
          />
          <span className={styles.timeText}>
            {timeFormat(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}

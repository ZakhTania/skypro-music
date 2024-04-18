"use client";
import { Track } from "@/components/Track";
import styles from "./PlaylistContent.module.css";
import cn from "classnames";
import { SVG } from "@/components/SVG";
import { TrackType } from "@/api/tracksApi";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect } from "react";
import { setTracks } from "@/store/features/playlistSlice";

type PlaylistContentType = {
  tracks: TrackType[];
  isFilter: boolean;
  favoriteTracklist: boolean;
};
export default function PlaylistContent({
  tracks,
  isFilter,
  favoriteTracklist,
}: PlaylistContentType) {
  const dispatch = useAppDispatch();
  const isFiltered =
    useAppSelector((store) => store.playlist.isFiltered) && isFilter;

  const filteredTracks = useAppSelector(
    (store) => store.playlist.filteredTracks
  );
  const authID = useAppSelector((store) => store.auth.user.id);
  useEffect(() => {
    dispatch(setTracks(tracks));
  }, [tracks]);

  const currentTracks = isFiltered ? filteredTracks : tracks;

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
        {currentTracks.length === 0 && (
          <>
            <div>Нет элементов удовлетворяющих условиям.</div>
            <div>
              Проверьте, не задали ли вы слишком ограничивающие фильтры, которые
              исключают подходящие элементы.
            </div>
          </>
        )}
        {currentTracks.map((track: TrackType) => (
          <Track
            key={track.id}
            track={track}
            tracks={tracks}
            isLiked={
              favoriteTracklist
                ? true
                : !!(track.stared_user ?? []).find(({ id }) => id === authID)
            }
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import { Track } from "@/components/Track";
import styles from "./PlaylistContent.module.css";
import cn from "classnames";
import { SVG } from "@/components/SVG";
import { TracksType } from "@/api/tracksApi";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";
import { setTracks } from "@/store/features/playlistSlice";

type PlaylistContentType = {
  tracks: TracksType[];
};
export default function PlaylistContent({ tracks }: PlaylistContentType) {
  const dispatch = useAppDispatch();
  const isFiltered = useAppSelector((store) => store.playlist.isFiltered);
  const filteredTracks = useAppSelector(
    (store) => store.playlist.filteredTracks
  );
  const filterYearsOption = useAppSelector(
    (store) => store.playlist.filterOptions.years
  );
  const [trackList, setTrackList] = useState(tracks);

  useEffect(() => {
    dispatch(setTracks(tracks));
  }, [tracks]);

  useEffect(() => {
    setTrackList((prev) => (prev = isFiltered ? filteredTracks : tracks));
  }, [isFiltered, filteredTracks]);

  const defaultTracks = trackList;

  useEffect(() => {
    if (filterYearsOption === "сначала новые") {
      const tracks = defaultTracks
        .slice()
        .sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
      setTrackList(tracks);
    }
    if (filterYearsOption === "сначала старые") {
      setTrackList(
        defaultTracks
          .slice()
          .sort((a, b) => (a.release_date > b.release_date ? 1 : -1))
      );
    }
    if (filterYearsOption === "по умолчанию") {
      setTrackList((prev) => (prev = isFiltered ? filteredTracks : tracks));
    }
  }, [filterYearsOption]);

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
        {isFiltered && trackList.length === 0 && (
          <>
            <div>Нет элементов удовлетворяющих условиям.</div>
            <div>
              Проверьте, не задали ли вы слишком ограничивающие фильтры, которые
              исключают подходящие элементы.
            </div>
          </>
        )}
        {trackList.map((track) => (
          <Track key={track.id} track={track} tracks={tracks} />
        ))}
      </div>
    </div>
  );
}

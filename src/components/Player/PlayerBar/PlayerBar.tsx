"use client";
import styles from "./PlayerBar.module.css";
import timeFormat from "@/lib/timeFormat";
import { useRef, useState } from "react";
import { ProgressBar } from "@/components/Player/ProgressBar";
import { PlayerControls } from "@/components/Player/PlayerControls";
import { PlayerTrack } from "@/components/Player/PlayerTrack";
import { Volume } from "@/components/Player/Volume";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { nextTrack, setIsPlaying } from "@/store/features/playlistSlice";

export default function PlayerBar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const isPlaying = useAppSelector((store) => store.playlist.isPlaying);
  const [isLooping, setIsLooping] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [volume, setVolume] = useState(0.2);
  let duration = 230;
  let durationDisplay = "00:00";
  let elapsedDisplay = "00:00";
  if (audioRef.current) {
    if (audioRef.current.duration) {
      duration = audioRef.current.duration;
      durationDisplay = timeFormat(Math.floor(audioRef.current.duration));
      elapsedDisplay = timeFormat(Math.floor(currentProgress));
    }
  }

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(setIsPlaying(true));
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      dispatch(setIsPlaying(false));
    }
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const toggleLoop = () => {
    setIsLooping((prev) => !prev);
  };

  const handelProgressChange = (e: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = e;
  };

  if (audioRef.current?.ended) {
    dispatch(nextTrack());
  }

  return (
    <div className={styles.bar}>
      {currentTrack && (
        <>
          <audio
            autoPlay
            loop={isLooping}
            src={currentTrack.track_file}
            ref={audioRef}
            onTimeUpdate={(e) => {
              setCurrentProgress(e.currentTarget.currentTime);
            }}
          />
          <div className={styles.barContent}>
            <div className={styles.elapsedOverDuration}>
                { elapsedDisplay } / { durationDisplay }
            </div>
            <ProgressBar
              currentProgress={currentProgress}
              setCurrentProgress={setCurrentProgress}
              duration={duration}
              handelProgressChange={handelProgressChange}
            />
            <div className={styles.barPlayerBlock}>
              <div className={styles.barPlayer}>
                <PlayerControls
                  togglePlay={togglePlay}
                  toggleLoop={toggleLoop}
                  isLooping={isLooping}
                />
                <PlayerTrack currentTrack={currentTrack} />
              </div>
              <Volume volume={volume} onVolumeChange={handleVolumeChange} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

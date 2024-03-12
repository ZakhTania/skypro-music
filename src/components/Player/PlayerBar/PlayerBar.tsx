import styles from "./PlayerBar.module.css";
import timeFormat from "@/lib/timeFormat";
import { useRef, useState } from "react";
import { TracksType } from "@/api/tracksApi";
import { ProgressBar } from "@/components/Player/ProgressBar";
import { PlayerControls } from "@/components/Player/PlayerControls";
import { PlayerTrack } from "@/components/Player/PlayerTrack";
import { Volume } from "@/components/Player/Volume";

type PlayerBarType = {
  currentTrack: TracksType | null;
};
export default function PlayerBar({ currentTrack }: PlayerBarType) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [volume, setVolume] = useState(0.2);

  const duration = audioRef.current ? audioRef.current.duration : 230;
  const durationDisplay = audioRef.current
    ? timeFormat(Math.floor(audioRef.current.duration))
    : null;
  const elapsedDisplay = audioRef.current
    ? timeFormat(Math.floor(currentProgress))
    : null;

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
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
              {elapsedDisplay} / {durationDisplay}
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
                  isPlaying={isPlaying}
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

import cn from "classnames";
import styles from "./PlayerControls.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import { SVG } from "@/components/SVG";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  nextTrack,
  prevTrack,
  toggleShuffled,
} from "@/store/features/playlistSlice";

type PlayerControlsType = {
  isLooping: boolean;
  togglePlay: () => void;
  toggleLoop: () => void;
};

export default function PlayerControls({
  togglePlay,
  toggleLoop,
  isLooping,
}: PlayerControlsType) {
  const dispatch = useAppDispatch();
  const isShuffled = useAppSelector((store) => store.playlist.isShuffled);
  const isPlaying = useAppSelector((store) => store.playlist.isPlaying);
  return (
    <div className={styles.playerControls}>
      <button
        onClick={() => dispatch(prevTrack())}
        className={cn(styles.playerBtnPrev, stylesMod.btn)}
      >
        <SVG className={styles.playerBtnPrevSvg} icon={"icon-prev"} />
      </button>
      <button
        onClick={togglePlay}
        className={cn(styles.playerBtnPlay, stylesMod.btn)}
      >
        {isPlaying ? (
          <SVG className={styles.playerBtnPlaySvg} icon={"icon-pause"} />
        ) : (
          <SVG className={styles.playerBtnPlaySvg} icon={"icon-play"} />
        )}
      </button>
      <button
        onClick={() => dispatch(nextTrack())}
        className={cn(styles.playerBtnNext, stylesMod.btn)}
      >
        <SVG className={styles.playerBtnNextSvg} icon={"icon-next"} />
      </button>
      <button
        onClick={toggleLoop}
        className={
          isLooping
            ? cn(styles.playerBtnRepeat, stylesMod.btnIconActive)
            : cn(styles.playerBtnRepeat, stylesMod.btnIcon)
        }
      >
        <SVG className={styles.playerBtnRepeatSvg} icon={"icon-repeat"} />
      </button>
      <button
        onClick={() => dispatch(toggleShuffled())}
        className={
          isShuffled
            ? cn(styles.playerBtnRepeat, stylesMod.btnIconActive)
            : cn(styles.playerBtnRepeat, stylesMod.btnIcon)
        }
      >
        <SVG className={styles.playerBtnShuffleSvg} icon={"icon-shuffle"} />
      </button>
    </div>
  );
}

import cn from "classnames";
import styles from "./PlayerControls.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import { SVG } from "@/components/SVG";

interface PlayerControlsType {
  isPlaying: boolean;
  isLooping: boolean;
  togglePlay: () => void;
  toggleLoop: () => void;
}

export default function PlayerControls({
  togglePlay,
  isPlaying,
  toggleLoop,
  isLooping,
}: PlayerControlsType) {
  function handelBtnInDev() {
    alert("Еще не реализовано");
  }
  return (
    <div className={styles.playerControls}>
      <button
        onClick={handelBtnInDev}
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
        onClick={handelBtnInDev}
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
        onClick={handelBtnInDev}
        className={cn(styles.playerBtnRepeat, stylesMod.btnIcon)}
      >
        <SVG className={styles.playerBtnShuffleSvg} icon={"icon-shuffle"} />
      </button>
    </div>
  );
}

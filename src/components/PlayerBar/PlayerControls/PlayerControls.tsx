import cn from "classnames";
import styles from "./PlayerControls.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import { SVG } from "@/components/SVG";

export default function PlayerControls() {
  return (
    <div className={styles.playerControls}>
      <div className={cn(styles.playerBtnPrev, stylesMod.btn)}>
        <SVG className={styles.playerBtnPrevSvg} icon={"icon-prev"} />
      </div>
      <div className={cn(styles.playerBtnPlay, stylesMod.btn)}>
        <SVG className={styles.playerBtnPlaySvg} icon={"icon-play"} />
      </div>
      <div className={cn(styles.playerBtnNext, stylesMod.btn)}>
        <SVG className={styles.playerBtnNextSvg} icon={"icon-next"} />
      </div>
      <div className={cn(styles.playerBtnRepeat, stylesMod.btnIcon)}>
        <SVG className={styles.playerBtnRepeatSvg} icon={"icon-repeat"} />
      </div>
      <div className={cn(styles.playerBtnRepeat, stylesMod.btnIcon)}>
        <SVG className={styles.playerBtnShuffleSvg} icon={"icon-shuffle"} />
      </div>
    </div>
  );
}

import styles from "./PlayerControls.module.css";
import classNames from "classnames";
import { SVG } from "../../SVG";

export default function PlayerControls() {
  return (
    <div className={styles.playerControls}>
      <div className={classNames(styles.playerBtnPrev, styles.btn)}>
        <SVG className={styles.playerBtnPrevSvg} icon={"icon-prev"} />
      </div>
      <div className={classNames(styles.playerBtnPlay, styles.btn)}>
        <SVG className={styles.playerBtnPlaySvg} icon={"icon-play"} />
      </div>
      <div className={classNames(styles.playerBtnNext, styles.btn)}>
        <SVG className={styles.playerBtnNextSvg} icon={"icon-next"} />
      </div>
      <div className={`${styles.playerBtnRepeat} _btn-icon`}>
        <SVG className={styles.playerBtnRepeatSvg} icon={"icon-repeat"} />
      </div>
      <div className={`${styles.playerBtnShuffle} _btn-icon`}>
        <SVG className={styles.playerBtnShuffleSvg} icon={"icon-shuffle"} />
      </div>
    </div>
  );
}

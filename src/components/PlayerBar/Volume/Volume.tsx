import styles from "./Volume.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import { SVG } from "@/components/SVG";
import cn from "classnames";

type VolumeType = {
  volume: number;
  onVolumeChange: (volume: number) => void;
};
export default function Volume({ volume, onVolumeChange }: VolumeType) {
  return (
    <div className={styles.volumeBlock}>
      <div className={styles.content}>
        <div className={styles.image}>
          <SVG className={styles.svg} icon="icon-volume" />
        </div>
        <div className={cn(styles.progress, stylesMod.btn)}>
          <input
            className={cn(styles.progressLine, stylesMod.btn)}
            type="range"
            name="volume"
            min={0}
            step={0.05}
            max={1}
            value={volume}
            onChange={(e) => {
              onVolumeChange(e.currentTarget.valueAsNumber);
            }}
          />
        </div>
      </div>
    </div>
  );
}

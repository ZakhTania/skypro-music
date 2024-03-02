import styles from "./Volume.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import { SVG } from "@/components/SVG";
import { Input } from "@/components/Input";
import cn from "classnames";

export default function Volume() {
  return (
    <div className={styles.volumeBlock}>
      <div className={styles.content}>
        <div className={styles.image}>
          <SVG className={styles.svg} icon="icon-volume" />
        </div>
        <div className={cn(styles.progress, stylesMod.btn)}>
          <Input
            className={cn(styles.progressLine, stylesMod.btn)}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}

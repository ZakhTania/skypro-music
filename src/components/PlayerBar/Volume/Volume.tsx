import { SVG } from "@/components/SVG";
import styles from "./Volume.module.css";
import { Input } from "@/components/Input";

export default function Volume() {
  return (
    <div className={styles.volumeBlock}>
      <div className={styles.content}>
        <div className={styles.image}>
            <SVG className={styles.svg} icon="icon-volume" />
        </div>
        <div className={`${styles.progress} _btn`}>
          <Input
            className={`${styles.progressLine} _btn`}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}

import { SVG } from "@/components/SVG";
import styles from "./Personal.module.css";

export default function Perstnal() {
  return (
    <div className={styles.personal}>
      <p className={styles.personalName}>Sergey.Ivanov</p>
      <div>
        <SVG icon="logout" className={styles.icon} />
      </div>
    </div>
  );
}

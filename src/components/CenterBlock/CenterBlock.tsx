import styles from "./CenterBlock.module.css";
import { ReactNode } from "react";

type CenterBlockType = {
  children: ReactNode;
};
export default function CenterBlock({children}: CenterBlockType) {
  return (
    <div className={styles.centerblock}>
      {children}
    </div>
  );
}

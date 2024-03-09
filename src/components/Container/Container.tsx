import { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerType = { children: ReactNode };

export default function Container({ children }: ContainerType) {
  return <div className={styles.container}>{children}</div>;
}

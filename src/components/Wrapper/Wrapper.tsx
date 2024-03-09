import { ReactNode } from "react";
import styles from "./Wrapper.module.css";

type WrapperType = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperType) {
  return <div className={styles.wrapper}>{children}</div>;
}

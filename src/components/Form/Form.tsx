import { ReactElement, ReactNode } from "react";
import styles from "./Form.module.css";

type FormType = {
  children: ReactNode;
};
export default function Form({ children }: FormType) {
  return <form className={styles.form}>{children}</form>;
}

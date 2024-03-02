import { ReactElement } from "react";
import styles from "./Form.module.css";

type FormProps = {
  children: any;
};
export default function Form({ children }: FormProps) {
  return <form className={styles.form}>{children}</form>;
}

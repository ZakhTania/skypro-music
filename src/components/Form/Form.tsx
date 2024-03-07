import { ReactElement } from "react";
import styles from "./Form.module.css";

type FormType = {
  children: any;
};
export default function Form({ children }: FormType) {
  return <form className={styles.form}>{children}</form>;
}

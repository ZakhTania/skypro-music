import Link from "next/link";
import styles from "./ButtonEnter.module.css";

type ButtonType = {
  text: string;
};
export default function ButtonEnter({ text }: ButtonType) {
  return (
    <button className={styles.btnEnter}>
      <Link href={"/"}>{text}</Link>
    </button>
  );
}

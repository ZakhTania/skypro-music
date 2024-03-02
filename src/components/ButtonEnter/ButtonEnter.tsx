import Link from "next/link";
import styles from "./ButtonEnter.module.css";

type ButtonProps = {
  text: string;
};
export default function ButtonEnter({ text }: ButtonProps) {
  return (
    <button className={styles.btnEnter}>
      <Link href={"/"}>{text}</Link>
    </button>
  );
}

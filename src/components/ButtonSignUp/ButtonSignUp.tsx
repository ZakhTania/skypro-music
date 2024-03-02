import Link from "next/link";
import styles from "./ButtonSignUp.module.css";

type ButtonType = {
  text: string;
};
export default function ButtonSignUp({ text }: ButtonType) {
  return (
    <button className={styles.btnSignupEnt}>
      <Link href={"/signup"}>{text}</Link>
    </button>
  );
}

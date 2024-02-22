import Link from "next/link";
import styles from "./ButtonSignUp.module.css";

type ButtonProps = {
  text: string;
};
export default function ButtonSignUp({ text }: ButtonProps) {
  return (
    <button className={styles.btnSignupEnt}>
      <Link href={"/signup"}>{text}</Link>
    </button>
  );
}

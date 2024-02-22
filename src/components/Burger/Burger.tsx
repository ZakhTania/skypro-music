import styles from "./Burger.module.css";

export default function Burger() {
  return (
    <div className={styles.burger}>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </div>
  );
}

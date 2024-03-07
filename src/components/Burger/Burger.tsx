import styles from "./Burger.module.css";
type BurgerType = {
  onClick: () => void;
};
export default function Burger({ onClick }: BurgerType) {
  return (
    <button className={styles.burger} onClick={onClick}>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </button>
  );
}

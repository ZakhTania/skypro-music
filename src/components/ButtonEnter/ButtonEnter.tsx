import styles from "./ButtonEnter.module.css";

type ButtonType = {
  text: string;
  disabled?: boolean;
  onClick: ()=> void;
};
export default function ButtonEnter({ text, disabled, onClick }: ButtonType) {
  return (
    <button className={styles.btnEnter} disabled={disabled} onClick={onClick} >
      {text}
    </button>
  );
}

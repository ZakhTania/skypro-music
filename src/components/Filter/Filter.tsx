import cn from "classnames";
import styles from "./Filter.module.css";
import stylesMod from "@/app/Modifiers.module.css";

export default function Filter() {
    return (
        <div className={styles.filter}>
        <div className={styles.title}>Искать по:</div>
        <div className={cn(styles.button, stylesMod.btnText)}>
          исполнителю
        </div>
        <div className={cn(styles.button, stylesMod.btnText)}>году выпуска</div>
        <div className={cn(styles.button, stylesMod.btnText)}>жанру</div>
      </div>
    )
}
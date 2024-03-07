import styles from "./Filter.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import cn from "classnames";

type FilterType = {
  list: Array<{ id: number; name: string }>;
  title: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function Filter({ list, title, isOpen, onClick }: FilterType) {
  return (
    <div className={styles.wrap}>
      <button
        className={isOpen ? cn(styles.button, stylesMod.btnTextActive) : cn(styles.button, stylesMod.btnText)}
        onClick={onClick}
      >
        {title}
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          <div className={styles.listWrap}>
            {list.map((item) => (
              <li className={styles.list} key={item.id}>
                {item.name}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}

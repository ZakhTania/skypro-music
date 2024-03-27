import styles from "./Filter.module.css";
import stylesMod from "@/app/Modifiers.module.css";
import cn from "classnames";

type FilterType = {
  list: string[];
  title: string;
  isOpen: boolean;
  selected: string[] | string;
  toggleSelected: (item: string, title: string) => void;
  onClick: () => void;
};

export default function Filter({
  list,
  title,
  isOpen,
  selected,
  toggleSelected,
  onClick,
}: FilterType) {
  const countSelected = typeof selected === 'object' && selected.length > 0;
  return (
    <div className={styles.wrap}>
      {countSelected  && <div className={styles.filterCounter}>{selected.length}</div>}
      <button
        className={isOpen ? cn(styles.button, stylesMod.btnTextActive) : cn(styles.button, stylesMod.btnText)}
        onClick={onClick}
      >
        {title}
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          <div className={styles.listWrap}>
            {list.map((item, index) => {
              const activeClass = selected.includes(item) || (item === "Неизвестный исполнитель" && selected.includes("-"))
                ? stylesMod.btnTextActive
                : "";
              return (
                <li
                  className={cn(styles.list, activeClass)}
                  key={index}
                  onClick={() => toggleSelected(item, title)}
                >
                  {item}
                </li>
              );
            })}
          </div>
        </ul>
      )}
    </div>
  );
}

import { SVG } from "@/components/SVG";
import styles from "./Search.module.css";
import { Input } from "../Input";

export default function Search() {
  return (
    <div className={styles.search}>
      <SVG className={styles.svg} icon="icon-search" />
      <Input
        className={styles.text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}

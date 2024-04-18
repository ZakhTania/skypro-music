"use client";
import { SVG } from "@/components/SVG";
import styles from "./Search.module.css";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { setFilters } from "@/store/features/playlistSlice";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div className={styles.search}>
      <SVG className={styles.svg} icon="icon-search" />
      <input
        className={styles.text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          dispatch(setFilters({ searchValue: e.target.value }));
        }}
      />
    </div>
  );
}

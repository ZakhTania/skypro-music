"use client";
import styles from "./FilterWrapper.module.css";
import { Filter } from "../Filter";
import { filters } from "./data";
import { useState } from "react";

export default function FilterWrapper() {
  const [activeFilter, setActiveFilter] = useState<null | string>(null);
  function handleFilterClick(filterName: string) {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  }
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Искать по:</div>
      {filters.map((filter) => (
        <Filter
          key={filter.key}
          title={filter.title}
          list={filter.list}
          isOpen={activeFilter === filter.key}
          onClick={() => handleFilterClick(filter.key)}
        />
      ))}
    </div>
  );
}

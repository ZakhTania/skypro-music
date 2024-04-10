"use client";
import styles from "./FilterWrapper.module.css";
import { Filter } from "../Filter";
import { useCallback, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setFilters, setSorting } from "@/store/features/playlistSlice";

const yearsArr: string[] = ["по умолчанию", "сначала новые", "сначала старые"];

export default function FilterWrapper() {
  const [activeFilter, setActiveFilter] = useState<null | string>(null);
  const tracks = useAppSelector((store) => store.playlist.tracks);
  const selectedAuthors = useAppSelector(
    (store) => store.playlist.filterOptions.authors
  );
  const selectedYears = useAppSelector((store) => store.playlist.sortStatus);
  const selectedGenres = useAppSelector(
    (store) => store.playlist.filterOptions.genres
  );
  const dispatch = useAppDispatch();

  const authorsArr: string[] = tracks.map(({ author }) => {
    author = author === "-" ? "Неизвестный исполнитель" : author;
    return author;
  });

  const genresArr: string[] = tracks.map(({ genre }) => {
    return genre;
  });

  const getFilterArr = useCallback((data: string[]) => {
    return data
      .filter(
        (value: string, index: number, array: string[]) =>
          array.indexOf(value) === index
      )
      .sort();
  }, []);

  const authors: string[] = useMemo(() => {
    return getFilterArr(authorsArr);
  }, [getFilterArr, authorsArr]);
  const years: string[] = useMemo(() => {
    return getFilterArr(yearsArr);
  }, [getFilterArr]);
  const genres: string[] = useMemo(() => {
    return getFilterArr(genresArr);
  }, [getFilterArr, genresArr]);

  function toggleSelected(item: string, title: string) {
    if (title === "исполнителю") {
      item = item === "Неизвестный исполнитель" ? "-" : item;
      dispatch(
        setFilters({
          authors: selectedAuthors.includes(item)
            ? selectedAuthors.filter((author) => author !== item)
            : [...selectedAuthors, item],
        })
      );
    }
    if (title === "году выпуска") {
      dispatch(
        setSorting(selectedYears.includes(item) ? "по умолчанию" : item)
      );
    }
    if (title === "жанру") {
      dispatch(
        setFilters({
          genres: selectedGenres.includes(item)
            ? selectedGenres.filter((author) => author !== item)
            : [...selectedGenres, item],
        })
      );
    }
  }

  const filters = [
    {
      title: "исполнителю",
      list: authors,
      key: "authors",
      selected: selectedAuthors,
    },
    {
      title: "году выпуска",
      list: years,
      key: "years",
      selected: selectedYears,
    },
    { title: "жанру", list: genres, key: "genres", selected: selectedGenres },
  ];

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
          selected={filter.selected}
          toggleSelected={toggleSelected}
          isOpen={activeFilter === filter.key}
          onClick={() => handleFilterClick(filter.key)}
        />
      ))}
    </div>
  );
}

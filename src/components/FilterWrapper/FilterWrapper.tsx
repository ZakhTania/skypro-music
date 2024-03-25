"use client";
import styles from "./FilterWrapper.module.css";
import { Filter } from "../Filter";
import { useCallback, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setFiltredTracks } from "@/store/features/playlistSlice";

export default function FilterWrapper() {
  const [activeFilter, setActiveFilter] = useState<null | string>(null);
  const tracks = useAppSelector((store) => store.playlist.tracks);
  const selectedAuthors = useAppSelector(
    (store) => store.playlist.filterOptions.authors
  );
  const selectedYears = useAppSelector(
    (store) => store.playlist.filterOptions.years
  );
  const selectedGenres = useAppSelector(
    (store) => store.playlist.filterOptions.genres
  );
  const dispatch = useAppDispatch();

  const authorsArr: string[] = tracks.map(({ author }) => {
    author = author === "-" ? "Неизвестный исполнитель" : author;
    return author;
  });
  const yearsArr: string[] = [
    "по умолчанию",
    "сначала новые",
    "сначала старые",
  ];
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
  }, [getFilterArr])
  const genres: string[] = useMemo(() => { 
    return getFilterArr(genresArr);
  }, [getFilterArr, genresArr])

  function toggleSelected(item: string, title: string) {
    console.log(item);
    if (title === "исполнителю") {
      item = item === "Неизвестный исполнитель" ? "-" : item;
      dispatch(
        setFiltredTracks({
          authors: selectedAuthors.includes(item)
            ? selectedAuthors.filter((author) => author !== item)
            : [...selectedAuthors, item],
        })
      );
    }
    if (title === "году выпуска") {
      dispatch(
        setFiltredTracks({
          years: selectedYears.includes(item) ? "по умолчанию" : item,
        })
      );
    }
    if (title === "жанру") {
      dispatch(
        setFiltredTracks({
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
    console.log(selectedGenres);
    console.log(selectedYears);
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

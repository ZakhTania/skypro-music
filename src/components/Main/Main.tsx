"use client"
import styles from "./Main.module.css";
import { Navigation } from "@/components/Navigation";
import { CenterBlock } from "@/components/CenterBlock";
import { Sidebar } from "../Sidebar";
import { TracksType } from "@/api/tracksApi";
import { useAppDispatch } from "@/hooks/hooks";
import { setTracks } from "@/store/features/playlistSlice";

type MainType = {
  tracks: TracksType[];
};
export default function Main({ tracks }: MainType) {
const dispatch = useAppDispatch();
dispatch(setTracks(tracks));

  return (
    <main className={styles.main}>
      <Navigation />
      <CenterBlock tracks={tracks} />
      <Sidebar />
    </main>
  );
}

import styles from "./Main.module.css";
import { Navigation } from "@/components/Navigation";
import { CenterBlock } from "@/components/CenterBlock";
import { Sidebar } from "../Sidebar";
import { TracksType } from "@/api/tracksApi";

interface MainType {
  isLoading: boolean;
  tracks: TracksType[];
  setCurrentTrack: (track: TracksType) => void;
}
export default function Main({ isLoading, tracks, setCurrentTrack }: MainType) {
  return (
    <main className={styles.main}>
      <Navigation />
      <CenterBlock
        isLoading={isLoading}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
      <Sidebar />
    </main>
  );
}

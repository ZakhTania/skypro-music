import styles from "./Main.module.css";
import { Navigation } from "@/components/Navigation";
import { CenterBlock } from "@/components/CenterBlock";
import { Sidebar } from "../Sidebar";
import { TracksType } from "@/api/tracksApi";


type MainType = {
  tracks: TracksType[];
};
export default function Main({ tracks }: MainType) {
  return (
    <main className={styles.main}>
      <Navigation />
      <CenterBlock tracks={tracks} />
      <Sidebar />
    </main>
  );
}

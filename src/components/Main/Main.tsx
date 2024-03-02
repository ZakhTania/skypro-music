import styles from "./Main.module.css";
import { Navigation } from "@/components/Navigation";
import { CenterBlock } from "@/components/CenterBlock";
import { Sidebar } from "../Sidebar";

export default function Main() {
  return (
    <main className={styles.main}>
      <Navigation />
      <CenterBlock />
      <Sidebar />
    </main>
  );
}

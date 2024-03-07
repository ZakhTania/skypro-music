import { Logo } from "@/components/Logo";
import styles from "./Navigation.module.css";
import { Menu } from "../Menu";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Menu />
    </nav>
  );
}

import { Logo } from "@/components/Logo";
import styles from "./Navigation.module.css";
import { Burger } from "@/components/Burger";
import { Menu } from "../Menu";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Burger />
      <Menu />
    </nav>
  );
}

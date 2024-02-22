import Image from "next/image";
import logo from "public/img/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
    return (
        <div className={styles.logo}>
        <Image
          className={styles.logoImage}
          src={logo}
          alt="logo image"
          width={113.33}
          height={17}
        />
      </div>
    )
}
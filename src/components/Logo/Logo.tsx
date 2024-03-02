import Image from "next/image";
import logo from "public/img/logo.png";
import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo() {
    return (
        <div className={styles.logo}>
          <Link href={"/"}>
        <Image
          className={styles.logoImage}
          src={logo}
          alt="logo image"
          width={113.33}
          height={17}
        />
        </Link>
      </div>
    )
}
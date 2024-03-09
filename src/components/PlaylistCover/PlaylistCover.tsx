import Image from "next/image";
import styles from "./PlaylistCover.module.css";

type PlaylistCoverType = {
    src : string;
    alt : string
}
export default function PlaylistCover({src, alt} : PlaylistCoverType) {
    return (
        <div className={styles.item}>
        <a className={styles.link} href="#">
          <Image
            className={styles.img}
            src={src}
            alt={alt}
            width={250}
            height={150}
          />
        </a>
      </div>
    )
}
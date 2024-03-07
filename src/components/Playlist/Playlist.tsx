import Image from "next/image";
import styles from "./Playlist.module.css";

type PlaylistType = {
    src : string,
    alt : string
}
export default function Playlist({src, alt} : PlaylistType) {
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
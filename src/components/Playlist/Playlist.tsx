import Image from "next/image";
import styles from "./Playlist.module.css";

type PlaylistProps = {
    src : any,
    alt : string
}
export default function Playlist({src, alt} : PlaylistProps) {
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
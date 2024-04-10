import Image from "next/image";
import styles from "./PlaylistCover.module.css";
import Link from "next/link";

type PlaylistCoverType = {
    src : string;
    alt : string;
    id: string;
}
export default function PlaylistCover({src, alt, id} : PlaylistCoverType) {
    return (
        <div className={styles.item}>
          <Link href={`/tracks/category/${id}`}>
          <Image
            className={styles.img}
            src={src}
            alt={alt}
            width={250}
            height={150}
          />
          </Link>
      </div>
    )
}
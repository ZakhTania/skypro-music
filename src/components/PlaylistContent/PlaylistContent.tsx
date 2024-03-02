import { Track } from "@/components/Track";
import styles from "./PlaylistContent.module.css";
import cn from "classnames";
import { SVG } from "@/components/SVG";

export default function PlaylistContent() {
    return (
        <div className={styles.content}>
        <div className={styles.title}>
          <div className={cn(styles.titleCol, styles.col01)}>Трек</div>
          <div className={cn(styles.titleCol, styles.col02)}>Исполнитель</div>
          <div className={cn(styles.titleCol, styles.col03)}>Альбом</div>
          <div className={cn(styles.titleCol, styles.col04)}>
            <SVG className={styles.titleSvg} icon="icon-watch" />
          </div>
        </div>
        <div className={styles.contentPlaylist}>
            <Track title="Guilt" author="Nero" album="Welcome Reality" time="4:44" />
            <Track title="Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
            <Track title="I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22" />
            <Track title="Non Stop" feat="(Remix)" author="Стоункат, Psychopath" album="Non Stop" time="4:12" />
            <Track title="Run Run" feat="(feat. AR/CO)" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" />
            <Track title="Eyes on Fire" feat="(Zeds Dead Remix)" author="Blue Foundation, Zeds Dea" album="Eyes on Fire" time="5:20" />
            <Track title="Mucho Bien" feat="(Hi Profile Remix)" author="Blue Foundation, Zeds Dea" album="Mucho Bien" time="3:41" />
            <Track title="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
            <Track title="How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32" />
            <Track title="Morena " author="Tom Boxer" album="Soundz Made in Romania" time="3:36" />
        </div>
      </div>
    )
}
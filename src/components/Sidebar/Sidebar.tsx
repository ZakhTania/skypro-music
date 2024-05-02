import { SelectionListType, getPlayLists } from "@/api/selectionListAPI";
import styles from "./Sidebar.module.css";
import { Personal } from "@/components/Personal";
import { PlaylistCover } from "@/components/PlaylistCover";
type SidebarType = {
  isSidebar: boolean;
};
export default function Sidebar({ isSidebar }: SidebarType) {
  let playLists: SelectionListType[] | [] = [];
  // try {
  //   playLists = await getPlayLists();
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }

  return (
    <div className={styles.sidebar}>
      <Personal />
      <div className={styles.block}>
        {isSidebar && (
          <div className={styles.list}>
            {playLists?.map((playList, index) => {
              return (
                <PlaylistCover
                  key={`playList${index}`}
                  src={`/img/playlist0${index + 1}.png`}
                  alt={String(playList.name)}
                  id={`${playList.id}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

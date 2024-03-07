import styles from "./Container.module.css";

type ContainerType = { children: any };

export default function Container({ children }: ContainerType) {
  return <div className={styles.container}>{children}</div>;
}

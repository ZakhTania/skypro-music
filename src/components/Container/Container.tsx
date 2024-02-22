import styles from "./Container.module.css";

type ContainerProp = { children: any };

export default function Container({ children }: ContainerProp) {
  return <div className={styles.container}>{children}</div>;
}

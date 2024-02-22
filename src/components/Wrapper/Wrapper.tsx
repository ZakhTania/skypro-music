import styles from "./Wrapper.module.css";

type WrapperProps = {
    children: any
}

export default function Wrapper({children} : WrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

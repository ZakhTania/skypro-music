import styles from "./Heading.module.css";

type HeadingProps = {
    text: string;
}
export default function Heading({text} : HeadingProps) {
    return (
        <h2 className={styles.h2}>{text}</h2>
    )
}
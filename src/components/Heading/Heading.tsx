import styles from "./Heading.module.css";

type HeadingType = {
    text: string;
}
export default function Heading({text} : HeadingType) {
    return (
        <h2 className={styles.h2}>{text}</h2>
    )
}
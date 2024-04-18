import styles from "./Heading.module.css";

type HeadingType = {
    title: string;
}
export default function Heading({title} : HeadingType) {
    return (
        <h2 className={styles.h2}>{title}</h2>
    )
}
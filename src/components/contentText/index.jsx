import styles from "./styles.module.css";

function ContentText({ text, variant }) {
  return <p className={`${styles.contentText}} ${styles[variant]}`}>{text}</p>;
}
export default ContentText;

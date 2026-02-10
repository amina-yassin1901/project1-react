import styles from "./styles.module.css";

function UpperTitle({ upperTitle, variant }) {
  return (
    <p className={`${styles.upperTitle} ${styles[variant]}`}>{upperTitle}</p>
  );
}
export default UpperTitle;

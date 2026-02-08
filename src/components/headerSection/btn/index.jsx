import styles from "./styles.module.css";
function Btn({ title }) {
  return (
    <button className={styles.btn} type="button">
      {title}
    </button>
  );
}
export default Btn;

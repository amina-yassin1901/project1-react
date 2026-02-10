import styles from "./styles.module.css";

function Btn({ btnTitle, variant }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} type="button">
      {btnTitle}
    </button>
  );
}
export default Btn;

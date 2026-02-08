import styles from "./styles.module.css";

function Logo() {
  return (
    <img
      className={styles.logo}
      src="src/assets/icons/logo.svg"
      alt="Main logo"
    />
  );
}
export default Logo;

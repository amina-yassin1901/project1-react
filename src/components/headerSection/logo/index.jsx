import styles from "./styles.module.css";
import logoIcon from "/src/assets/icons/logo.svg";
function Logo() {
  return <img className={styles.logo} src={logoIcon} alt="Main logo" />;
}
export default Logo;

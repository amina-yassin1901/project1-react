import Logo from "../logo";
import NavMenu from "../navMenu";
import styles from "./styles.module.css";
import Links from "../links";
import Btn from "../btn";

function Header() {
  const navMenuValue = ["Home", "Blog", "Features", "Pricing", "Documentation"];
  const linksItems = [
    { id: 1, label: "Facebook", icon: "src/assets/icons/facebook.svg" },
    { id: 2, label: "Telegram", icon: "src/assets/icons/telegram.svg" },
    { id: 3, label: "Twitter", icon: "src/assets/icons/twitter.svg" },
    { id: 4, label: "Medium", icon: "src/assets/icons/medium.svg" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
        <NavMenu navMenuValue={navMenuValue} />
      </div>
      <div className={styles.linksContainer}>
        <Links linksItems={linksItems} />
        <Btn title={"Get Started"} />
      </div>
    </header>
  );
}
export default Header;

import Logo from "../logo";
import NavMenu from "../navMenu";
import styles from "./styles.module.css";
import Links from "../links";
import Btn from "../btn";
import facebookIcon from "/src/assets/icons/facebook.svg";
import telegramIcon from "/src/assets/icons/telegram.svg";
import twitterIcon from "/src/assets/icons/twitter.svg";
import mediumIcon from "/src/assets/icons/medium.svg";

function Header() {
  const navMenuValue = ["Home", "Blog", "Features", "Pricing", "Documentation"];
  const linksItems = [
    { id: 1, label: "Facebook", icon: facebookIcon },
    { id: 2, label: "Telegram", icon: telegramIcon },
    { id: 3, label: "Twitter", icon: twitterIcon },
    { id: 4, label: "Medium", icon: mediumIcon },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo />
          <NavMenu navMenuValue={navMenuValue} />
        </div>
        <div className={styles.linksContainer}>
          <Links linksItems={linksItems} />
          <Btn title={"Get Started"} />
        </div>
      </div>
    </header>
  );
}
export default Header;

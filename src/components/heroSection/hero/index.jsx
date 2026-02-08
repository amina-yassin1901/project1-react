import styles from "./styles.module.css";
import ContentHero from "../contentHero";
import bgHero from "/src/assets/images/bgHero.jpg";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgHero})`,
      }}
      className={styles.container}
    >
      <ContentHero />
    </div>
  );
}
export default Hero;

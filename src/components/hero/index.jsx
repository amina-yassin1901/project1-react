import styles from "./styles.module.css";
import ContentHero from "../contentHero";
import bgHero from "/src/assets/images/bgHero.jpg";

function Hero() {
  return (
    <section className={styles.section}>
      <div
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
        className={styles.container}
      >
        <ContentHero />
      </div>
    </section>
  );
}
export default Hero;

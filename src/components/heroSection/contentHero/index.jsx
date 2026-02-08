import styles from "./styles.module.css";
import btnIcon from "/src/assets/icons/Polygon.svg";

function ContentHero() {
  return (
    <div className={styles.container}>
      <p className={styles.textPlan}>PLAN YOUR LIFE</p>
      <h2 className={styles.title}>
        Increase your
        <span className={styles.accentColor}> productivity</span>
      </h2>
      <p className={styles.contentText}>
        Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
        atqui laudem an, insolens gubergren similique est cu. Et vel modus
        congue vituperata.
      </p>
      <button className={styles.btn} type="button">
        <img src={btnIcon} />
      </button>
    </div>
  );
}
export default ContentHero;

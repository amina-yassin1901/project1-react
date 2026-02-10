import styles from "./styles.module.css";
import btnIcon from "/src/assets/icons/Polygon.svg";
import UpperTitle from "../upperTitle";
import Title from "../title";
import ContentText from "../contentText";

function ContentHero() {
  return (
    <div className={styles.container}>
      <UpperTitle variant={"upperTitle"} upperTitle={"PLAN YOUR LIFE"} />
      <Title
        variant={"title"}
        title={
          <>
            Increase your
            <span className={styles.accentColor}> productivity</span>
          </>
        }
      />
      <ContentText
        variant={"contentText"}
        text={
          "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata."
        }
      />
      <button className={styles.btn} type="button">
        <img src={btnIcon} />
      </button>
    </div>
  );
}
export default ContentHero;

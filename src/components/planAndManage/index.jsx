import styles from "./styles.module.css";
import UpperTitle from "../upperTitle";
import Title from "../title";
import ContentText from "../contentText";
import Btn from "../btn";
import right from "/src/assets/icons/right.svg";
import plan from "/src/assets/images/illustration.png";

function PlanManage() {
  return (
    <section className={styles.container}>
      <div className={styles.mainContainer}>
        <UpperTitle
          variant={"secondStyle"}
          upperTitle={"DESKTOP AND MOBILE APP"}
        />
        <Title
          variant={"secondTitle"}
          title={
            <>
              <span className={styles.accentWidth}>Plan</span> and{" "}
              <span className={styles.accentWidth}>manage</span>
            </>
          }
        />
        <ContentText
          variant={"secondText"}
          text={
            "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat."
          }
        />
        <div className={styles.btnContainer}>
          <Btn
            variant={"btn"}
            btnTitle={
              <>
                View video <img src={right} />
              </>
            }
          />
          <Btn variant={"secondBtn"} btnTitle={"See features"} />
        </div>
      </div>
      <img className={styles.img} src={plan} alt="plan photo" />
    </section>
  );
}
export default PlanManage;

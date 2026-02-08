import styles from "./styles.module.css";
import watch from "/src/assets/icons/watch.svg";
import facebook2 from "/src/assets/icons/facebook2.svg";
import bitbucket from "/src/assets/icons/bitbucket.svg";
import audi from "/src/assets/icons/audi.svg";
import atlassian from "/src/assets/icons/atlassian.svg";

function Customers() {
  const customersIcon = [bitbucket, watch, facebook2, atlassian, audi];
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {customersIcon.map((item) => {
          return (
            <li key={item}>
              {" "}
              <img src={item} alt={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Customers;

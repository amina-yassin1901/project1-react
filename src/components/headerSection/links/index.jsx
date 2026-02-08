import styles from "./styles.module.css";

function Links({ linksItems }) {
  return (
    <ul className={styles.list}>
      {linksItems.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            <a href="#">
              <img
                className={styles.img}
                src={item.icon}
                alt={item.label}
              ></img>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default Links;

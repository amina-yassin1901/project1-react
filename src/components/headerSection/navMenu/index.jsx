import styles from "./styles.module.css"

function NavMenu({ navMenuValue }) {
  return (
      <ul className={styles.list }>
      {navMenuValue.map((value) => {
        return <li className={styles.item} key={value}>{value}</li>;
      })}
    </ul>
  );
}
export default NavMenu;

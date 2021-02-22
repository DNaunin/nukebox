import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <button
        className={styles.button__navigation}
        onClick={() => history.back()}
      >
        <img src="/backarrow.svg" alt="go back arrow" />
      </button>
      <p className={styles.navtitle}>Now Playing</p>
    </div>
  );
}

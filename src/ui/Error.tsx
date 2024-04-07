import { Link } from "react-router-dom";
import styles from "./error.module.css";

export default function Error() {
  return (
    <div className={styles.error}>
      <div>
        <h1 className={styles.label}>Error😰</h1>
      </div>
      <div>
        <button className={styles.button}>
          <Link to="/">Go back</Link>
        </button>
      </div>
    </div>
  );
}

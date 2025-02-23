// import SchoolItem from "./SchoolItem";
// import styles from "./certs.module.css";
import styles from "./certs.module.css";

export default function Certs() {
  return (
    <div className={styles.box}>
      <div className={styles.school_list}>
        <div className={styles.item}>
          <h3>AWS Certified Cloud Practitioner</h3>
          <div className={styles.extra_info}>
            <div className={styles.major}>AWS</div>
            <div className={styles.degree}>10.2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Courses from "./Courses";
import SchoolList from "./SchoolList";
import styles from "./education.module.css";

export default function Education() {
  return (
    <div className={styles.container}>
      <div className={styles.courses}>
        <Courses />
      </div>
      <div className={styles.education}>
        <div className={styles.label}>Education</div>
        <SchoolList />
      </div>
    </div>
  );
}

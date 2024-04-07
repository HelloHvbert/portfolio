import SchoolItem from "./SchoolItem";
import styles from "./schoolList.module.css";

export default function SchoolList() {
  return (
    <div className={styles.box}>
      <ul className={styles.school_list}>
        <SchoolItem
          name="Warsaw University of Life Science"
          major="Computer Science"
          degree="Bachelor"
          startDate="2021"
          endDate="Present"
        />
      </ul>
    </div>
  );
}

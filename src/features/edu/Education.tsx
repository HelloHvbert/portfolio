import { useTranslation } from "react-i18next";
import Courses from "./Courses";
import SchoolList from "./SchoolList";
import styles from "./education.module.css";

export default function Education() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.courses}>
        <Courses />
      </div>
      <div className={styles.education}>
        <div className={styles.label}>{t("home.education")}</div>
        <SchoolList />
      </div>
    </div>
  );
}

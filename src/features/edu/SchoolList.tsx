import { useTranslation } from "react-i18next";
import SchoolItem from "./SchoolItem";
import styles from "./schoolList.module.css";

export default function SchoolList() {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <div className={styles.school_list}>
        <SchoolItem
          name={t("home.university")}
          major={t("home.major")}
          degree={t("home.degree")}
          startDate="2021"
          endDate={"2025"}
        />
        <SchoolItem
          name={t("home.university")}
          major={t("home.major")}
          degree={t("home.master")}
          startDate="2025"
          endDate={t("home.present")}
        />
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import ExpItem from "../features/ExpItem";
import styles from "./experience.module.css";

// Put data in same order as in translation file
// duties in format "duty1;duty2;..."
const expData = {
  job: "CRM Developer",
  company: "T-Mobile Polska",
  startDate: "07.2023",
  endDate: "12.2023",
  technologies: ["JavaScript", "Python", "SQL"],
  description: [
    "Database administration and design",
    "Business requirements analysis",
    "Designing and implementing Siebel CRM solutions",
    "Scripting and user interfaces development",
    "Testing and optimization",
    "Writing technical documentation",
    "Agile scrum methodology, Jira",
    "System updates and enhancements",
  ],
};

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.label}>{t("experience.experience")}</div>
      <ExpItem
        job={expData.job}
        company={expData.company}
        startDate={expData.startDate}
        endDate={expData.endDate}
        technologies={expData.technologies}
        description={t("experience.duties").split(";")}
      />
    </div>
  );
}

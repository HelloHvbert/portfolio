import { useTranslation } from "react-i18next";
import styles from "./expItem.module.css";

type ExpProps = {
  job: string;
  company: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  description: string[];
};

export default function ExpItem({
  job,
  company,
  startDate,
  endDate,
  technologies,
  description,
}: ExpProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.job}>{job}</span>{" "}
        <span className={styles.at}>{t("experience.at")}</span>{" "}
        <span className={styles.company}>{company}</span>
      </div>
      <div className={styles.inner}>
        <div className={styles.date}>
          {startDate}
          {" - "}
          {endDate}
        </div>
        <div className={styles.tech}>
          <span className={styles.label}>{t("experience.technologies")}:</span>{" "}
          {technologies.join(", ")}
        </div>
        <div className={styles.desc}>
          <div className={styles.label} style={{ marginLeft: "0.1rem" }}>
            {t("experience.description")}:
          </div>
          <div>
            <ul className={styles.list}>
              {description.map((desc: string, index: number) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

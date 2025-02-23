import styles from "./projectItem.module.css";
import { FaGithubSquare } from "react-icons/fa";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type ProjectItemProps = {
  title: string;
  images: ReactNode[];
  techStack: string[];
  description: string;
  repo: string;
};

export default function ProjectItem({
  title,
  images,
  techStack,
  description,
  repo,
}: ProjectItemProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.inner_container}>
      <div className={styles.upper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.images}>
          {images.map((image, index) => (
            <span key={index}>{image}</span>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tech_stack}>
          <div className={styles.label}>{t("projects.stack")}:</div>
          <div className={styles.techs}>{techStack.join(", ")}</div>
        </div>
        <div className={styles.description}>{description}</div>
        <a href={repo} target="_blank" rel="noreferrer">
          <div className={styles.repo}>
            <span>{t("projects.repoLink")}</span>
            <FaGithubSquare size={30} />
          </div>
        </a>
      </div>
    </div>
  );
}

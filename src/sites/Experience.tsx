import { useTranslation } from "react-i18next";
import ExpItem from "../features/ExpItem";
import styles from "./experience.module.css";

// Put data in same order as in translation file
// duties in format "duty1;duty2;..."
const expData = [
  {
    job: "Software Engineer",
    company: "T-Mobile Polska",
    startDate: "07.2023",
    endDate: "12.2023",
    technologies: ["JavaScript", "Python", "SQL", "AWS", "Docker"],
    description: [
      "Development and implementation of features for the internal CRM system, improving business processes",
      "Utilized AWS for infrastructure management and application scaling",
      "Integration of CRM with other internal systems, centralizing data",
      "Testing and optimizing code to ensure system quality and stability",
    ],
  },
  {
    job: "Junior Full Stack Developer",
    company: "CAR NET",
    startDate: "07.2022",
    endDate: "07.2023",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    description: [
      "Implementation of an application enabling employees to book conference rooms in the office",
      "Implementation of features for viewing available rooms, making reservations, and managing bookings",
      "Deployment of Docker container solutions",
    ],
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.label}>{t("experience.experience")}</div>
      {/* <ExpItem
        job={expData[0].job}
        company={expData[0].company}
        startDate={expData[0].startDate}
        endDate={expData[0].endDate}
        technologies={expData[0].technologies}
        description={t("experience.duties").split(";")}
      /> */}
      {expData.map((_, index) => (
        <ExpItem
          key={index}
          job={expData[index].job}
          company={expData[index].company}
          startDate={expData[index].startDate}
          endDate={expData[index].endDate}
          technologies={expData[index].technologies}
          description={t("experience.duties").split(";;")[index].split(";")}
        />
      ))}
    </div>
  );
}

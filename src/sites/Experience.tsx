import ExpItem from "../features/ExpItem";
import styles from "./experience.module.css";

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
  return (
    <div className={styles.container}>
      <div className={styles.label}>Experience</div>
      <ExpItem
        job={expData.job}
        company={expData.company}
        startDate={expData.startDate}
        endDate={expData.endDate}
        technologies={expData.technologies}
        description={expData.description}
      />
    </div>
  );
}

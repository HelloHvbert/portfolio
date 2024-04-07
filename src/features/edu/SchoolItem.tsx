import styles from "./schoolItem.module.css";

type SchoolItemProps = {
  name: string;
  major: string;
  startDate: string;
  endDate: string;
  degree: string;
};

export default function SchoolItem({
  name,
  major,
  startDate,
  endDate,
  degree,
}: SchoolItemProps) {
  return (
    <li className={styles.item}>
      <h3>{name}</h3>
      <div className={styles.extra_info}>
        <div className={styles.major}>{major}</div>
        <div className={styles.date}>
          {startDate} - {endDate}
        </div>
        <div className={styles.degree}>{degree}</div>
      </div>
    </li>
  );
}

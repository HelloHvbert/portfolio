import { FiLink } from "react-icons/fi";
import styles from "./courseItem.module.css";

type CourseItemProps = {
  title: string;
  icon: JSX.Element;
  link: string;
};

export default function CourseItem({ title, icon, link }: CourseItemProps) {
  return (
    <div className={styles.course_container}>
      <div className={styles.inner}>
        <div>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.url}>
        <a href={link} target="_blank">
          <FiLink color="white" size={30} />
        </a>
      </div>
    </div>
  );
}

import {
  FaAws,
  FaDocker,
  FaGolang,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa6";
import CourseItem from "./CourseItem";
import styles from "./courses.module.css";
import { useTranslation } from "react-i18next";

const courses = [
  {
    title: "Go - The Complete Guide",
    link: "https://www.udemy.com/course/go-the-complete-guide/",
    icon: <FaGolang size={50} color="#32c8e6" />,
  },
  {
    title: "The Ultimate React Course 2024: React, Redux & More",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
    icon: <FaReact size={50} color="#32c8e6" />,
  },
  {
    title: "Docker Essentials",
    link: "https://www.udemy.com/course/docker-essentials/",
    icon: <FaDocker size={50} color="#3373d4" />,
  },
  {
    title: "CS50 - Introduction to Computer Science",
    link: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
    icon: <FaLaptopCode size={50} color="#2ad1a7" />,
  },
  {
    title: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    link: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new",
    icon: <FaAws size={50} color="#ff9900" />,
  },
];

export default function Courses() {
  const { t } = useTranslation();

  return (
    <div className={styles.container} id="courses">
      <div className={styles.label}>{t("home.courses")}</div>
      <div className={styles.courses}>
        {courses.map((course, index) => (
          <CourseItem
            key={index}
            title={course.title}
            link={course.link}
            icon={course.icon}
          />
        ))}
      </div>
    </div>
  );
}

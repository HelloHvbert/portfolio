import { FaDocker, FaGolang, FaLaptopCode, FaReact } from "react-icons/fa6";
import CourseItem from "./CourseItem";
import styles from "./courses.module.css";

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
];

export default function Courses() {
  return (
    <div className={styles.container} id="courses">
      <div className={styles.label}>Courses</div>
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

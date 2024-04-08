import { FaReact } from "react-icons/fa";
import ProjectItem from "../features/ProjectItem";
import styles from "./projects.module.css";
import {
  SiExpress,
  SiMongodb,
  SiPhp,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoTypescript, BiSolidFileCss } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaDocker, FaGolang } from "react-icons/fa6";
import { TbFileTypeSql, TbSql } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";

type Project = {
  title: string;
  images: JSX.Element[];
  techStack: string[];
  description: string;
  repo: string;
};

const projects: Project[] = [
  {
    title: "Online Bar Menu",
    images: [
      <FaReact size={40} color="cyan" />,
      <SiExpress size={40} />,
      <BiLogoTypescript size={40} color="#5767cf" />,
      <SiMongodb size={40} color="#68c967" />,
      <SiTailwindcss size={40} color="#27dbd8" />,
      <SiRedux size={40} color="purple" />,
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "MongoDB",
      "TailwindCSS",
    ],
    description:
      "Interactive and responsive web menu application for a restaurant using React.js, Express.js, and MongoDB. Implemented key features including dynamic product listings, cart management, order processing with RESTful API, and client-side state management using Redux Toolkit. Enhanced user experience through efficient navigation and real-time feedback mechanisms.",
    repo: "https://github.com/HelloHvbert/react-express-bar-menu",
  },
  {
    title: "Portfolio",
    images: [
      <FaReact size={40} color="cyan" />,
      <BiLogoTypescript size={40} color="#5767cf" />,
      <TiHtml5 size={40} color="orange" />,
      <BiSolidFileCss size={40} color="white" />,
    ],
    techStack: ["React", "TypeScript", "HTML", "CSS"],
    description: "The site you are currently viewing.",
    repo: "https://github.com/HelloHvbert/Portfolio",
  },
  {
    title: "GO Rest API",
    images: [
      <FaGolang size={40} color="#4fe8e5" />,
      <TbFileTypeSql size={40} color="#94ff00" />,
      <FaDocker size={40} color="#3373d4" />,
    ],
    techStack: ["Gin Web Framework", "Golang", "SQL", "Docker"],
    description:
      "RESTful API in Go, serving as the backend for a dynamic web application. Implemented key features including user authentication, data persistence, and real-time data processing. Utilized Docker for seamless deployment and scaling.",
    repo: "https://github.com/HelloHvbert/go-rest-api",
  },
  {
    title: "React Wordle Game",
    images: [
      <FaReact size={40} color="cyan" />,
      <TiHtml5 size={40} color="orange" />,
      <BiSolidFileCss size={40} color="white" />,
    ],
    techStack: ["React.js", "HTML", "CSS"],
    description:
      "Fun and interactive word puzzle game built with React. This clone of the popular Wordle game offers a sleek user interface and engaging gameplay, all developed using modern web technologies.",
    repo: "https://github.com/HelloHvbert/wordle-react-clone",
  },
  {
    title: "Online Store with CMS",
    images: [
      <SiPhp size={40} color="#a84fe8" />,
      <TbSql size={40} color="#94ff00" />,
      <BsBootstrapFill size={40} color="#cf4fe8" />,
    ],
    techStack: ["PHP", "MySQL", "Bootstrap"],
    description:
      "Full-fledged Content Management System using PHP. This comprehensive project includes sophisticated features such as user registration and authentication, product management and an integrated shopping cart, all supported by a MySQL database. It also contains single-handedly developed front-end,  Bootstrap to ensure a responsive and intuitive user interface.",
    repo: "https://github.com/HelloHvbert/CMS",
  },
];

export default function Projects() {
  return (
    <>
      <div className={styles.label}>Projects</div>
      <div className={styles.container}>
        <br />
        {projects.map((project, index) => (
          <ProjectItem
            title={project.title}
            images={project.images}
            techStack={project.techStack}
            description={project.description}
            repo={project.repo}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

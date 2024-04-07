import Social from "../features/Social";
import styles from "./contact.module.css";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div className={styles.links_container}>
      <div className={`${styles.label}`}>Contact</div>

      <Social
        message="HelloHvbert"
        url="https://github.com/hellohvbert"
        img={<VscGithubInverted size={60} style={{}} color="white" />}
      />
      <Social
        message="Hubert Szarwiński"
        url="https://www.linkedin.com/in/hubert-szarwi%C5%84ski/"
        img={<SiLinkedin size={60} style={{}} color="white" />}
      />
      <Social
        message="szarhubert@gmail.com"
        url="mailto:szarhubert@gmail.com"
        img={<MdMailOutline size={60} style={{}} color="white" />}
      />
    </div>
  );
}

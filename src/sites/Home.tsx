import Education from "../features/edu/Education";
import Welcome from "../ui/Welcome";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome />
      <Education />
    </div>
  );
}

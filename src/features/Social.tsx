import { Link } from "react-router-dom";
import styles from "./social.module.css";

type SocialProps = {
  message: string;
  url: string;
  img: React.ReactNode;
};

export default function Social({ message, url, img }: SocialProps) {
  return (
    <div>
      <Link to={url} target="_blank">
        <div className={styles.link_box}>
          <div className={styles.img}>{img}</div>
          <div className={styles.text}>{message}</div>
        </div>
      </Link>
    </div>
  );
}

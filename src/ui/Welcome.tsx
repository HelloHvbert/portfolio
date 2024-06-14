import { useTranslation } from "react-i18next";
import styles from "./welcome.module.css";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDYyYTRiaWt6OGd2NjNxcW5rd3ZxbjZ6ZDByZGIxMmljbG4yZTNidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJSKB4l7xTouE8/giphy.gif" />

        <div className={styles.header}>
          my name is <span className={styles.name}>Hubert</span>...
        </div> */}

        <div className={styles.header}>
          {t("home.welcome")}{" "}
          <span className={styles.name}>{t("home.name")}</span>
          ...
        </div>
      </div>
      <div className={styles.subheader}>
        <div className={styles.photo}>
          <img src="picture.jpg" alt="profile picture" />
        </div>
        <div className={styles.desc}>
          {t("home.description")}
          <div className={styles.drop}>
            <a href="#courses">
              <FaArrowAltCircleDown size={50} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

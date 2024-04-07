import styles from "./welcome.module.css";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Welcome() {
  return (
    <>
      <div className={styles.container}>
        {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDYyYTRiaWt6OGd2NjNxcW5rd3ZxbjZ6ZDByZGIxMmljbG4yZTNidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJSKB4l7xTouE8/giphy.gif" />

        <div className={styles.header}>
          my name is <span className={styles.name}>Hubert</span>...
        </div> */}

        <div className={styles.header}>
          Hello there🖐, my name is <span className={styles.name}>Hubert</span>
          ...
        </div>
      </div>
      <div className={styles.subheader}>
        <div className={styles.photo}>
          <img src="picture.jpg" alt="profile picture" />
        </div>
        <div className={styles.desc}>
          I'm a passionate IT student at the crossroads of creativity and
          technology, diving deep into the world of Web Development and Software
          Engineering. With a keen eye for detail and a relentless drive to
          innovate, I'm on a mission to craft seamless digital experiences and
          robust software solutions. Explore my portfolio to witness my journey
          through coding challenges, collaborative projects, and my continuous
          quest for learning and growth in the tech arena.
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

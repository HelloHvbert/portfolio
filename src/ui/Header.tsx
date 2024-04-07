import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  function hideMenu() {
    setIsMenuOpen(false);
  }
  //TODO menu cover header

  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <Link to="/">HelloHvbert</Link>
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
      >
        <IoMenu color="white" size={50} />
      </div>
      <div className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}>
        <div
          className={`${styles.link} ${pathname === "/" && styles.active}`}
          onClick={hideMenu}
        >
          <Link to="/" className={styles.linkText}>
            Home
          </Link>
        </div>
        <div
          className={`${styles.link} ${
            pathname === "/projects" && styles.active
          }`}
          onClick={hideMenu}
        >
          <Link to="/projects" className={styles.linkText}>
            Projects
          </Link>
        </div>
        <div
          className={`${styles.link} ${
            pathname === "/experience" && styles.active
          }`}
          onClick={hideMenu}
        >
          <Link to="/experience" className={styles.linkText}>
            {" "}
            Experience{" "}
          </Link>{" "}
        </div>
        <div
          className={`${styles.link} ${
            pathname === "/contact" && styles.active
          }`}
          onClick={hideMenu}
        >
          {" "}
          <Link to="/contact" className={styles.linkText}>
            {" "}
            Contact{" "}
          </Link>{" "}
        </div>
      </div>
    </header>
  );
}

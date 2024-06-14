import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import styles from "./header.module.css";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const { t } = useTranslation();

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
            {t("routes.projects")}
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
            {t("routes.experience")}{" "}
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
            {t("routes.contact")}{" "}
          </Link>{" "}
        </div>
        <div className={styles.link}>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./template.module.css";

export default function Template() {
  return (
    <div className={styles.site}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

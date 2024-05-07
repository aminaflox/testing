import React from "react";
import styles from "./MainPage.module.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        {/* <div className={styles.header_content}> */}
        <h3>Amin Store</h3>
        {/* </div> */}
        <div>
          <Link to="/signup" className={styles.link}>
            Signup
          </Link>
          <input type="text" />
        </div>
      </div>
      <div className={styles.categories}>
        {/* <Link className={styles.link}>Laptops</Link>
        <Link className={styles.link}>Phones</Link>
        <Link className={styles.link}>Headphones</Link>
        <Link className={styles.link}>Watches</Link>
        <Link className={styles.link}>Others</Link> */}

        <div className={styles.card}>
          <p>Каталог</p>
        </div>
        <div className={styles.card}>
          <p>Собрать ПК</p>
        </div>
        <div className={styles.card}>
          <p>Готовые сборки</p>
        </div>
        <div className={styles.card}>
          <p>Акции</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

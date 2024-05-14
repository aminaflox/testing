import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;

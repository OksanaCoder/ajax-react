import React from "react";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.flexCenter}>
      <img src="./images/error.png" alt="error" className={styles.error} />
    </div>
  );
};

export default Error;

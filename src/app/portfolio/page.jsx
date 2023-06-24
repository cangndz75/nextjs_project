import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link className={styles.items} href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link className={styles.items} href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
        </Link><Link className={styles.items} href="/portfolio/application">
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

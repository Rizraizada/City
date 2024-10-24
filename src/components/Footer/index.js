import React from 'react';
import styles from './index.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img src="/logo (1).png" alt="City Insurance" className={styles.logo} />
          <p className={styles.slogan}>
            We work with a passion of taking challenges<br />
            and creating new ones in advertising sector.
          </p>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick link</h3>
          <ul>
            <li><a href="#">Dhaka Stock Exchange Ltd.</a></li>
            <li><a href="#">Chittagong Stock Exchange Ltd</a></li>
            <li><a href="#">Bangladesh Securities & Exchange Commission</a></li>
            <li><a href="#">Insurance Development & Regulatory Authority</a></li>
          </ul>
        </div>
        <div className={styles.officialInfo}>
          <h3>Official Info:</h3>
          <p>
            Bashir Hossain Building (4th floor), 27,<br />
            Dilkusha C/A, Dhaka<br />
            <br />
            +8802223387299
          </p>
          <h4>Open Hours:</h4>
          <p>
            Sun - Thu Day: 10 am - 5 pm<br />
            Fri - Sat Day: CLOSED
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        2024 © All rights reserved by City Insurance
      </div>
    </footer>
  );
};

export default Footer;
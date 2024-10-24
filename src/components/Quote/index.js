import React, { useState } from "react";
import {
  FaFire,
  FaShip,
  FaCar,
  FaTools,
  FaGlobe,
  FaUserShield,
} from "react-icons/fa";
import styles from "./index.module.css";

const Quote = () => {
  const [activeTab, setActiveTab] = useState("Fire");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted for: ${activeTab}`);
  };

  const getQuoteTitle = () => {
    switch (activeTab) {
      case "Fire":
        return "Fire Quote Now";
      case "Marine":
        return "Marine Quote Now";
      case "Motor":
        return "Motor Quote Now";
      case "Engineering":
        return "Engineering Quote Now";
      case "Miscellaneous":
        return "Miscellaneous Quote Now";
      case "OMP":
        return "OMP Quote Now";
      default:
        return "";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.tabs}>
            {/* Row 1 */}
            <button
              className={`${styles.tab} ${
                activeTab === "Fire" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Fire")}
            >
              <FaFire className={styles.icon} />
              <span>Fire</span>
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "Marine" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Marine")}
            >
              <FaShip className={styles.icon} />
              <span>Marine</span>
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "Motor" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Motor")}
            >
              <FaCar className={styles.icon} />
              <span>Motor</span>
            </button>
            {/* Row 2 */}
            <button
              className={`${styles.tab} ${
                activeTab === "Engineering" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Engineering")}
            >
              <FaTools className={styles.icon} />
              <span>Engineering</span>
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "Miscellaneous" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Miscellaneous")}
            >
              <FaGlobe className={styles.icon} />
              <span>Miscellaneous</span>
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "OMP" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("OMP")}
            >
              <FaUserShield className={styles.icon} />
              <span>OMP</span>
            </button>
          </div>

          <div className={styles.content}>
            <h3>{getQuoteTitle()}</h3> {/* Display selected tab text */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="email" placeholder="Email" required />
              <button type="submit" className={styles.submitBtn}>
                Get Quote Now
              </button>
            </form>
          </div>
        </div>

        <div className={styles.companyInfo}>
          <h3>Compare quotes and get general insurance in the right way</h3>
          <p>Get an Insurance Quote - Reliable. Personable. Fast.</p>
          <p>
            Start a fast, hassle-free insurance process. We help you find the
            right coverages so you’re not paying for anything you don’t want!
          </p>
          <p>
            Facing any problems to get a quote?
            <br />
            Call:{" "}
            <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              +8802223387296
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;

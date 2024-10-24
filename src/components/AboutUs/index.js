import React, { useState } from 'react';
import { FaHandshake, FaBullseye, FaFlag } from 'react-icons/fa'; // Import icons from react-icons
import styles from './index.module.css';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('Our Values');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Our Values':
        return (
          <p>
            Honesty and Integrity <br />
            We are committed to a completely honest relationship with our insured clients, ensuring the utmost good faith to protect the company’s wealth.
            <br /><br />
            Quality of Insurance<br />
            Our aim is to insure in a qualitative manner.
            <br /><br />
            MUTUAL RESPECT<br />
            We always treat our clients with dignity and respect.
            <br /><br />
            WORTHY OF TRUST<br />
            We stick to our promises and do business the right way.
            <br /><br />
            TEAMWORK<br />
            We work together to minimize risk and ensure the best services and risk coverage for our clients.
          </p>
        );
      case 'Mission':
        return (
          <p>
            Our mission is to offer reliable and innovative insurance solutions that ensure financial protection and peace of mind for our policyholders.
          </p>
        );
      case 'Our Vision':
        return (
          <p>
            Our vision is to serve our insured clients with utmost care and provide the best solutions for their needs. We uphold corporate social responsibility through taking property risks.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About us</h2>

      {/* Move the image outside the main content */}
      <div className={styles.imageWrapper}>
        <img src="/lol.png" alt="Services" className={styles.image} />
      </div>

      <h1 className={styles.subtitle}>You can depend on us<br />to get good services</h1>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'Our Values' ? styles.active : ''}`}
              onClick={() => handleTabClick('Our Values')}
            >
              <FaHandshake className={styles.icon} /> Our Values
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'Mission' ? styles.active : ''}`}
              onClick={() => handleTabClick('Mission')}
            >
              <FaFlag className={styles.icon} /> Mission
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'Our Vision' ? styles.active : ''}`}
              onClick={() => handleTabClick('Our Vision')}
            >
              <FaBullseye className={styles.icon} /> Our Vision
            </button>
          </div>

          <div className={styles.content}>
            {renderTabContent()}
          </div>
        </div>

        <div className={styles.companyInfo}>
          <p>
            City General Insurance Company Limited is a second-generation Non-life Insurance Company in Bangladesh, established in 1996 under the Companies Act-1994 and listed with Dhaka and Chittagong Stock Exchanges Limited in 2007. The company is one of the leading Non-life Insurance companies in the country with specialized and significant expertise in non-life insurance business. City General Insurance Company Limited always works hard to deliver new products and services while maintaining a commitment to safety, security, and sustainability.
          </p>
          <img src="/1.-Mr.-Hossain-Akhtar_Chairman-100x100.png" alt="Mr. Hossain Akhtar" className={styles.chairmanImage} />
          <h3>Mr. Hossain Akhtar</h3>
          <p>Chairman</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

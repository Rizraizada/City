import React from 'react';
import styles from './index.module.css';

const Whyus = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Column */}
          <div className={styles.col50}>
            <div className={styles.headingContainer}>
              <div className={styles.subTitle}>
                <span>Why choose us?</span>
              </div>
              <h3 className={styles.mainTitle}>
                <i className={styles.dotShape}>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </i>
                City Insurance is committed to helping clients reach their goals.
              </h3>
            </div>
            <div className={styles.textBlock}>
              <p>
                We don’t pursue every company that needs computer support. We choose only clients <b>that share in our values</b>. It takes teamwork and a solid commitment to good communication.
              </p>
            </div>

            {/* List Section */}
            <div className={styles.row}>
              {/* Left List */}
              <div className={styles.col50}>
                <ul className={styles.featureList}>
                  <li>
                    <i className={styles.listDot}></i> We Can Save You Money.
                  </li>
                  <li>
                    <i className={styles.listDot}></i> Our Insurance is Flexible.
                  </li>
                </ul>
              </div>
              {/* Right List */}
              <div className={styles.col50}>
                <ul className={styles.featureList}>
                  <li>
                    <i className={styles.listDot}></i> A Fast, Easy Application.
                  </li>
                  <li>
                    <i className={styles.listDot}></i> No brokers, no upselling.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (Feature Boxes) */}
          <div className={styles.col50}>
            <div className={styles.boxContainer}>
              {/* First Box */}
              <div className={styles.featureBox}>
                <span className={styles.counterNumberBlue}>300,000+</span>
                <h3>Satisfied clients</h3>
                <p>We are very happy to serve them!</p>
              </div>
              {/* Second Box */}
              <div className={styles.featureBox}>
                <span className={styles.counterNumberGreen}>100%</span>
                <h3>Claim Settlement Ratio</h3>
                <p>We are alert to be successful!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;

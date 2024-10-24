import React, { useState } from 'react';
import Image from 'next/image';

import { FaShieldAlt, FaFire, FaCog, FaCarAlt, FaShip, FaWater, FaGlobe } from 'react-icons/fa';
import styles from './index.module.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Left side with image */}
        <div className={styles.imageWrapper}>
          <img src="/dot.png" alt="Services" className={styles.image} />
        </div>

        {/* Right side with content */}
        <div className={styles.contentWrapper}>
          <p className={styles.subtitle}>Services</p>
          <div className={styles.mia}>
            <h2 className={styles.don}>The fields on which we have given our services.</h2>
            <p className={styles.description}>
              To provide consultancy for preparing all sorts of corporate law and any other services as the company
              may think fit and proper. Insurance policies provide protection to your wealth and based on the differences
              in policies it also gives you the opportunity to save money as well.
            </p>
          </div>

          <div className={styles.servicesWrapper}>
            {serviceItems.map((service) => (
              <div
                key={service.title}
                className={`${styles.serviceItem} ${selectedService === service.title ? styles.selectedService : ''}`}
                onClick={() => handleServiceClick(service.title)}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const serviceItems = [
  { icon: <FaShieldAlt size={40} />, title: 'Miscellaneous Insurance' },
  { icon: <FaFire size={40} />, title: 'Fire Insurance' },
  { icon: <FaCog size={40} />, title: 'Engineering Insurance' },
  { icon: <FaCarAlt size={40} />, title: 'Motor Insurance' },
  { icon: <FaShip size={40} />, title: 'Marine Hull Insurance' },
  { icon: <FaWater size={40} />, title: 'Marine Insurance' },
  { icon: <FaGlobe size={40} />, title: 'OMP Insurance' },
];

export default Services;
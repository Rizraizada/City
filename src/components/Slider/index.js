// src/components/Slider/index.js
import React, { useState } from 'react';
import styles from './index.module.css';

const Slider = () => {
  const images = [
    '/Screenshot 2024-09-25 201456.png',
    '/Screenshot 2024-09-25 201526.png',
    '/Screenshot 2024-09-25 201559.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <img src={images[currentIndex]} alt="slider" className={styles.sliderImage} />
        <button className={styles.prev} onClick={handlePrev}>&#10094;</button>
        <button className={styles.next} onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slider;

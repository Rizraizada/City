// src/components/Slider/index.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import BASE_URL from '../config/apiConfig';

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/slider/sliders`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const updatedImages = data.map((imageUrl) => `${BASE_URL}${imageUrl}`);

        console.log('Updated image URLs:', updatedImages);

        setImages(updatedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <img src={images[currentIndex]} alt={`slider ${currentIndex}`} className={styles.sliderImage} />
        <button className={styles.prev} onClick={handlePrev}>&#10094;</button>
        <button className={styles.next} onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './index.module.css';
import BASE_URL from '../config/apiConfig';

const AwardPresentation = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/award/awards`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCarouselItems(data);
      } catch (error) {
        console.error("Error fetching awards:", error);
      }
    };

    fetchAwards();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className={styles['award-presentation']}>
      {/* Left side text */}
      <div className={styles['award-text']}>
        <h2 className={styles['award-title']}>
          We've achieved many national awards for our success.
        </h2>
        <p className={styles['award-description']}>
          Our business leaders have come a long way. There are numerous areas in which our business leaders, through their creativity & entrepreneurship.
        </p>
      </div>

      {/* Centered medal image */}
      <div className={styles['award-medal']}>
        <img src="/award-medal.png" alt="Gold Medal" className="h-64" />
      </div>

      {/* Right side image carousel */}
      <div className={styles['award-carousel']}>
        {carouselItems.length > 0 && carouselItems[currentIndex] ? (
          <div className={styles['carousel-item']}>
            <img
              src={`${BASE_URL}${carouselItems[currentIndex].image}`}
              alt="Award ceremony"
              className={styles['carousel-image']}
            />
            <div className={styles['carousel-text']}>
              <div className={styles['carousel-logo']}>
                <span className="text-2xl font-bold mr-2">CA</span>
                <span className="ml-2 text-sm">CHARTERED ACCOUNTANTS</span>
              </div>
              <div className={styles['carousel-award']}>
                <p className="font-bold">{carouselItems[currentIndex].title}</p>
                <p className="font-bold">{carouselItems[currentIndex].subtitle}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading awards...</p>
        )}

        {/* Carousel controls */}
        <div className={styles['carousel-controls']}>
          <button
            className={`${styles['carousel-control']} ${styles['carousel-control-left']}`}
            onClick={handlePrev}
            disabled={carouselItems.length === 0}
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          <button
            className={`${styles['carousel-control']} ${styles['carousel-control-right']}`}
            onClick={handleNext}
            disabled={carouselItems.length === 0}
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardPresentation;

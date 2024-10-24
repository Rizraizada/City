import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import BASE_URL from '../config/apiConfig';

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Fetch data from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/news/news`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setEvents(data); // Set the fetched data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>PRESS & MEDIA</h2>
      <h1 className={styles.title}>News & Events</h1>
      <div className={styles.newsGrid}>
        {events.length > 0 && (
          <div className={styles.featuredNews}>
            <img src={`${BASE_URL}${events[0].image}`} alt={events[0].title} className={styles.featuredImage} />
            <h3 className={styles.featuredTitle}>{events[0].title}</h3>
            <p className={styles.featuredDescription}>{events[0].description}</p>
          </div>
        )}
        <div className={styles.newsList}>
          {events.slice(1).map((event) => (
            <div key={event.id} className={styles.newsItem}>
              <img src={`${BASE_URL}${event.image}`} alt={event.title} className={styles.newsImage} />
              <div className={styles.newsContent}>
                <h4 className={styles.newsTitle}>{event.title}</h4>
                <p className={styles.newsDescription}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <h3 className={styles.footerTitle}>Creating Difference Through Innovation</h3>
        <div className={styles.footerContent}>
          <div className={styles.stockExchanges}>
            <img src="/dhaka.png" alt="Dhaka Stock Exchange" className={styles.exchangeLogo} />
            <img src="/chittagong.png" alt="Chittagong Stock Exchange" className={styles.exchangeLogo} />
          </div>
          <div className={styles.productSelect}>
            <select className={styles.select}>
              <option value="">Please Select a Product</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;

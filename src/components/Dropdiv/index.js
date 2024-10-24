
// index.js or Dropdiv.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const Dropdiv = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('');
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const pathSegments = router.asPath.split('/').filter(segment => segment);
      const lastSegment = pathSegments[pathSegments.length - 1];
      
      const formattedTitle = lastSegment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      setCurrentPage(formattedTitle);
      
      const formattedBreadcrumbs = pathSegments.map(segment => ({
        text: segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        path: `/${pathSegments.slice(0, pathSegments.indexOf(segment) + 1).join('/')}`
      }));
      
      setBreadcrumbs(formattedBreadcrumbs);
    }
  }, [router.isReady, router.asPath]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{currentPage}</h1>
      <div className={styles.breadcrumb}>
        <a href="/">Home</a>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path}>
            <span> - </span>
            {index === breadcrumbs.length - 1 ? (
              <span>{crumb.text}</span>
            ) : (
              <a href={crumb.path}>{crumb.text}</a>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.wave1}></div>
      <div className={styles.wave2}></div>
      <div className={styles.wave3}></div>
    </div>
  );
};

export default Dropdiv;
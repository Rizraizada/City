import React from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const Dropdiv = () => {
  const router = useRouter();
  const { pageItems } = router.query;
  const currentPage = pageItems ? pageItems.join(' ') : '';

  return (
    <div className={styles.container}>
      <h2>{currentPage.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</h2>
    </div>
  );
};

export default Dropdiv;

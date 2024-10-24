// src/pages/home/investment-committee.js
import React, { useEffect, useState } from 'react';
import styles from './Page.module.css';
import Dropdiv from '@/components/Dropdiv';
import DirectorsComponent from '@/components/Directors';
import BASE_URL from '@/components/config/apiConfig';

const InvestmentCommittee = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/director?committee=Investment Committee`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.error("Error fetching directors:", error);
      }
    };

    fetchDirectors();
  }, []); // Run this once when the component mounts

  return (
    <div className={styles.boardOfDirectorsContainer}>
      <Dropdiv />
      <DirectorsComponent directors={directors} /> {/* Pass the directors to the component */}
    </div>
  );
};

export default InvestmentCommittee;

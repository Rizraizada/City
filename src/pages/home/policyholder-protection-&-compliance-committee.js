// src/pages/home/policyholder-protection-&-compliance-committee.js
import React, { useEffect, useState } from 'react';
import styles from './Page.module.css'; // Adjust the import path if needed
import Dropdiv from '@/components/Dropdiv';
import DirectorsComponent from '@/components/Directors'; // Ensure this component can accept directors as a prop
import BASE_URL from '@/components/config/apiConfig';

const PolicyholderProtectionComplianceCommittee = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        // Fetch directors specifically for the Policyholder Protection & Compliance Committee
        const response = await fetch(`${BASE_URL}/api/director?committee=Policyholder Protection & Compliance Committee`);
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

export default PolicyholderProtectionComplianceCommittee;
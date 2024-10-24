import Dropdiv from '@/components/Dropdiv';
import { useState, useEffect } from 'react';

const MissionVisionValues = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Dropdiv />
      <div
        style={{
          position: 'relative', // Make the container relative for absolute positioning of the title
          backgroundImage: "url('/bg-content.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '20px',
          color: 'black',
        }}
      >
        {/* Title div */}
        <div
          style={{
            position: 'absolute', // Position the title absolutely inside the container
            top: '10px', // Adjust to the position you want
            left: '50%',
            transform: 'translateX(-50%)', // Center the title horizontally
            color: 'white', // Make the title color white for contrast
            fontSize: '36px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add a subtle shadow for better readability
          }}
        >
          Our Vision and Mission
        </div>

        {/* Content sections */}
        <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h2>OUR MISSION</h2>
          <p>
            Our mission is to provide unequal service, protect our insured interest and contribute for economic stabilization of the country.
            To maintain stakeholders' interest with fair and transparent operations.
          </p>
        </div>

        <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h2>OUR VISION</h2>
          <p>
            Our vision is to serve our insured (policy holders) with utmost care and provide the best solution for their needs.
            We will be a company with due solemnity and corporate social responsibility to the society upheld by taking property risks.
          </p>
        </div>

        <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h2>OUR CORE VALUES</h2>
          <h3>Honesty and Integrity</h3>
          <p>
            We are committed to a completely honest relationship with our insured & clients, behaving with the utmost good faith to protect the company’s wealth.
          </p>
          <h3>Quality of Insurance</h3>
          <p>Our aim is to insure in a qualitative manner.</p>
          <h3>Mutual Respect</h3>
          <p>Always, we treat our insured clients and individuals with different backgrounds with dignity and respect.</p>
          <h3>Worthy of Trust</h3>
          <p>We are static at our promise and committed to doing business the right way.</p>
          <h3>Teamwork</h3>
          <p>We work together to minimize risk and ensure that clients receive the best possible services and risk coverage.</p>
        </div>
      </div>
    </>
  );
};

export default MissionVisionValues;

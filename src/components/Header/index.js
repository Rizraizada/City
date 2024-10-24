import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaHome, FaUmbrella, FaChartLine, FaBuilding, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (href) => router.pathname === href;

  const dropdownContent = {
    home: [
      'City Insurance at a Glance',
      'Company Profile',
      'Our Vision And Mission',
      'Board of Directors',
      'Management Team',
      'Audit Committee',
      'NRC',
      'Investment Committee',
      'Risk Management Committee',
      'Policyholder Protection & Compliance Committee',
      'Message from Chairman',
      'Message from MD & CEO',
      'Code of Conduct',
      'Agent Information',
    ],
    insurance: [
      'Fire Insurance',
      'Marine Cargo Insurance',
      'Marine Hull',
      'Motor Insurance',
      'Engineering Insurance',
      'Miscellaneous Accident Insurance',
      'OMP Insurance',
      'Our Reinsurers',
    ],
    investors: [
      'Shareholding Position',
      'Shareholding Pattern',
      'Quarterly Report',
      'Price Sensitive Information',
      'Annual Report',
      'Credit Rating',
      'Directors Report',
      'Policy',
      'AGM Information',
      'Unclaimed Dividend',
      'Dividend Distribution Compliance Report',
      'Corporate Governance Code',
      'BuySale Declaration',
      'Investors Relations Department',
    ],
    info: [ 
      'Claim Outstanding Status',
      'Gallery',
      'KYC Profile',
    ],
  };

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label.toLowerCase() ? null : label.toLowerCase()));
  };

  const NavItem = ({ href, icon: Icon, label }) => {
    const isDropdownActive = activeDropdown === label.toLowerCase();
  
    return (
      <div
        className={styles.navItemContainer}
        onMouseEnter={() => !isMobile && setActiveDropdown(label.toLowerCase())} // Show dropdown on hover for desktop only
        onMouseLeave={() => !isMobile && setActiveDropdown(null)} // Hide dropdown on mouse leave for desktop only
      >
        <Link href={href} className={`${styles.navItem} ${isActive(href) ? styles.active : ''}`}>
          <Icon size={20} />
          <span>
            {label}
            {label !== 'Branch' && label !== 'Contact' && ' +'}
          </span>
        </Link>
  
        {dropdownContent[label.toLowerCase()] && (
          <>
            {isMobile ? (
              // Mobile view: show toggle button
              <button className={styles.dropdownToggle} onClick={() => toggleDropdown(label)}>
                {isDropdownActive ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
              </button>
            ) : null}
  
            {isDropdownActive && (
              // Show dropdown menu
              <div className={styles.dropdown}>
                {dropdownContent[label.toLowerCase()].map((item, index) => (
                  <Link key={index} href={`/${label.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} className={styles.dropdownItem}>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    );
  };
  


  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Image src="/mlogo.png" width={500} height={70} className={styles.logo} alt="City Insurance Logo" />
        {isMobile && (
          <button className={styles.menuToggle} onClick={toggleSideMenu}>
            {isSideMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}
        <nav className={`${styles.nav} ${isSideMenuOpen ? styles.open : ''}`}>
          {isMobile && (
            <div>
              <Image src="/mlogo.png" width={500} height={70} className={styles.logo} alt="City Insurance Logo" />
              <button className={styles.closeMenu} onClick={toggleSideMenu}>
                <FaTimes size={24} />
              </button>
            </div>
          )}
          <NavItem href="/" icon={FaHome} label="Home" />
          <NavItem href="/" icon={FaUmbrella} label="Insurance" />
          <NavItem href="/" icon={FaChartLine} label="Investors" />
          <NavItem href="/" icon={FaInfoCircle} label="Info" />
          <NavItem href="/branch" icon={FaBuilding} label="Branch" />
          <NavItem href="/contact" icon={FaEnvelope} label="Contact" />
        </nav>
      </div>
    </header>
  );
};

export default Header;

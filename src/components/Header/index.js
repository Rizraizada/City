import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Umbrella, TrendingUp, Building2, Info, Mail } from 'lucide-react';
import styles from './index.module.css';

const Header = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (href) => router.pathname === href;

  const dropdownContent = {
    home: [
      'City Insurance at a Glance',
      'Company Profile',
      'Our Vision And Mission',
      'Board of Directors',
      'Management Team',
      'Senior Executive',
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
      'Buy/Sale Declaration',
      'Investors Relations Department',
      'Branch Info',
      'Gallery',
      'Claim Outstanding Status',
      'Agent Information',
      'KYC Profile',
    ],
    info: ['FAQ', 'About Us', 'Customer Care'],
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Image src="/mlogo.png" width={500} height={70} className={styles.logo} alt="City Insurance Logo" />
        <nav className={styles.nav}>
          {['home', 'insurance', 'investors', 'info'].map((key) => (
            <div
              key={key}
              className={styles.navItemContainer}
              onMouseEnter={() => setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={`/${key}`} className={`${styles.navItem} ${isActive(`/${key}`) ? styles.active : ''}`}>
                {key === 'home' ? <Home size={20} /> : key === 'insurance' ? <Umbrella size={20} /> : key === 'investors' ? <TrendingUp size={20} /> : <Info size={20} />}
                <span>{key.charAt(0).toUpperCase() + key.slice(1)} +</span>
              </Link>
              {activeDropdown === key && (
                <div className={styles.dropdown}>
                  {dropdownContent[key].map((item, index) => (
                    <Link key={index} href={`/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`} className={styles.dropdownItem}>
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/branch" className={`${styles.navItem} ${isActive('/branch') ? styles.active : ''}`}>
            <Building2 size={20} />
            <span>Branch</span>
          </Link>
          <Link href="/contact" className={`${styles.navItem} ${isActive('/contact') ? styles.active : ''}`}>
            <Mail size={20} />
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

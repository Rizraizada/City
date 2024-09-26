import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Importing the useRouter hook
import { Home, Umbrella, TrendingUp, Building2, Info, Mail } from 'lucide-react';
import styles from './index.module.css';

const Header = () => {
  const router = useRouter(); // Getting the current route

  // Function to determine if a menu item is active based on the current route
  const isActive = (href) => router.pathname === href;

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image src="/mlogo.png" width={500} height={70} className={styles.logo} alt="City Insurance Logo" />
        </div>
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <Link href="/" className={`${styles.navItem} ${isActive('/') ? styles.active : ''}`}>
              <Home size={20} className={styles.icon} />
              <span>Home +</span>
            </Link>
            <Link href="/insurance" className={`${styles.navItem} ${isActive('/insurance') ? styles.active : ''}`}>
              <Umbrella size={20} className={styles.icon} />
              <span>Insurance +</span>
            </Link>
            <Link href="/investors" className={`${styles.navItem} ${isActive('/investors') ? styles.active : ''}`}>
              <TrendingUp size={20} className={styles.icon} />
              <span>Investors +</span>
            </Link>
            <Link href="/branch" className={`${styles.navItem} ${isActive('/branch') ? styles.active : ''}`}>
              <Building2 size={20} className={styles.icon} />
              <span>Branch</span>
            </Link>
            <Link href="/info" className={`${styles.navItem} ${isActive('/info') ? styles.active : ''}`}>
              <Info size={20} className={styles.icon} />
              <span>Info +</span>
            </Link>
            <Link href="/contact" className={`${styles.navItem} ${isActive('/contact') ? styles.active : ''}`}>
              <Mail size={20} className={styles.icon} />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

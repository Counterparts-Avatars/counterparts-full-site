'use client';

import { useWindowSize } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import navLinks from '@/content/nav-links';
import { breakpoints } from '@/helpers/breakpoints';
import Hamburger from '@/components/reusable/Hamburger/Hamburger';
import NavExpanded from './NavExpanded';
import createAnimation from '@/helpers/createAnimation';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(0);
  const { width } = useWindowSize();
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setActivePage(0);
        break;
      case '/about':
        setActivePage(1);
        break;
      default:
        setActivePage(0);
        break;
    }

    const handleScroll = () => {
      const position = scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, width]);

  return (
    <>
      {width < breakpoints.med && (
        <NavExpanded
          displayMobileMenu={displayMobileMenu}
          setDisplayMobileMenu={setDisplayMobileMenu}
          activePage={activePage}
        />
      )}
      <motion.div
        initial={'hidden'}
        animate={'show'}
        variants={createAnimation('custom', {
          duration: 0.1,
          delay: 0.2,
          movementVector: { x: 0, y: -60 },
          timingFunction: 'linear',
          opacity: { start: 0, end: 1 },
          scale: { start: 1, end: 1 },
        })}
        style={displayMobileMenu ? { boxShadow: 'none' } : {}}
        className={
          width >= breakpoints.med
            ? scrollPosition < 50
              ? styles.navBox
              : `${styles.navBox} ${styles.navBox__scrolled}`
            : `${styles.navBox} ${styles.navBox__mobile}`
        }>
        <nav className={styles.innerNav}>
          <Link
            href="/"
            className={styles.logoLink}>
            <Image
              src="/counterparts-logo.svg"
              alt="Counterparts logo"
              width={300}
              height={50}
              className={styles.logo}
              onClick={() => setDisplayMobileMenu(false)}
            />
          </Link>
          {width >= breakpoints.med ? (
            <ul className={styles.navLinks}>
              {navLinks.map(
                (navLink, i) =>
                  navLink.name !== 'Home' && (
                    <li
                      key={i}
                      className={
                        activePage === i
                          ? `${styles.link} ${styles.link__active}`
                          : styles.link
                      }>
                      <Link href={navLink.path}>{navLink.name}</Link>
                    </li>
                  )
              )}
            </ul>
          ) : (
            <Hamburger
              currentState={displayMobileMenu}
              changeState={setDisplayMobileMenu}
            />
          )}
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;

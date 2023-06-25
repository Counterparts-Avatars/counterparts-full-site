'use client';

import { useWindowSize } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { breakpoints } from '@/helpers/breakpoints';
import Hamburger from '@/components/reusable/Hamburger/Hamburger';
import NavExpanded from './NavExpanded';
import createAnimation from '@/helpers/createAnimation';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { width } = useWindowSize();
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  return (
    <>
      {width <= breakpoints.med && (
        <NavExpanded
          displayMobileMenu={displayMobileMenu}
          setDisplayMobileMenu={setDisplayMobileMenu}
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
          width > breakpoints.med
            ? styles.navBox
            : `${styles.navBox} ${styles.navBox__mobile}`
        }>
        <nav className={styles.innerNav}>
          <Link
            href="/"
            as={'image'}>
            <Image
              src="/counterparts-logo.svg"
              alt="Counterparts logo"
              width={300}
              height={50}
              className={styles.logo}
              onClick={() => setDisplayMobileMenu(false)}
            />
          </Link>
          {width > breakpoints.med ? (
            <ul className={styles.navLinks}></ul>
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

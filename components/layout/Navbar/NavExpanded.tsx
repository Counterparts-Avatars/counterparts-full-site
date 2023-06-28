'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import socials from '@/content/socials';
import navLinks from '@/content/nav-links';
import createAnimation from '@/helpers/createAnimation';
import gameframe from '@/public/gameframe.webp';
import styles from './NavExpanded.module.scss';

interface NavExpandedProps {
  displayMobileMenu: boolean;
  setDisplayMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activePage: number;
}

const NavExpanded = ({
  displayMobileMenu,
  setDisplayMobileMenu,
  activePage,
}: NavExpandedProps) => {
  return (
    <motion.div
      initial={'hidden'}
      animate={displayMobileMenu ? 'show' : 'hidden'}
      variants={createAnimation('custom', {
        duration: 0.2,
        delay: 0,
        movementVector: { x: 0, y: '-100vh' },
        timingFunction: 'linear',
        opacity: { start: 0, end: 1 },
        scale: { start: 1, end: 1 },
      })}
      className={styles.overlayBox}>
      <motion.nav
        className={styles.navBox}
        variants={createAnimation('fadeIn')}
        initial={'hidden'}
        whileInView={'show'}>
        <motion.div
          variants={createAnimation('fadeIn')}
          initial={'hidden'}
          whileInView={'show'}
          className={styles.frameBox}>
          <Image
            src={gameframe}
            alt=""
            fill
            sizes="90vw"
            className={styles.gameframe}
          />
        </motion.div>
        <motion.ul
          className={styles.navLinks}
          variants={createAnimation('staggerContainer')}
          initial={'hidden'}
          whileInView={'show'}>
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              variants={
                i === navLinks.length - 1
                  ? createAnimation('fadeIn')
                  : createAnimation('fadeInUp')
              }
              className={styles.listItem}>
              <Link
                href={link.path}
                onClick={() => setDisplayMobileMenu(false)}
                className={
                  activePage === i
                    ? `${styles.link} ${styles.link__active}`
                    : styles.link
                }>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          variants={createAnimation('custom', {
            duration: 0.5,
            delay: 0,
            movementVector: { x: 0, y: '-200%' },
            timingFunction: 'easeOut',
            opacity: { start: 0, end: 1 },
            scale: { start: 1, end: 1 },
          })}
          initial={'hidden'}
          whileInView={'show'}
          className={styles.frameBox}>
          <Image
            src={gameframe}
            alt=""
            fill
            sizes="90vw"
            className={styles.gameframe}
          />
        </motion.div>
        <motion.ul
          className={styles.socials}
          variants={createAnimation('fadeIn')}
          initial={'hidden'}
          whileInView={'show'}>
          {socials.map((social, i) => (
            <motion.li
              key={i}
              className={styles.socialLink}
              variants={createAnimation('custom', {
                duration: 0.25,
                delay: 0.5,
                movementVector: { x: 0, y: 0 },
                timingFunction: 'linear',
                opacity: { start: 0, end: 1 },
                scale: { start: 1, end: 1 },
              })}
              initial={'hidden'}
              whileInView={'show'}>
              <Link
                href={social.href}
                prefetch={false}
                target="_blank"
                rel="noreferrer">
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={40}
                  height={40}
                  className={styles.socialIcon}
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
};

export default NavExpanded;

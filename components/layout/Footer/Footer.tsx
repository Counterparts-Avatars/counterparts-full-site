'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import createAnimation from '@/helpers/createAnimation';
import socials from '@/content/socials';
import logo from '@/public/counterparts-logo.svg';
import styles from './Footer.module.scss';
import navLinks from '@/content/nav-links';

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <motion.footer
        className={styles.footer}
        variants={createAnimation('staggerContainer')}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}>
        <Link
          href="/"
          className={styles.logoLink}>
          <Image
            src={logo}
            alt="Counterparts logo"
            width={300}
            height={50}
            className={styles.logo}
          />
        </Link>
        <motion.ul
          className={styles.navLinks}
          variants={createAnimation('fadeIn')}>
          {navLinks.map((navLink, i) => (
            <li
              key={i}
              className={styles.navLinks}>
              <Link href={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
        </motion.ul>
        <motion.ul
          className={styles.socials}
          variants={createAnimation('fadeIn')}>
          {socials.map((social, i) => (
            <li
              key={i}
              className={styles.socialLink}>
              <Link
                href={social.href}
                prefetch={false}
                target="_blank"
                rel="noreferrer">
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={30}
                  height={30}
                  className={styles.socialIcon}
                />
              </Link>
            </li>
          ))}
        </motion.ul>
        <motion.p
          className={styles.copyright}
          variants={createAnimation('fadeIn')}>
          &copy; 2023 Counterparts, Inc.
        </motion.p>
      </motion.footer>
    </div>
  );
};

export default Footer;

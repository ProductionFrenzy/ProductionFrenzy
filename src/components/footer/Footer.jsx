import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>
        Built with brains, chaos & a whole lot of caffeine ☕
      </p>

      <div className={styles.links}>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href="mailto:team@productionfrenzy.com">Email</a>
        <a href="https://www.instagram.com/productionfrenzy" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>

      <p className={styles.copy}>&copy; {new Date().getFullYear()} Production Frenzy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

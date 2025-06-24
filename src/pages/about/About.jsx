import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, x: -40, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Fast. Fresh. Built for the bold. That’s the Production Frenzy vibe.
      </motion.h2>

      <div className={styles.row}>
        {/* Left half (empty for GSAP animation, e.g., camera icon) */}
        <div className={styles.left}></div>

        {/* Right half (text content) */}
        <div className={styles.right}>
          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <strong>We help bold brands grow online — fast.</strong><br />
            At Production Frenzy, we craft scroll-stopping digital campaigns,
            build conversion-ready websites, and launch brands that get noticed.
            From influencer strategy to full-scale web development, we’re the
            creative engine behind fresh, fearless digital growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

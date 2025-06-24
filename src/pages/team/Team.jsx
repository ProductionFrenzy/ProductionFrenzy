import React from "react";
import { motion } from "framer-motion";
import styles from "./Team.module.css";

import praveshImg from "../../assets/pravesh.jpg";
import surabhiImg from "../../assets/surabhi.jpg";

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", type: "spring" }}
        viewport={{ once: true }}
      >
        The Brains Behind the Frenzy
      </motion.h2>

      <div className={styles.members}>
        {/* Pravesh */}
        <motion.div
          className={styles.member}
          initial={{ opacity: 0, x: -80, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <img src={praveshImg} alt="Pravesh" className={styles.image} />
          <h3 className={styles.name}>Pravesh</h3>
          <p className={styles.role}>Digital Marketing Expert</p>
          <p className={styles.bio}>
            Your go-to for brand presence that <span className={styles.bold}>actually sticks</span>. Digital marketing, socials, and strategies that make noise.
          </p>
        </motion.div>

        {/* Surabhi */}
        <motion.div
          className={styles.member}
          initial={{ opacity: 0, x: 80, rotateY: 90 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={surabhiImg} alt="Surabhi" className={styles.image} />
          <h3 className={styles.name}>Surabhi</h3>
          <p className={styles.role}>Web Dev & SEO</p>
          <p className={styles.bio}>
            Your local tech girlie turning caffeine into clean code & search engine domination. <span className={styles.bold}>Web dev + SEO? Handled.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

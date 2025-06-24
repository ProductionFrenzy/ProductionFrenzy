import React from "react";
import { motion } from "framer-motion";
import styles from "./Munjz.module.css";

import logo1 from './logo1.jpg';
import logo2 from './logo2.jpg';
import logo3 from './logo3.jpg';
import logo4 from './logo4.jpg';

import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';

const logos = [logo1, logo2, logo3, logo4];
const images = [one, two, three];

const Munjz = () => {
  return (
    <section className={styles.munjzSection}>
    

      {/* Text Block */}
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        
      >
        <h2 className={styles.title}>Munjz</h2>
        <p className={styles.tagline}>
          Streamlining property management with smart digital workflows.
        </p>
      </motion.div>

      {/* Showcase Images */}
      <motion.div
        className={styles.imageGallery}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`munjz-showcase-${i}`}
            className={styles.showcaseImage}
          />
        ))}
      </motion.div>

        {/* Infinite Logo Slider */}
      <motion.div
        className={styles.slider}
        style={{
          "--width": "120px",
          "--height": "60px",
          "--quantity": logos.length * 2,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        
      >
        <div className={styles.list}>
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className={styles.item}
              style={{ "--position": index + 1 }}
            >
              <img src={logo} alt={`munjz-logo-${index}`} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Munjz;

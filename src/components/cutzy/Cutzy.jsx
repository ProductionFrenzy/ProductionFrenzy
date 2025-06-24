import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Cutzy.module.css";
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';
import five from './five.jpg';

const images = [one, two, three, four, five];

const Cutzy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <section className={styles.cutzySection}>
      {/* Animated Text */}
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Cutzy</h2>
        <p className={styles.tagline}>Fresh fruits and veggies, straight from the farm</p>
      </motion.div>

      {/* Animated Carousel */}
      <motion.div
        className={styles.carousel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`cutzy-${idx}`}
            className={`${styles.image} ${idx === currentIndex ? styles.active : ""}`}
          />
        ))}

        <div className={styles.indicators}>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
            ></span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Cutzy;

import { motion } from "framer-motion";
import styles from "./Gram.module.css";

import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';

const squareImages = [two, three];
const wideImages = [one, four];

const Gram = () => {
  return (
    <section className={styles.gramnutsSection}>
      <div className={styles.rows}>
        {squareImages.map((square, i) => (
          <motion.div
            key={i}
            className={styles.row}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
        
          >
            <img src={square} alt={`square-${i}`} className={styles.square} />
            <img src={wideImages[i]} alt={`wide-${i}`} className={styles.wide} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.text}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      
      >
        <h2 className={styles.title}>Gram Nuts</h2>
        <p className={styles.tagline}>
          Premium cashews, perfectly packed for every craving.
        </p>
      </motion.div>
    </section>
  );
};

export default Gram;

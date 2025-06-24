import React from 'react';
import { motion } from 'framer-motion';
import styles from './Work.module.css';

const Work = () => {
  return (
    <div className={styles.work}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      
      >
        Our Craft in Action
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      
      >
        A look at what we’ve built, branded & launched.
      </motion.h3>
    </div>
  );
};

export default Work;

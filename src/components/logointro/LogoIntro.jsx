import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LogoIntro.module.css";
import logo from "../../assets/logo.jpg"; // your logo file

const LogoIntro = () => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), 2000); // 2s animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.img
            src={logo}
            alt="Production Frenzy Logo"
            className={styles.logo}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;

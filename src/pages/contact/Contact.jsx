import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
  const whatsappNumber = "9146131583"; // Replace with your real number

const handleClick = () => {
  const message = "Hey! I just checked out your website and I'm interested in your services. Let's connect!";
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
};


  return (
    <section className={styles.contactSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Let’s build something bold together.
      </motion.h2>

      <motion.button
        className={styles.contactButton}
        onClick={handleClick}
        whileHover={{ scale: 1.08, boxShadow: "0 0 15px #25D366" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Contact Us on WhatsApp
      </motion.button>
    </section>
  );
};

export default Contact;

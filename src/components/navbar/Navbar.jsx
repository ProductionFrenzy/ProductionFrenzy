import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import logo from '../../assets/logo.jpg'
// import logo from "./logo.jpg";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Cyborg logo" className={styles.logo} />
      </div>
      <div className={styles.menuIcon} onClick={toggleSidebar}>
        &#9776; {/* Hamburger menu icon */}
      </div>
      <ul
        className={`${styles.navLinks} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.closeIcon} onClick={closeSidebar}>
          &times; {/* Close icon */}
        </div>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="team"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

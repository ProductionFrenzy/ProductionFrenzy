import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Work from './pages/work/Work';
import Cutzy from './components/cutzy/Cutzy';
import Munjz from './components/munjz/Munjz';
import Gram from './components/gram/Gram';
import Team from './pages/team/Team';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import LogoIntro from './components/logointro/LogoIntro'; // 👈 Import your new logo intro

import './App.css'; // Global styles

const App = () => {
  const location = useLocation();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2600); // duration of logo intro
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <LogoIntro />; // 👈 Show the intro first
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="scrollableContainer">
              <section id="home">
                <Home />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="work">
                <Work />
                <Cutzy />
                <Munjz />
                <Gram />
              </section>

              <section id="team">
                <Team />
              </section>

              <section id="contact">
                <Contact />
              </section>

              <section id="footer">
                <Footer />
              </section>
            </div>
          }
        />
      </Routes>
    </>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;

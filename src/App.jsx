import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Work from './pages/work/Work';
import Cutzy from './components/cutzy/Cutzy';
import Munjz from './components/munjz/Munjz';
import Gram from './components/gram/Gram';
import Team from './pages/team/Team'
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer'


import './App.css'; // Global styles

const App = () => {
  const location = useLocation(); // Get the current route
  

  return (
    <>
    
      <NavBar />
      <Routes>
        {/* Define a single route for the main page with scrolling sections */}
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
              <Work/>
                <Cutzy/>
                <Munjz/>
                <Gram/>
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


              {/* <section id="contact">
                <Contact />
              </section>

              
             <section id="footer">
                <Footer />
              </section> */}
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




















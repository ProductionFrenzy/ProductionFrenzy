import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Home.module.css';
import camera from '../../assets/camera.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const cameraRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        // markers: true,
      },
    });

    tl.to(cameraRef.current, {
      x: -870,     // move left
      y: 800,      // move down
      scale: 1.1,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.homeContainer}>
      <div className={styles.left}>
        <h1>ProductionFrenzy</h1>
        <h2>
          From Invisible to irreversible—<br /> we help Brands stand tall <br /> in the digital space
        </h2>

        <div className={styles.btns}>
          <button className={styles.one}>Explore</button>
          <button className={styles.two}>Contact Us</button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.circle}></div>
        <img ref={cameraRef} src={camera} alt="camera" className={styles.camera} />
      </div>
    </div>
  );
};

export default Home;

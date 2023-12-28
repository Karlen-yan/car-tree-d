"use client";
import styles from "./page.module.css";
import Coche from "@/components/coche";
import Boxs from "@/components/scrollbox";
import React, { useState, useEffect } from "react";


export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <h1 className={styles.title}>Mercedes Benz E63</h1>
      <div className={`${styles.homeMain} ${scrollPosition > 80 ? styles.scrolled : ''}`}>

        <div className={styles.article1}>
          <Coche />
        </div>

        <div className={styles.main_container} id="main_container">
         <Boxs />
        </div>
        
      </div>
    </div>
  );
}

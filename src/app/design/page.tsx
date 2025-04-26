"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "@/styles/Web.module.css";
import { MdPerson, MdPhone, MdEmail, MdLocationOn, MdBusiness } from "react-icons/md";



const images = [
  "/images/Show1.png",
  "/images/Show2.png",
  "/images/Show3.png",
  "/images/Show4.png",
  "/images/Show5.png",
  "/images/Show6.png",
];

export default function Design() {
  const [currentImage, setCurrentImage] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({});



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const randomAngle = Math.floor(Math.random() * 360);
    const colors = Array.from({ length: 20 }, () => {
      const r = Math.floor(0 + Math.random() * 80);
      const g = Math.floor(150 + Math.random() * 100);
      const b = Math.floor(200 + Math.random() * 55);
      return `rgb(${r}, ${g}, ${b})`;
    }).join(", ");

    setBackgroundStyle({
      background: `linear-gradient(${randomAngle}deg, ${colors})`,
    });
  }, []);

  return (

      
    <div className={styles.container} style={backgroundStyle}>
      <h1 className={styles.title}>Tvorba webových stránek</h1>
      <p className={styles.description}>
  Tvořím moderní a rychlé weby pro prezentaci osob i firem s využitím nejnovějších technologií, 
  jako jsou React, Next.js a Framer Motion.
  </p>
  <br />
<p className={styles.description}>
  Weby jsou výkonné, bezpečné a uživatelsky přívětivé.
</p>
<br /><br />
<h2 className={styles.subtitle}>Ukázky webů</h2>

      {/* Galerie s plynulým přechodem */}
      <div className={styles.gallery}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Projektový náhled"
            className={styles.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

    {/* Sekce o animacích */}
<div className={styles.section}>
  <h2 className={styles.subtitle}>Futuristické animace</h2>
  <p className={styles.text}>
    Používám moderní animační knihovny pro efektní přechody, pohyby prvků a interaktivní zážitky.
  </p>

  {/* Pulsující energetická vlna */}
  <div className={styles.waveContainer}>
    <div className={styles.wave}></div>
  </div>

  {/* Orbitální rotující prstence */}
  <div className={styles.orbitContainer}>
    <div className={styles.orbit}>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
    </div>
  </div>
</div>


<div className={styles.contactSection}>
  <h2 className={styles.subtitle}>Kontakt</h2>
  <div className={styles.contactInfo}>
    <div className={styles.contactItem}>
      <MdPerson className={styles.icon} />
      <p>Ing. Aleš Vachuška</p>
    </div>
    <div className={styles.contactItem}>
  <MdPhone className={styles.icon} />
  <a href="tel:+420774104020" className={styles.contactLink}>774 104 020</a>
</div>
<div className={styles.contactItem}>
  <MdEmail className={styles.icon} />
  <a href="mailto:odhadyvachuska@gmail.com" className={styles.contactLink}>odhadyvachuska@gmail.com</a>
</div>
    <div className={styles.contactItem}>
      <MdLocationOn className={styles.icon} />
      <p>Slatina 68, 341 01 Slatina</p>
    </div>
    <div className={styles.contactItem}>
      <MdBusiness className={styles.icon} />
      <p>IČ: 14437830</p>
    </div>
  </div>
</div>



      {/* Odkaz zpět */}
<div className={styles.backButton}>
  <Link href="/">← Zpět do menu</Link>
</div>
</div>
  );
  }

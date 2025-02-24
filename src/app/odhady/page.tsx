"use client";

import styles from "@/styles/Odhady.module.css";
import Link from "next/link";
import { FaHome, FaBuilding, FaPhone, FaBalanceScale } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Odhady = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Oceňování nemovitých věcí</h1>
        <p>Profesionální odhady nemovitostí s individuálním přístupem.</p>
      </div>
      
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <FaHome className={styles.icon} />
          <h3>Odhad rodinného domu</h3>
          <p>Přesné a profesionální ocenění vašeho domu.</p>
        </div>
        <div className={styles.card}>
          <FaBuilding className={styles.icon} />
          <h3>Odhad komerční budovy</h3>
          <p>Posudek hodnoty administrativních a obchodních objektů.</p>
        </div>
        <div className={styles.card}>
          <FaBalanceScale className={styles.icon} />
          <h3>Právní posudky</h3>
          <p>Odhady pro dědictví, rozvody a soudní řízení.</p>
        </div>
      </div>
      
      <h2 className={styles.sectionTitle}>Ukázkové nemovitosti</h2>
      <Slider {...sliderSettings} className={styles.slider}>
        <div className={styles.property}><img src="/house1.jpg" alt="House 1" /></div>
        <div className={styles.property}><img src="/house2.jpg" alt="House 2" /></div>
        <div className={styles.property}><img src="/house3.jpg" alt="House 3" /></div>
        <div className={styles.property}><img src="/house4.jpg" alt="House 4" /></div>
      </Slider>
      
      <div className={styles.contact}>
        <h2>Kontakt</h2>
        <p>Ing. Aleš Vachuška</p>
        <p><FaPhone /> Telefon: 774 189 395</p>
      </div>
      
      <div className={styles.back}>
        <Link href="/">Zpět na hlavní stránku</Link>
      </div>
    </div>
  );
};

export default Odhady;

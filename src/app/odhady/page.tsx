"use client"

import styles from "@/styles/Odhady.module.css";
import Link from "next/link";
import { FaMapMarkedAlt, FaFileContract,  FaPhone, FaBalanceScale, FaEnvelope} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState } from "react";




const Odhady = () => {



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Výchozí hodnota pro velké obrazovky
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false, // Oprava problému s výškou
    responsive: [
      {
        breakpoint: 1200, // 💻 Střední monitory
        settings: {
          slidesToShow: 3, // 3 obrázky
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992, // 📱 Tablety na šířku
        settings: {
          slidesToShow: 2, // 2 obrázky
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // 📱 Tablety na výšku a menší zařízení
        settings: {
          slidesToShow: 2, // 2 obrázky
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576, // 📱 Malé telefony
        settings: {
          slidesToShow: 1, // 1 obrázek
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Pro checkbox
  const [message, setMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) {
      setMessage("Musíte souhlasit se zpracováním osobních údajů");
      return;
    }
  
    setIsSubmitting(true);
    setMessage("");
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || "Nepodařilo se odeslat");
  
      setMessage("Formulář úspěšně odeslán! Brzy se Vám ozvu");
      setFormData({ name: "", email: "", phone: "", address: "", reason: "", message: "" });
      setIsChecked(false);
      
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Nastala chyba při odesílání formuláře";
      setMessage(message);
      console.error("Chyba při odesílání:", error);
    }
  };

  return (

    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Oceňování nemovitých věcí</h1>
        <p>Oceňování nemovitostí s individuálním přístupem.</p>
        <p>Jižní Čechy / Distančně</p>
      </div>
      
      <div className={styles.cardsContainer}>
  <div className={styles.card}>
    <FaMapMarkedAlt className={styles.icon} /> {/* Ikona pro všechny druhy nemovitostí */}
    <h3>Odhad všech druhů nemovitostí</h3>
    <p>Od rodinných domů, přes pozemky až ke komerčním objektům.</p>
  </div>
  <div className={styles.card}>
    <FaBalanceScale className={styles.icon} /> {/* Ikona pro dědické řízení */}
    <h3>Odhady pro dědické řízení</h3>
    <p>Posudky pro dědictví, rozvody a další právní účely.</p>
  </div>
  <div className={styles.card}>
  <FaFileContract className={styles.icon} />
  <h3>Tvorba kupních smluv a havarijních plánů</h3>
  <p>Pomoc s vypracováním kupních smluv a havarijních plánů(zemědělství).</p>
</div>
</div>

      
      <h2 className={styles.sectionTitle}>Ukázkové nemovitosti</h2>
      <Slider {...sliderSettings} className={styles.slider}>
  <div className={styles.property}>
    <Image src="/images/house1.jpg" alt="House 1" width={500} height={300} />
  </div>
  <div className={styles.property}>
    <Image src="/images/house2.jpg" alt="House 2" width={500} height={300} />
  </div>
  <div className={styles.property}>
    <Image src="/images/house3.jpg" alt="House 3" width={500} height={300} />
  </div>
  <div className={styles.property}>
    <Image src="/images/house4.jpg" alt="House 4" width={500} height={300} />
  </div>
</Slider>
      
<div className={styles.contactWrapper}>
      {/* 🏠 Levá část - Kontaktní údaje */}
      <div className={styles.contactInfo}>
        <h2>Kontakt</h2>
        <p>Ing. Aleš Vachuška</p>
        <p><FaPhone /> Telefon: 774 104 020</p>
        <p><FaEnvelope /> Email: odhadyvachuska@gmail.com</p>
        <p><FaMapMarkedAlt /> Adresa: Slatina 68, 341 01 Slatina</p>
        <p>IČ: 14437830</p>
      </div>

      {/* 📩 Pravá část - Kontaktní formulář */}
      <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jméno" required />
    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" />
    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Adresa trvalého bydliště" />
    <input type="text" name="reason" value={formData.reason} onChange={handleChange} placeholder="Důvod ocenění" />
    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Zpráva" required></textarea>
    <div className={styles.checkboxContainer}>
    <input
    type="checkbox"
    checked={isChecked}
    onChange={handleCheckboxChange}
    required
  />
  <span>
    Souhlasím se{" "}
    <Link href="/odhady/ZasadyOchrany" target="_blank" rel="noopener noreferrer">
      zpracováním osobních údajů
    </Link>{" "}
    v souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) za účelem vyřízení mého požadavku.
  </span>
</div>


    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Odesílání..." : "Odeslat"}
    </button>

    {message && <p style={{ color: message.includes("úspěšně") ? "green" : "red" }}>{message}</p>}
  </form>
      </div>
    </div>
    <div className={styles.backButton}>
        <Link href="/">
          <button>🡸 Zpět na hlavní stranu</button>
        </Link>
      </div>
    </div>
  );
};

export default Odhady;

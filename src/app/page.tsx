import styles from "@/styles/Home.module.css";
import "@/styles/globals.css";
import Link from "next/link";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ing. Aleš Vachuška - Odhady nemovitostí",
    "image": "https://odhadyvachuska.cz/ales-vachuska.jpg",
    "telephone": "+420774104020",
    "email": "odhadyvachuska@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Slatina 68",
      "addressLocality": "Horažďovice",
      "postalCode": "34101",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.3121",
      "longitude": "13.7010"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$"
  }
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    <div className={styles.wrapper}>
      <div className={styles.name}>Ing. Aleš Vachuška</div>
      <div className={styles.container}>
        <Link href="/odhady" className={styles.left} aria-label="Služby odhadce nemovitostí">
          <div className={[styles.textLeft, styles.text].join(" ")}>Oceňování nemovitých věcí</div>
        </Link>
        <Link href="/design" className={styles.right} aria-label="Webdesign a tvorba stránek">
          <div className={[styles.textRight, styles.text].join(" ")}>Tvorba webu - Web design</div>
        </Link>
      </div>
    </div>
    </>
  );
}

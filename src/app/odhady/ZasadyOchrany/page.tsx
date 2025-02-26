'use client';

import { useRouter } from 'next/navigation';


export default function ZasadyOchrany() {
  const router = useRouter();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Zásady zpracování osobních údajů</h1>
      <p>
        Tato stránka obsahuje informace o tom, jak zpracováváme vaše osobní údaje v souladu s nařízením Evropského
        parlamentu a Rady (EU) 2016/679 (GDPR).
      </p>

      <h2>1. Správce osobních údajů</h2>
      <p>
        Správcem vašich osobních údajů je <strong>Ing. Aleš Vachuška</strong>, se sídlem <strong>Mánesova 273/9, 370 01
        České Budějovice</strong>.
      </p>

      <h2>2. Jaké údaje zpracováváme?</h2>
      <p>Zpracováváme pouze údaje, které nám poskytnete prostřednictvím kontaktního formuláře:</p>
      <ul>
        <li>Jméno a příjmení</li>
        <li>E-mailová adresa</li>
        <li>Telefonní číslo</li>
        <li>Adresa</li>
        <li>Další informace, které uvedete ve zprávě</li>
      </ul>

      <h2>3. Účel a právní základ zpracování</h2>
      <p>
        Vaše osobní údaje zpracováváme za účelem odpovědi na váš dotaz či vyřízení vaší žádosti. Právním základem
        zpracování je váš souhlas udělený při odeslání formuláře.
      </p>

      <h2>4. Doba uchování údajů</h2>
      <p>
        Vaše údaje uchováváme pouze po dobu nezbytně nutnou k vyřízení vašeho požadavku, maximálně však 1 rok od
        poslední komunikace.
      </p>

      <h2>5. Komu můžeme údaje zpřístupnit?</h2>
      <p>Vaše údaje nezpřístupňujeme třetím stranám, pokud to nevyžaduje zákon.</p>

      <h2>6. Vaše práva</h2>
      <p>Podle GDPR máte právo:</p>
      <ul>
        <li>Požádat o přístup k vašim osobním údajům</li>
        <li>Požádat o opravu nebo výmaz údajů</li>
        <li>Omezit zpracování údajů</li>
        <li>Vznášet námitky proti zpracování</li>
        <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
      </ul>

      <h2>7. Kontakt</h2>
      <p>
        V případě jakýchkoliv dotazů ohledně zpracování osobních údajů nás můžete kontaktovat na e-mailové adrese{" "}
        <strong>odhadyvachuska@gmail.com</strong>.
      </p>

      {/* Tlačítko zpět na stránku Odhady */}
      <button
        onClick={() => router.push("/odhady")}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Zpět na Odhady
      </button>
    </div>
  );
}

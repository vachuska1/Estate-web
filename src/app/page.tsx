import styles from "@/styles/Home.module.css";
import "@/styles/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/odhady" className={styles.left}>
        <div className={styles.text}>Oceňování nemovitých věcí</div>
      </Link>
      <Link href="/design" className={styles.right}>
        <div className={styles.text}>Tvorba webu - Web design</div>
      </Link>
    </div>
  );
}

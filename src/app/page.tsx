import styles from "@/styles/Home.module.css";
import "@/styles/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/odhady" className={styles.left}>
      <div className={[styles.textLeft, styles.text].join(" ")}>Oceňování nemovitých věcí</div>
      </Link>
      <Link href="/design" className={styles.right}>
        <div className={[styles.textRight, styles.text].join(" ")}>Tvorba webu - Web design</div>
      </Link>
    </div>
  );
}

import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>ner-digital</Link>

        <div className={styles.right}>
          <Link href="/our-story" className={styles.link}>Our Story</Link>
          <span className={styles.sep} />
          <Link href="/contact" className={styles.cta}>Contact</Link>
        </div>
      </div>
    </header>
  );
}

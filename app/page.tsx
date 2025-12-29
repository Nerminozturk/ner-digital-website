import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <p className={styles.kicker}>Modern software studio</p>
          <h1 className={styles.title}>
            Building the
            <br />
            Digital Future
          </h1>


          <p className={styles.subtitle}>
             We design and build software systems that help
             real businesses move forward.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="/solutions">Explore Solutions</a>
            <a className={styles.secondary} href="/contact">Contact Us</a>
          </div>
        </div>
      </section>

      {/* OUR STORY PREVIEW */}
      <section className={styles.story}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImage} aria-hidden="true" />
          <div className={styles.storyText}>
            <h2 className={styles.h2}>The ner-digital Journey</h2>
            <p className={styles.p}>
              We build clean, reliable systems for real businesses.
              Our focus is simple: elegant design, strong engineering, and long-term maintainability.
            </p>
            <a className={styles.storyLink} href="/our-story">
              Read Our Full Story →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className={styles.footerCta}>
        <div className={styles.footerInner}>
          <h3 className={styles.h3}>Let’s build something together.</h3>
          <p className={styles.pMuted}>
            Share your needs and we’ll respond with a clear plan.
          </p>
          <a className={styles.primary} href="/contact">Contact</a>
        </div>
      </section>
    </main>
  );
}

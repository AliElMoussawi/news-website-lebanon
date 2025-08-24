"use client";
import Link from "next/link";
import styles from "./HypeBanner.module.css";

interface HypeBannerProps {
  title: string;
  href: string;
  tag?: string;     // default: "عاجل"
  blurb?: string;   // optional short line under title
}

export default function HypeBanner({ title, href, tag = "عاجل", blurb }: HypeBannerProps) {
  return (
    <section
      className={styles.hype}
      dir="rtl"
      role="region"
      aria-label="إعلان مهم"
      aria-live="polite"
    >
      <div className={styles.badge}>
        <span className={styles.pulseDot} aria-hidden="true" />
        <span className={styles.badgeText}>{tag}</span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {blurb ? <p className={styles.blurb}>{blurb}</p> : null}
      </div>

      <div className={styles.cta}>
        <Link href={href} className={styles.ctaBtn} aria-label={`اقرأ: ${title}`}>
          اقرأ الآن
        </Link>
      </div>
    </section>
  );
}

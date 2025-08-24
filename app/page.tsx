// app/page.tsx
"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { articles } from "./lib/articles";
import HypeBanner from "./components/HypeBanner"; // ✅ add this

type LogPayload = { userAgent: string; platform: string; latitude?: number; longitude?: number };

export default function HomePage() {
  useEffect(() => {
    const meta: LogPayload = { userAgent: navigator.userAgent, platform: navigator.platform };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          meta.latitude = pos.coords.latitude;
          meta.longitude = pos.coords.longitude;
          fetch("/api/log", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(meta) });
        },
        () => {
          fetch("/api/log", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(meta) });
        }
      );
    }
  }, []);

  const featured = articles[0];
  const latest = articles.slice(1, 5);

  return (
    <div className={styles.container} dir="rtl">
      {/* 🔥 Important Announcement */}
      <HypeBanner
        title={featured.title}
        href={`/articles/${featured.slug}`}
        tag="عاجل"
        blurb="تغطية خاصة وتحديثات متواصلة حول الخبر الأبرز الآن"
      />

      {/* Featured */}
      <section className={styles.featured}>
        <Link href={`/articles/${featured.slug}`} className={styles.block}>
          <Image
            src={featured.image}
            alt={featured.title}
            width={900}
            height={400}
            sizes="(max-width: 900px) 100vw, 900px"
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <div className={styles.featuredText}>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
          </div>
        </Link>
      </section>

      {/* Latest */}
      <section className={styles.latest}>
        <h2>📰 آخر الأخبار</h2>
        <ul>
          {latest.map((a) => (
            <li key={a.slug}>
              <Link href={`/articles/${a.slug}`}>{a.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.more}>
          <Link href="/articles">عرض جميع المقالات</Link>
        </div>
      </section>
    </div>
  );
}

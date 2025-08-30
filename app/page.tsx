// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import { articles } from "./lib/articles";
import HypeBanner from "./components/HypeBanner";
import NewsFeed from "./components/NewsFeed";

export default function HomePage() {


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
    
        <div className={styles.layout}>
          {/* Main Content (articles) */}
          <div className={styles.main}>
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
    
            {/* Latest (your internal articles) */}
            <section className={styles.latest}>
              <h2>📰 آخر الأخبار المحلية</h2>
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
    
          {/* Sidebar (NewsFeed) */}
          <aside className={styles.sidebar}>
            <NewsFeed />
          </aside>
        </div>
      </div>
    );
    
}
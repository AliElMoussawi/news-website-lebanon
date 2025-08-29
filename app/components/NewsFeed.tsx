"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./NewsFeed.module.css"; // 👈 add styles

type NewsItem = {
  title: string;
  link: string;
  source: string;
  date?: string;
};

export default function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setNews(data.news || []);
      }
    } catch {
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 5 * 60 * 1000); // refresh every 5 min
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>⏳ جاري تحميل الأخبار...</p>;
  if (news.length === 0) return <p>⚠️ لا توجد أخبار متاحة حالياً</p>;

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>🗞️ الأخبار العالمية</h2>
      <div className={styles.grid}>
        {news.map((item, i) => (
          <Link href={item.link} target="_blank" key={i} className={styles.card}>
            <h3>{item.title}</h3>
            <p className={styles.meta}>
              {item.source} • {item.date ? new Date(item.date).toLocaleDateString("ar-EG") : ""}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

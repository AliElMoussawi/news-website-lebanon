"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NewsItem = {
  title: string;
  link: string;
  source: string;
  date?: string;
};

export default function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);

  // function to fetch news
  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setNews(data.news || []);
      }
    } catch {
      setNews([]);
    }
  };

  useEffect(() => {
    // fetch on mount
    fetchNews();

    // refresh every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000);

    // cleanup
    return () => clearInterval(interval);
  }, []);

  if (news.length === 0) {
    return null; // don’t render if no news
  }

  return (
    <section>
      <h2>🗞️ الأخبار العالمية </h2>
      <ul>
        {news.map((item, i) => (
          <li key={i}>
            <Link href={item.link} target="_blank">
              {item.title}
            </Link>{" "}
            <small>({item.source})</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

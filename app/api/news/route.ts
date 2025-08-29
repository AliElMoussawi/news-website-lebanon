// app/api/news/route.ts
import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

type RawRssItem = {
  title: string;
  link: string;
  pubDate?: string;
};

type NewsItem = {
  title: string;
  link: string;
  date: string;
  source: string;
};

// ---- Simple memory cache ----
let cache: { data: NewsItem[]; timestamp: number } | null = null;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

export async function GET() {
  // ✅ Return cached data if fresh
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json({ news: cache.data });
  }

  const feeds = [
    "https://www.skynewsarabia.com/rss",
    "https://feeds.bbci.co.uk/arabic/rss.xml",
  ];

  const parser = new XMLParser();
  const allItems: NewsItem[] = [];

  for (const url of feeds) {
    try {
      const res = await fetch(url, {
        cache: "no-store",
        headers: { "User-Agent": "NextNewsBot/1.0" },
      });
      if (!res.ok) continue;

      const xml = await res.text();
      const parsed = parser.parse(xml);

      const items = parsed.rss?.channel?.item as RawRssItem[] | undefined;
      if (items) {
        const source = parsed.rss?.channel?.title || "مصدر غير معروف";
        items.forEach((item) => {
          allItems.push({
            title: item.title,
            link: item.link,
            date: new Date(item.pubDate || Date.now()).toISOString(),
            source,
          });
        });
      }
    } catch (err) {
      console.error("Error fetching/parsing feed", url, err);
    }
  }

  allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const news = allItems.slice(0, 10);

  // ✅ Save to cache
  cache = { data: news, timestamp: Date.now() };

  return NextResponse.json({ news });
}

import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export async function GET() {
  try {
    const feeds = [
      "https://www.skynewsarabia.com/rss",
      "http://feeds.bbci.co.uk/arabic/rss.xml",
    ];

    const parser = new XMLParser();
    const allItems: any[] = [];

    // Fetch both feeds in parallel
    await Promise.all(
      feeds.map(async (url) => {
        try {
          const res = await fetch(url, { cache: "no-store" });
          if (res.ok) {
            const xml = await res.text();
            const parsed = parser.parse(xml);

            const items = parsed.rss?.channel?.item || [];
            items.forEach((item: any) => {
              allItems.push({
                title: item.title,
                link: item.link,
                date: new Date(item.pubDate || Date.now()),
                source: parsed.rss?.channel?.title || "مصدر غير معروف",
              });
            });
          }
        } catch (e) {
          console.error(`Failed to fetch ${url}`, e);
        }
      })
    );

    // Sort all news by date (newest first)
    allItems.sort((a, b) => b.date.getTime() - a.date.getTime());

    // Limit to 10 latest
    const news = allItems.slice(0, 10).map((item) => ({
      title: item.title,
      link: item.link,
      source: item.source,
      date: item.date,
    }));

    return NextResponse.json({ news });
  } catch (err) {
    console.error("News fetch failed", err);
    return NextResponse.json({ news: [] }, { status: 500 });
  }
}

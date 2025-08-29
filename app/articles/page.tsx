import Link from "next/link";
import Image from "next/image";
import styles from "./list.module.css";
import { articles } from "../lib/articles";

export default function ArticlesIndex() {
  return (
    <main className={styles.container} dir="rtl">
      {/* Hero */}
      <header className={styles.hero}>
        <h1 className={styles.title}>📰 كل المقالات</h1>
        <p className={styles.subtitle}>تصفح أحدث المقالات والتقارير الخاصة</p>
      </header>

      {/* Articles Grid */}
      <ul className={styles.grid}>
        {articles.map((a) => (
          <li key={a.slug} className={styles.card}>
            <Link href={`/articles/${a.slug}`} className={styles.link}>
              <div className={styles.imageWrapper}>
                <Image
                  src={a.image}
                  alt={a.title}
                  width={600}
                  height={300}
                  sizes="(max-width: 600px) 100vw, 600px"
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
                <span className={styles.readMore}>اقرأ المزيد →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

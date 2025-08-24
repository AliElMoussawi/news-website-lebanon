// app/articles/page.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./list.module.css";
import { articles } from "../lib/articles";

export default function ArticlesIndex() {
  return (
    <main className={styles.container} dir="rtl">
      <h1 className={styles.title}>كل المقالات</h1>
      <ul className={styles.grid}>
        {articles.map(a => (
          <li key={a.slug} className={styles.card}>
            <Link href={`/articles/${a.slug}`} className={styles.link}>
              <Image
                src={a.image}
                alt={a.title}
                width={600}
                height={300}
                sizes="(max-width: 600px) 100vw, 600px"
                style={{ width: "100%", height: "auto" }}
              />
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

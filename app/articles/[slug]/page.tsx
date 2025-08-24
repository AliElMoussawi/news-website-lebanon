// app/articles/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { articles, getArticle } from "../../lib/articles";

// In Next.js 15, params can be async -> await them.
type ParamsPromise = Promise<{ slug: string }>;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} | لبنان اليوم`,
    description: a.excerpt,
    openGraph: { title: a.title, description: a.excerpt, images: [a.image] },
  };
}

export default async function ArticlePage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  return (
    <main className={styles.container} dir="rtl">
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{a.title}</h1>
          <div className={styles.meta}>
            <span>✍️ {a.author}</span>
            <span>•</span>
            <time dateTime={a.publishedAt}>
              {new Date(a.publishedAt).toLocaleDateString("ar-LB", { dateStyle: "long" })}
            </time>
          </div>
        </header>

        <Image
          src={a.image}
          alt={a.title}
          width={1200}
          height={600}
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
          priority
        />

        <div className={styles.content}>
          {a.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

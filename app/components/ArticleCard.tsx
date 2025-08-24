"use client";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
}

export default function ArticleCard({ slug, title, image, excerpt }: ArticleCardProps) {
  return (
    <article className="article">
      <Link href={`/articles/${slug}`} className="block-link" aria-label={title}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={300}
          sizes="(max-width: 600px) 100vw, 600px"
          style={{ width: "100%", height: "auto" }}
        />
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </Link>

      <style jsx>{`
        .article {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
          transition: transform .2s;
        }
        .article:hover { transform: translateY(-4px); }
        .block-link { display: block; color: inherit; text-decoration: none; }
        h3 { margin: 12px 12px 6px; font-size: 20px; color: #c00; }
        p  { margin: 0 12px 16px; line-height: 1.8; }
      `}</style>
    </article>
  );
}

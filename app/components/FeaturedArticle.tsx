"use client";
import Link from "next/link";
import Image from "next/image";

interface FeaturedArticleProps {
  slug: string;
  title: string;
  image: string;
  content: string;
}

export default function FeaturedArticle({ slug, title, image, content }: FeaturedArticleProps) {
  return (
    <section className="featured">
      <Link href={`/articles/${slug}`} className="block-link" aria-label={title}>
        <Image
          src={image}
          alt={title}
          width={1000}
          height={500}
          sizes="(max-width: 1000px) 100vw, 1000px"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <div className="featured-text">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </Link>

      <style jsx>{`
        .featured {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }
        .block-link { display: block; color: inherit; text-decoration: none; }
        .featured-text { padding: 18px; }
        .featured-text h2 { margin: 0 0 10px; font-size: 26px; color: #c00; }
        .featured-text p  { margin: 0; line-height: 1.9; }
      `}</style>
    </section>
  );
}

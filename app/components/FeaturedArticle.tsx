"use client";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface FeaturedArticleProps {
  slug: string;
  title: string;
  image: string;
  content: string;   // markdown string
  excerpt?: string;  // short summary
  full?: boolean;    // control whether to render full article or preview
}

export default function FeaturedArticle({ slug, title, image, content, excerpt, full = false }: FeaturedArticleProps) {
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
      </Link>

      <div className="featured-text">
        <h2>{title}</h2>

        {/* If full → render full Markdown; else show excerpt */}
        {full ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          <p>{excerpt ?? content.slice(0, 200) + "..."}</p>
        )}
      </div>

      <style jsx>{`
        .featured {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }
        .block-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }
        .featured-text {
          padding: 18px;
        }
        .featured-text h2 {
          margin: 0 0 10px;
          font-size: 26px;
          color: #004e89; /* calm blue */
        }
        .featured-text p {
          margin: 0;
          line-height: 1.8;
          color: #444;
        }
        .featured-text :global(h1,h2,h3) {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #222;
        }
        .featured-text :global(p) {
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function WorldPage() {
  return (
    <main className="world-container" dir="rtl">
      <h1 className="page-title">🌍 الأخبار العالمية</h1>

      {/* Featured Section */}
      <section className="featured">
        <Image
          src="https://picsum.photos/1000/500"
          alt="قمة عالمية"
          width={1000}
          height={500}
          className="featured-img"
        />
        <div className="featured-text">
          <h2>قمة المناخ 2025: قادة العالم يتعهدون بخفض الانبعاثات</h2>
          <p>
            اجتمع زعماء العالم في نيويورك لمناقشة قضايا البيئة والطاقة النظيفة،
            حيث خرج المؤتمر بتعهدات جديدة تهدف إلى خفض الانبعاثات بنسبة 40%
            بحلول عام 2035.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        <article className="article">
          <Image
            src="https://picsum.photos/600/300?1"
            alt="أزمة اقتصادية"
            width={600}
            height={300}
            className="article-img"
          />
          <h3>الأزمة الاقتصادية العالمية</h3>
          <p>
            أسواق المال العالمية تشهد تقلبات حادة وسط مخاوف من الركود الاقتصادي
            وتباطؤ النمو في عدة مناطق حول العالم.
          </p>
        </article>

        <article className="article">
          <Image
            src="https://picsum.photos/600/300?2"
            alt="الشرق الأوسط"
            width={600}
            height={300}
            className="article-img"
          />
          <h3>تطورات الشرق الأوسط</h3>
          <p>
            استمرار المفاوضات بين القوى الإقليمية والدولية لإيجاد حلول سلمية
            للنزاعات المتصاعدة في المنطقة.
          </p>
        </article>

        <article className="article">
          <Image
            src="https://picsum.photos/600/300?3"
            alt="الصين"
            width={600}
            height={300}
            className="article-img"
          />
          <h3>الصين تطلق مبادرة تجارية جديدة</h3>
          <p>
            بكين تعلن عن مشروع استثماري ضخم لتعزيز التعاون مع الدول الإفريقية،
            ضمن خطة طويلة الأمد لتوسيع النفوذ الاقتصادي.
          </p>
        </article>

        <article className="article">
          <Image
            src="https://picsum.photos/600/300?4"
            alt="أوروبا"
            width={600}
            height={300}
            className="article-img"
          />
          <h3>أوروبا تواجه تحديات الهجرة</h3>
          <p>
            موجة جديدة من المهاجرين تثير الجدل في العواصم الأوروبية حول السياسات
            الحدودية وحقوق الإنسان.
          </p>
        </article>
      </section>

      {/* Styles */}
      <style jsx>{`
        .world-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          font-family: Tahoma, sans-serif;
          color: #333;
        }
        .page-title {
          text-align: center;
          font-size: 32px;
          margin-bottom: 30px;
          color: #c00;
        }
        .featured {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }
        .featured-img {
          border-bottom: 2px solid #eee;
          width: 100%;
          height: auto;
        }
        .featured-text {
          padding: 20px;
        }
        .featured-text h2 {
          margin-top: 0;
          font-size: 24px;
          color: #222;
        }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .article {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .article:hover {
          transform: translateY(-5px);
        }
        .article-img {
          width: 100%;
          height: auto;
          border-bottom: 2px solid #eee;
        }
        .article h3 {
          margin: 15px;
          font-size: 20px;
          color: #c00;
        }
        .article p {
          margin: 0 15px 15px;
          font-size: 15px;
          line-height: 1.7;
        }
      `}</style>
    </main>
  );
}

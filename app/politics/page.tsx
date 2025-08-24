"use client";
import Link from "next/link";

export default function PoliticsPage() {
  return (
    <main className="politics-container" dir="rtl">
      <h1 className="page-title">📰 الأخبار السياسية</h1>

      {/* Featured News */}
      <section className="featured">
        <img
          src="https://picsum.photos/1000/500?politics"
          alt="الخبر الرئيسي"
          className="featured-img"
        />
        <div className="featured-text">
          <h2>
            الحكومة اللبنانية تكشف عن خطة إصلاحية شاملة
          </h2>
          <p>
            أعلنت الحكومة اللبنانية عن حزمة إصلاحات سياسية واقتصادية تهدف إلى
            تعزيز الاستقرار ومكافحة الفساد، وسط ترحيب شعبي وحذر من المعارضة.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        <article className="article">
          <img
            src="https://picsum.photos/600/300?1"
            alt="انتخابات"
            className="article-img"
          />
          <h3>انتخابات 2025: سباق محموم بين الأحزاب</h3>
          <p>
            مع اقتراب موعد الانتخابات المقبلة، تشتعل المنافسة بين الكتل السياسية
            على المقاعد البرلمانية وسط توقعات بمشاركة واسعة.
          </p>
          <Link href="#">اقرأ المزيد</Link>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?2"
            alt="مجلس النواب"
            className="article-img"
          />
          <h3>جلسة برلمانية مثيرة للجدل</h3>
          <p>
            البرلمان اللبناني يعقد جلسة ساخنة لمناقشة القوانين الجديدة المتعلقة
            بالشفافية والحوكمة الرشيدة.
          </p>
          <Link href="#">اقرأ المزيد</Link>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?3"
            alt="علاقات خارجية"
            className="article-img"
          />
          <h3>زيارة دبلوماسية رفيعة المستوى</h3>
          <p>
            وزير الخارجية يلتقي نظراءه في المنطقة لبحث ملفات الأمن والتعاون
            الاقتصادي، وسط أجواء من التفاؤل.
          </p>
          <Link href="#">اقرأ المزيد</Link>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?4"
            alt="قرارات حكومية"
            className="article-img"
          />
          <h3>قرارات جديدة لدعم الشباب</h3>
          <p>
            الحكومة تعلن عن مبادرات لدعم الشباب وتمكينهم من المشاركة الفعالة في
            الحياة السياسية.
          </p>
          <Link href="#">اقرأ المزيد</Link>
        </article>
      </section>

      {/* CSS */}
      <style jsx>{`
        .politics-container {
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
          width: 100%;
          height: auto;
          border-bottom: 2px solid #eee;
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
          padding-bottom: 10px;
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
          margin: 0 15px 10px;
          font-size: 15px;
          line-height: 1.7;
        }
        .article a {
          display: inline-block;
          margin: 0 15px;
          font-size: 14px;
          color: #0070f3;
          text-decoration: none;
        }
        .article a:hover {
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}

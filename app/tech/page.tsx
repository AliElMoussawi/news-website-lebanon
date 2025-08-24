"use client";

export default function TechPage() {
  return (
    <main className="tech-container" dir="rtl">
      <h1 className="page-title">💡 التكنولوجيا والابتكارات</h1>

      {/* Featured News */}
      <section className="featured">
        <img
          src="https://picsum.photos/1000/500?tech"
          alt="الخبر الرئيسي"
          className="featured-img"
        />
        <div className="featured-text">
          <h2>ثورة جديدة في الذكاء الاصطناعي</h2>
          <p>
            كشفت شركات التكنولوجيا العالمية عن تقنيات جديدة تعتمد على الذكاء
            الاصطناعي التوليدي، قادرة على إحداث تغيير جذري في مجالات التعليم،
            الصحة، والصناعة.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        <article className="article">
          <img
            src="https://picsum.photos/600/300?ai"
            alt="ذكاء اصطناعي"
            className="article-img"
          />
          <h3>الجيل الجديد من الروبوتات الذكية</h3>
          <p>
            شركات ناشئة تطور روبوتات قادرة على التفاعل البشري بشكل أكثر طبيعية،
            مع إمكانية دخولها سوق الخدمات المنزلية.
          </p>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?space"
            alt="الفضاء"
            className="article-img"
          />
          <h3>سباق الفضاء التجاري يتسارع</h3>
          <p>
            شركات خاصة تطلق صواريخ جديدة منخفضة التكلفة، تمهيداً لعصر الرحلات
            السياحية إلى الفضاء.
          </p>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?6g"
            alt="شبكة 6G"
            className="article-img"
          />
          <h3>الجيل السادس للاتصالات (6G)</h3>
          <p>
            خبراء يتوقعون سرعات غير مسبوقة مع شبكات الجيل السادس، ما يفتح الباب
            لتطبيقات مستقبلية في الطب الذكي والسيارات ذاتية القيادة.
          </p>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?cyber"
            alt="الأمن السيبراني"
            className="article-img"
          />
          <h3>الأمن السيبراني في مواجهة التهديدات</h3>
          <p>
            تصاعد الهجمات الإلكترونية يدفع الحكومات والشركات إلى الاستثمار
            بكثافة في مجال الحماية الرقمية.
          </p>
        </article>
      </section>

      {/* CSS */}
      <style jsx>{`
        .tech-container {
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
      `}</style>
    </main>
  );
}

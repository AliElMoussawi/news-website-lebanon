"use client";
export default function SportsPage() {
  return (
    <main className="sports-container" dir="rtl">
      <h1 className="page-title">🏆 الأخبار الرياضية</h1>

      {/* Featured News */}
      <section className="featured">
        <img
          src="https://picsum.photos/1000/500?sports"
          alt="الخبر الرئيسي"
          className="featured-img"
        />
        <div className="featured-text">
          <h2>منتخب لبنان يحقق فوزاً تاريخياً في التصفيات</h2>
          <p>
            حقق المنتخب اللبناني انتصاراً كبيراً على خصمه الآسيوي بنتيجة 3-1،
            مما عزز فرصه في التأهل إلى كأس آسيا. الجماهير احتفلت بهذا الفوز
            التاريخي الذي أعاد الأمل لكرة القدم اللبنانية.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        <article className="article">
          <img
            src="https://picsum.photos/600/300?match"
            alt="مباراة الدوري"
            className="article-img"
          />
          <h3>الدوري اللبناني يشهد صراعاً مثيراً</h3>
          <p>
            الأندية اللبنانية تخوض مباريات قوية ضمن منافسات الدوري المحلي، حيث
            يشهد الموسم الحالي تنافساً محموماً بين الفرق الكبرى.
          </p>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?transfer"
            alt="انتقالات"
            className="article-img"
          />
          <h3>انتقالات اللاعبين: صفقات نارية تلوح في الأفق</h3>
          <p>
            أندية أوروبية كبرى تقترب من ضم نجوم لامعين في صفقات ضخمة ستغير ملامح
            سوق الانتقالات الصيفي.
          </p>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?analysis"
            alt="تحليل مباراة"
            className="article-img"
          />
          <h3>تحليل: نقاط القوة والضعف في أداء المنتخب</h3>
          <p>
            خبراء يقدمون تحليلاً شاملاً لأداء المنتخب الوطني خلال المباريات
            الأخيرة، مع التركيز على التكتيكات الدفاعية والهجومية.
          </p>
        </article>

        <article className="article">
          <img
            src="https://picsum.photos/600/300?trophy"
            alt="كأس العالم"
            className="article-img"
          />
          <h3>العد التنازلي لكأس العالم 2026</h3>
          <p>
            المنتخبات العالمية تبدأ استعداداتها المبكرة للبطولة الأكبر في العالم،
            وسط توقعات بمنافسة شرسة بين كبار الكرة.
          </p>
        </article>
      </section>

      {/* CSS */}
      <style jsx>{`
        .sports-container {
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

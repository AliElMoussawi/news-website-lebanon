"use client";
import ArticleCard from "../components/ArticleCard";
import FeaturedArticle from "../components/FeaturedArticle";
import styles from "./page.module.css";

export default function EconomyPage() {
  return (
    <main className={styles.container} dir="rtl">
      <h1 className={styles.title}>الأخبار الاقتصادية</h1>

      {/* Featured */}
      <FeaturedArticle
        slug="gold-prices-record-high"            // ✅ add slug
        title="أسعار الذهب العالمية: تحليل شامل وتاريخ ممتد"
        image="https://picsum.photos/1000/500?gold"
        content="الذهب يُعتبر منذ آلاف السنين أحد أهم المعادن النفيسة وأكثرها ارتباطاً بالقيمة والثروة. وما زال يلعب دوراً محورياً في حماية المستثمرين من التقلبات الاقتصادية..."
      />

      {/* Articles Grid */}
      <section className={styles.grid}>
        <ArticleCard
          slug="opec-oil-production-cut"          // ✅ add slug
          title="النفط يرتفع بعد قرارات أوبك"
          image="https://picsum.photos/600/300?oil"
          excerpt="أسعار النفط تشهد ارتفاعاً ملحوظاً بعد إعلان منظمة أوبك عن خفض الإنتاج لدعم الأسواق..."
        />
        <ArticleCard
          slug="stock-markets-volatile"           // ✅ add slug
          title="أسواق البورصة تتأرجح بين المكاسب والخسائر"
          image="https://picsum.photos/600/300?stocks"
          excerpt="شهدت البورصات العالمية حالة من التذبذب نتيجة المخاوف من التضخم والسياسات النقدية..."
        />
        <ArticleCard
          slug="central-banks-buy-gold"           // ✅ add slug
          title="البنوك المركزية تواصل شراء الذهب"
          image="https://picsum.photos/600/300?bank"
          excerpt="في ظل الأزمات العالمية، زادت البنوك المركزية من احتياطاتها من الذهب لحماية عملاتها..."
        />
        <ArticleCard
          slug="global-inflation-impact"          // ✅ add slug
          title="تأثير التضخم على الاقتصاد العالمي"
          image="https://picsum.photos/600/300?inflation"
          excerpt="التضخم العالمي يفرض تحديات كبيرة على الدول النامية ويزيد من الضغوط على الأسر..."
        />
      </section>
    </main>
  );
}

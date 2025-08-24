// app/lib/articles.ts
export type Category = "economy" | "politics" | "sports" | "tech" | "world";

export interface Article {
  slug: string;
  title: string;
  category: Category;
  image: string;
  excerpt: string;
  content: string[];        // paragraphs
  author: string;
  publishedAt: string;      // ISO
}

export const articles: Article[] = [
  {
    slug: "gold-prices-record-high",
    title: "الذهب يسجل ارتفاعاً تاريخياً وسط تقلبات الأسواق العالمية",
    category: "economy",
    image: "https://picsum.photos/1000/500?gold",
    excerpt: "أسعار الذهب تواصل الصعود مع ازدياد القلق من التضخم والسياسات النقدية المتشددة.",
    author: "فريق الاقتصاد",
    publishedAt: "2025-08-20T08:00:00Z",
    content: [
      "يُعد الذهب من أهم الملاذات الآمنة في أوقات عدم اليقين الاقتصادي...",
      "ويرى محللون أن تدفق الاستثمارات نحو المعادن النفيسة قد يستمر إذا بقي التضخم مرتفعاً...",
      "على صعيد العملات، أدى تراجع الدولار إلى زيادة دعم أسعار الذهب...",
    ]
  },
  {
    slug: "lebanon-cabinet-reform-plan",
    title: "الحكومة اللبنانية تكشف معالم خطة إصلاحية شاملة",
    category: "politics",
    image: "https://picsum.photos/1000/500?politics",
    excerpt: "الخطة تتضمن إجراءات لخفض العجز وتحسين قطاعي الكهرباء والاتصالات.",
    author: "مكتب السياسة",
    publishedAt: "2025-08-18T10:30:00Z",
    content: [
      "أعلنت الحكومة اللبنانية حزمة من الإجراءات الإصلاحية...",
      "تشمل الخطة جدولاً زمنياً واضحاً للحوكمة والشفافية...",
      "وتعهدت الحكومة بإشراك المجتمع المدني في المتابعة...",
    ]
  },
  {
    slug: "lebanon-qualifies-asia",
    title: "منتخب لبنان يحقق فوزاً تاريخياً ويقترب من التأهل لكأس آسيا",
    category: "sports",
    image: "https://picsum.photos/1000/500?sports",
    excerpt: "فوز ثمين بنتيجة 3-1 يعزز حظوظ المنتخب في التصفيات القارية.",
    author: "قسم الرياضة",
    publishedAt: "2025-08-17T19:00:00Z",
    content: [
      "حقق منتخب لبنان انتصاراً مميزاً أمام خصم قوي...",
      "أشاد المدرب بأداء اللاعبين والانضباط التكتيكي...",
      "تجدر الإشارة إلى أن الاتحاد أعلن مكافآت تشجيعية...",
    ]
  },
  {
    slug: "ai-breakthrough-arabic",
    title: "ابتكارات جديدة في الذكاء الاصطناعي باللغة العربية",
    category: "tech",
    image: "https://picsum.photos/1000/500?ai",
    excerpt: "شركات ناشئة تطلق نماذج لغوية عربية محسّنة للتعليم والصحة.",
    author: "قسم التقنية",
    publishedAt: "2025-08-16T11:15:00Z",
    content: [
      "كشفت شركات تقنية ناشئة عن تطورات مهمة في نماذج اللغة العربية...",
      "ويرى خبراء أن التطبيقات التعليمية ستستفيد بشكل كبير...",
      "كما يسلّط الخبراء الضوء على أهمية أخلاقيات الذكاء الاصطناعي...",
    ]
  },
  {
    slug: "global-energy-summit",
    title: "قمة عالمية تبحث مستقبل الطاقة والتحول الأخضر",
    category: "world",
    image: "https://picsum.photos/1000/500?energy",
    excerpt: "تعهدات جديدة لخفض الانبعاثات وتوسيع الاستثمارات في الطاقة المتجددة.",
    author: "مكتب العالم",
    publishedAt: "2025-08-15T09:45:00Z",
    content: [
      "انعقدت القمة بحضور قادة دول وخبراء طاقة...",
      "أكدت الجلسات على تسريع التحول نحو مصادر نظيفة...",
      "وأشار التقرير الختامي إلى ضرورة تمويل عادل للدول النامية...",
    ]
  },
  {
    slug: "stock-markets-volatile",
    title: "تقلبات حادة في أسواق الأسهم العالمية",
    category: "economy",
    image: "https://picsum.photos/1000/500?stocks",
    excerpt: "المستثمرون يترقبون قرارات البنوك المركزية بشأن أسعار الفائدة.",
    author: "فريق الاقتصاد",
    publishedAt: "2025-08-14T14:20:00Z",
    content: [
      "شهدت المؤشرات العالمية حالة تذبذب ملحوظة...",
      "ويرى محللون أن العوامل الأساسية لا تزال متينة...",
      "لكن الحذر يسيطر على التداول قصير الأجل...",
    ]
  }
];

// helpers
export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: Category) {
  return articles.filter(a => a.category === category);
}

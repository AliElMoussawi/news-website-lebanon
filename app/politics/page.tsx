// app/politics/page.tsx
import Image from "next/image";

export default function PoliticsPage() {
  return (
    <main className="container" dir="rtl">
      <h1>آخر الأخبار السياسية</h1>
      <section>
        <article>
          <Image
            src="https://picsum.photos/1000/500?politics"
            alt="الخبر السياسي الرئيسي"
            width={1000}
            height={500}
            sizes="(max-width: 1000px) 100vw, 1000px"
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
            priority
          />
          <h2>الحكومة تعلن معالم خطة إصلاحية</h2>
          <p>هذا القسم يعرض أحدث التطورات في العالم السياسي...</p>
        </article>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", marginTop: 24 }}>
          {[
            { q: "parliament", t: "جلسة برلمانية ساخنة" },
            { q: "election", t: "تحديثات ملف الانتخابات" },
            { q: "diplomacy", t: "حراك دبلوماسي لافت" },
            { q: "reform", t: "ملفات الإصلاح على الطاولة" },
          ].map((a) => (
            <article key={a.q} style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,.08)" }}>
              <Image
                src={`https://picsum.photos/600/300?${a.q}`}
                alt={a.t}
                width={600}
                height={300}
                sizes="(max-width: 600px) 100vw, 600px"
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: 12 }}>
                <h3 style={{ margin: "8px 0", color: "#c00" }}>{a.t}</h3>
                <p style={{ margin: 0, lineHeight: 1.8 }}>تفاصيل موسّعة حول التطورات الأخيرة...</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

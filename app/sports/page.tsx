// app/sports/page.tsx
"use client"; // keep if you had client-only CSS/behavior; otherwise you can remove
import Image from "next/image";

export default function SportsPage() {
  return (
    <main className="container" dir="rtl">
      <h1>الأخبار الرياضية</h1>

      <section style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 6px rgba(0,0,0,.1)", marginBottom: 24 }}>
        <Image
          src="https://picsum.photos/1000/500?sports"
          alt="الخبر الرياضي الرئيسي"
          width={1000}
          height={500}
          sizes="(max-width: 1000px) 100vw, 1000px"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <div style={{ padding: 16 }}>
          <h2>منتخب لبنان يحقق فوزاً تاريخياً</h2>
          <p>نتائج المباريات، انتقالات اللاعبين، وتحليلات حصرية...</p>
        </div>
      </section>

      <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
        {[
          { q: "match", t: "الدوري يشهد صراعاً مثيراً" },
          { q: "transfer", t: "صفقات انتقال نارية" },
          { q: "analysis", t: "تحليل الأداء والتكتيك" },
          { q: "trophy", t: "العد التنازلي للبطولات" },
        ].map((a) => (
          <article key={a.q} style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }}>
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
              <p style={{ margin: 0, lineHeight: 1.8 }}>تفاصيل وتحليلات شاملة حول آخر التطورات...</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

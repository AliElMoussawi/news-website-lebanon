// app/tech/page.tsx
import Image from "next/image";

export default function TechPage() {
  return (
    <main className="container" dir="rtl">
      <h1>التكنولوجيا والابتكارات</h1>

      <section style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 6px rgba(0,0,0,.1)", marginBottom: 24 }}>
        <Image
          src="https://picsum.photos/1000/500?tech"
          alt="التقنية اليوم"
          width={1000}
          height={500}
          sizes="(max-width: 1000px) 100vw, 1000px"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <div style={{ padding: 16 }}>
          <h2>ابتكارات جديدة في الذكاء الاصطناعي</h2>
          <p>أحدث أخبار الذكاء الاصطناعي والتقنيات الحديثة...</p>
        </div>
      </section>

      <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
        {[
          { q: "ai", t: "نماذج لغوية عربية" },
          { q: "cloud", t: "خدمات سحابية متقدمة" },
          { q: "cyber", t: "أمن سيبراني وخصوصية" },
          { q: "devices", t: "أجهزة واتجاهات جديدة" },
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
              <p style={{ margin: 0, lineHeight: 1.8 }}>ملخص سريع لأبرز العناوين التقنية...</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

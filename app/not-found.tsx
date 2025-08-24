// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }} dir="rtl">
      <h1>🚫 الصفحة غير موجودة</h1>
      <p>عذراً، لم يتم العثور على الصفحة المطلوبة.</p>
      <Link
        href="/"
        style={{ color: "#c00", textDecoration: "underline" }}
      >
        العودة إلى الرئيسية
      </Link>
    </main>
  );
}

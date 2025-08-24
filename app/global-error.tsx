// app/global-error.tsx
"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ padding: 24, fontFamily: "sans-serif" }}>
        <h1>⚠️ خطأ في الخادم</h1>
        <p>حدث خطأ غير متوقع أثناء تحميل الصفحة.</p>
        <button onClick={() => reset()} style={{ padding: "8px 14px" }}>
          إعادة المحاولة
        </button>
      </body>
    </html>
  );
}

// app/error.tsx
"use client";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]); // uses 'error' → no lint warning
  return (
    <main style={{ padding: 24 }} dir="rtl">
      <h1>حدث خطأ غير متوقع</h1>
      <button onClick={() => reset()} style={{ padding: "8px 14px" }}>
        إعادة المحاولة
      </button>
    </main>
  );
}

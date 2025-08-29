// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BeirutClock from "./components/BeirutClock";

export const metadata: Metadata = {
  title: "لبنان اليوم",
  description: "آخر الأخبار اللبنانية والعالمية على مدار الساعة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body dir="rtl">
        <header className="site-header">
          <div className="container header-content">
            <div className="logo-clock">
              <Image
                src="/logo.svg"
                alt="لبنان اليوم"
                className="logo-img"
                width={140}
                height={56}
                priority
              />
            </div>

            <nav className="nav">
              <Link className="nav-link" href="/">الرئيسية</Link>
              <Link className="nav-link" href="/politics">سياسة</Link>
              <Link className="nav-link" href="/economy">اقتصاد</Link>
              <Link className="nav-link" href="/sports">رياضة</Link>
              <Link className="nav-link" href="/tech">تقنية</Link>
              <Link className="nav-link" href="/world">عالم</Link>
            </nav>
          </div>
        </header>
              <div className="clock-wrapper">
                <BeirutClock />
              </div>

        {children}

        <footer className="site-footer">
          <div className="container">
            <p>© 2025 لبنان اليوم - جميع الحقوق محفوظة</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

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
        {/* 🌍 Header */}
        <header className="site-header">
          <div className="container header-content">
            <div className="logo-wrapper">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="لبنان اليوم"
                  className="logo-img"
                  width={160}
                  height={60}
                  priority
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="nav">
              <Link className="nav-link" href="/">الرئيسية</Link>
              <Link className="nav-link" href="/politics">سياسة</Link>
              <Link className="nav-link" href="/economy">اقتصاد</Link>
              <Link className="nav-link" href="/sports">رياضة</Link>
              <Link className="nav-link" href="/tech">تقنية</Link>
              <Link className="nav-link" href="/world">عالم</Link>
            </nav>

            {/* Clock */}
            <div className="clock-wrapper">
              <BeirutClock />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="main-content">{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container footer-content">
            <p>© {new Date().getFullYear()} لبنان اليوم - جميع الحقوق محفوظة</p>
            <nav className="footer-nav">
              <Link href="/about">من نحن</Link>
              <Link href="/contact">اتصل بنا</Link>
              <Link href="/privacy">سياسة الخصوصية</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}

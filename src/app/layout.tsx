import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/600.css";
import "@fontsource/noto-sans-kr/700.css";
import "./globals.css";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "고려다이나믹스 | 주차·영상관제 솔루션",
    template: "%s | 고려다이나믹스",
  },
  description:
    "고려다이나믹스 기업 홈페이지 초안. 주차관제, CCTV, LED, 소프트웨어 사업과 솔루션 구성 안내.",
  openGraph: {
    title: "고려다이나믹스",
    description: "효율적인 주차 운영을 위한 통합 관제 솔루션",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/company/og.png",
        width: 1200,
        height: 630,
        alt: "KORYO DYNAMICS",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main">
          본문 바로가기
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer>
          <div className="container">
            <div className="footer-top">
              <div className="footer-brand">
                고려다이나믹스<small>KORYO DYNAMICS</small>
              </div>
              <div className="footer-nav">
                {navigation.slice(1).map((n) => (
                  <Link href={n.href} key={n.href}>
                    {n.label}
                  </Link>
                ))}
              </div>
            </div>
            <p>
              {company.name} · 대표자 {company.representative}
            </p>
            <p>{company.address}</p>
            <div className="footer-bottom">
              <small>© {new Date().getFullYear()} KORYO DYNAMICS.</small>
              <small>기업정보 확인 전 초안 · 영문 표기 확정 예정</small>
              <a href="#main">맨 위로 ↑</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | 제이에스일렉트론',
    default: '제이에스일렉트론 | 커넥터 & 배터리 전문',
  },
  description: '커넥터, 소형 배터리, 산업용 SSR 전문. SinoTech, MUP, CELDUC, LithoTop, Amos 공식 취급. 전문가 1:1 기술 상담 및 견적 문의.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

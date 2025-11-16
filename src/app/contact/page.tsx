import type { Metadata } from 'next';
import ContactModule from '@/components/modules/ContactModule'; // 클라이언트 폼 컴포넌트 import

export const metadata: Metadata = {
  title: '문의하기',
  description: '커넥터·배터리·SSR 전문가 직통 상담: 010-2629-4760. 비교견적, 기술지원, 샘플 요청 환영. 간편 문의 접수 가능.',
};

export default function ContactPage() {
  const phoneNumber = "010-2629-4760";
  const telLink = `tel:${phoneNumber}`;

  return (
    <div>
      {/* 페이지 타이틀 - 파란색 배경 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          문의하기
        </h1>
        <p className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto">
          구매팀의 비교 견적부터 R&D팀의 기술/샘플 상담까지,
          부품 소재 전문가가 신속하고 정확하게 답변해 드립니다.
        </p>
      </section>

      {/* 1. 전화상담 (Primary CTA) - 흰색 배경 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
            가장 빠른 방법: 전화상담
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            지금 바로 전화주시면 전문가가 실시간으로 니즈를 파악하고 솔루션을 제안합니다.
          </p>
          <a
            href={telLink}
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg text-2xl font-bold shadow-lg transition-transform transform hover:scale-105"
          >
            📞 {phoneNumber}
          </a>
          <p className="text-gray-600 mt-6 text-lg">
            (상담 가능 시간: 평일 09:00 - 18:00)
          </p>
        </div>
      </section>

      {/* 2. 간편 문의 (Secondary CTA) - 연한 파란색 배경 */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-10 text-center tracking-tight">
            전화가 어려우신가요? 간편 문의를 남겨주세요.
          </h2>
          {/* ContactModule은 'use client'가 선언된 클라이언트 컴포넌트입니다. */}
          <ContactModule />
        </div>
      </section>
    </div>
  );
}

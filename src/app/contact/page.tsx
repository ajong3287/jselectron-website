import type { Metadata } from 'next';
import ContactModule from '@/components/modules/ContactModule'; // 클라이언트 폼 컴포넌트 import

export const metadata: Metadata = {
  title: '문의하기 | 제이에스일렉트론',
  description: '커넥터, 배터리, SSR 전문가에게 전화 또는 간편 문의로 상담을 요청하세요.',
};

export default function ContactPage() {
  // TODO: 대표 전화번호 확정 필요
  const phoneNumber = "010-XXXX-XXXX"; // (임시 전화번호)
  const telLink = `tel:${phoneNumber}`;

  return (
    <div className="space-y-16">
      {/* 페이지 타이틀 */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          문의하기
        </h1>
        <p className="text-lg text-gray-700">
          구매팀의 비교 견적부터 R&D팀의 기술/샘플 상담까지,
          <br />
          '부품 소재 공급 달인'이 신속하고 정확하게 답변해 드립니다.
        </p>
      </section>

      {/* 1. 전화상담 (Primary CTA) (AC 2) */}
      <section className="text-center bg-blue-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          가장 빠른 방법: 전화상담
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          지금 바로 전화주시면 전문가가 실시간으로 니즈를 파악하고 솔루션을 제안합니다.
        </p>
        <a
          href={telLink}
          className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-md text-2xl font-bold transition-transform transform hover:scale-105"
        >
          {phoneNumber}
        </a>
        <p className="text-gray-600 mt-4">
          (상담 가능 시간: 평일 09:00 - 18:00)
        </p>
      </section>

      {/* 2. 간편 문의 (Secondary CTA) (AC 3, 6) */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          전화가 어려우신가요? 간편 문의를 남겨주세요.
        </h2>
        {/* ContactModule은 'use client'가 선언된 클라이언트 컴포넌트입니다. */}
        <ContactModule />
      </section>
    </div>
  );
}

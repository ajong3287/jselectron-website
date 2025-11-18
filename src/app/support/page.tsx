import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/modules/FaqAccordion';

export const metadata: Metadata = {
  title: '고객 지원 (FAQ)',
  description: '자주 묻는 질문(FAQ)을 통해 견적, 샘플, 기술 지원에 대한 답변을 확인하세요.',
};

const commonFaqs = [
  {
    question: "샘플(Sample) 요청은 어떻게 하나요?",
    answer: "답변 준비 중입니다. 자세한 내용은 전문가 전화상담(010-2629-4760) 또는 '간편 문의'를 이용해주세요."
  },
  {
    question: "견적(Quote)을 받는 데 얼마나 걸리나요?",
    answer: "답변 준비 중입니다. 자세한 내용은 전문가 전화상담(010-2629-4760) 또는 '간편 문의'를 이용해주세요."
  },
  {
    question: "최소 주문 수량(MOQ)이 있나요?",
    answer: "답변 준비 중입니다. 자세한 내용은 전문가 전화상담(010-2629-4760) 또는 '간편 문의'를 이용해주세요."
  }
];

const connectorFaqs = [];
const batteryFaqs = [];
const ssrFaqs = [];

export default function SupportPage() {
  return (
    <div className="bg-white">
      {/* 페이지 타이틀 */}
      <section className="relative h-[400px] bg-dark-bg overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 via-dark-bg/50 to-dark-bg/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-shadow text-white">
            CUSTOMER CENTER
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 max-w-4xl">
            자주 묻는 질문을 통해 빠르게 답변을 찾아보세요.
            추가 문의는 전문가 전화상담 또는 간편 문의를 이용해주세요.
          </p>
        </div>
      </section>

      {/* 검색 섹션 */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="질문 검색 (예: 샘플, 견적, MOQ...)"
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue text-base"
            disabled
          />
          <p className="text-xs text-gray-500 mt-2 text-center">검색 기능 준비 중</p>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 tracking-tight">
            일반 문의
          </h2>
          <FaqAccordion items={commonFaqs} />
        </div>
      </section>
    </div>
  );
}

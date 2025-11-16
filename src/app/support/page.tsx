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
    <div>
      {/* 페이지 타이틀 - 파란색 배경 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          고객 지원 (FAQ)
        </h1>
        <p className="text-lg md:text-xl font-semibold max-w-4xl mx-auto">
          자주 묻는 질문을 통해 빠르게 답변을 찾아보세요.
          추가 문의는 전문가 전화상담(010-2629-4760) 또는 간편 문의를 이용해주세요.
        </p>
      </section>

      {/* 검색 섹션 - 흰색 배경 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="질문 검색 (예: 샘플, 견적, MOQ...)"
            className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
            disabled
          />
          <p className="text-sm text-gray-500 mt-3 text-center">검색 기능 준비 중</p>
        </div>
      </section>

      {/* FAQ 섹션 - 연한 파란색 배경 */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center tracking-tight">
            일반 문의
          </h2>
          <FaqAccordion items={commonFaqs} />
        </div>
      </section>

      {/* 추가 문의 CTA - 흰색 배경 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
            추가 문의가 필요하신가요?
          </h3>
          <p className="text-xl text-gray-700 mb-10">
            FAQ에서 원하는 답변을 찾지 못하셨나요?
            <br />
            전문가 전화상담 또는 간편 문의를 통해 도움을 받으세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-bold shadow-lg transition-all transform hover:scale-105"
            >
              전화상담 (대표 연결)
            </Link>
            <Link
              href="/contact"
              className="inline-block text-blue-700 bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg transition-all"
            >
              간편 문의 남기기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

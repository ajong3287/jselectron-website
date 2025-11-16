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
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          고객 지원 (FAQ)
        </h1>
        <p className="text-lg text-gray-700">
          자주 묻는 질문을 통해 빠르게 답변을 찾아보세요.
          <br />
          추가 문의는 전문가 전화상담(010-2629-4760) 또는 간편 문의를 이용해주세요.
        </p>
      </section>

      <section>
        <div className="mb-6">
          <input
            type="text"
            placeholder="질문 검색 (예: 샘플, 견적, MOQ...)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled
          />
          <p className="text-sm text-gray-500 mt-2">검색 기능 준비 중</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          일반 문의
        </h2>
        <FaqAccordion items={commonFaqs} />
      </section>

      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          추가 문의가 필요하신가요?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          FAQ에서 원하는 답변을 찾지 못하셨나요?
          <br />
          전문가 전화상담 또는 간편 문의를 통해 도움을 받으세요.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium"
          >
            전화상담 (대표 연결)
          </Link>
          <Link
            href="/contact"
            className="inline-block text-blue-700 bg-white border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium"
          >
            간편 문의 남기기
          </Link>
        </div>
      </section>
    </div>
  );
}

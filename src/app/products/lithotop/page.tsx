import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LithoTop 소형 배터리 | 제이에스일렉트론',
  description: 'LithoTop (리소탑)의 TWS, 웨어러블, 의료기기용 초소형 리튬 폴리머 배터리 팩 및 BMS 전문. 전문가와 상담하세요.',
};

// LithoTop 핵심 제품 카테고리 (PDF 카탈로그 기반)
const categories = [
  { name: 'TWS 오디오 배터리', description: '블루투스 이어폰 및 TWS 헤드셋용 초소형 리튬 폴리머 배터리' },
  { name: '스마트 웨어러블 배터리', description: '스마트워치, 스마트 밴드 등 착용형 기기를 위한 맞춤형 소형 배터리' },
  { name: '개인용/의료용 배터리', description: '전동 칫솔, 마사지기, 휴대용 의료기기용 리튬 이온 배터리 팩' },
  { name: '스마트홈 & IoT 배터리', description: '소형 IoT 센서 및 스마트홈 기기용 저전력, 고신뢰성 배터리' },
  { name: '맞춤형 배터리 팩 (PACK)', description: '18650 원통형 셀 또는 폴리머 셀 기반의 맞춤형 배터리 팩 설계' },
  { name: 'BMS (Battery Management)', description: '소형 배터리 팩의 안정적인 충/방전, 보호를 위한 맞춤형 BMS 회로' },
];

export default function LithoTopPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            LithoTop (리소탑)
          </h1>
          {/* 임시 로고 */}
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md">
             <span className="text-gray-400 italic">(LithoTop 로고)</span>
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
          LithoTop은 **초소형 리튬 폴리머 배터리** 및 **맞춤형 배터리 팩**에 특화된 전문 제조사입니다.
          <br />
          TWS(무선 이어폰), 스마트 웨어러블, 소형 의료기기 등 고성능 소형 배터리가 필요한 모든 분야에 최적화된 솔루션을 제공합니다.
        </p>
      </section>

      {/* 제품 카테고리 리스트 (AC 2) */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          주요 취급 제품군
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name}
                 className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
              </div>
              <div className="mt-4">
                <Link href="/contact"
                      className="text-blue-600 hover:text-blue-800 font-medium">
                  전문가 상담하기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 상담 유도 섹션 (AC 3) */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          LithoTop 배터리 관련 기술 상담
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          개발 중인 TWS, 웨어러블 기기에 적합한 초소형 맞춤 배터리가 필요하신가요?
          <br />
          지금 바로 '소형 배터리 전문가'에게 문의하세요.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/contact"
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium">
                전화상담 (대표 연결)
            </Link>
            <Link href="/contact"
                className="inline-block text-blue-700 bg-white border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium">
                간편 문의 남기기
            </Link>
        </div>
      </section>
    </div>
  );
}

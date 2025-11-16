import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CELDUC SSR & Sensors | 제이에스일렉트론',
  description: 'CELDUC (셀딕)의 고신뢰성 산업용 SSR(무접점 릴레이), 모터 컨트롤러, 마그네틱 센서 전문. 전문가와 상담하세요.',
};

// --- 큐레이션 (수정됨) ---
// 핵심 전문 분야 (Curation)
const coreCategories = [
  { name: '산업용 SSR (단상/다상)', description: 'okpac®, celpac®, sightpac® 시리즈. 정밀 히팅(플라스틱 사출, 식품 가공), 조명 제어용' },
  { name: '모터 제어 & 컨트롤러', description: '소프트 스타터(SMCV), 정/역 회전(SGR), 0-10V 위상 각 제어(SG4) 등 산업용 모터 제어' },
  { name: '마그네틱 센서 (ATEX/Safety)', description: '위치, 레벨, 속도 감지. ATEX(방폭) 및 Safety(안전) 인증 고신뢰성 센서' },
];

// 기타 취급 제품군
const otherCategories = [
  { name: 'DC SSR (직류 릴레이)', description: 'DC 모터, 밸브, LED 등 DC 부하 제어를 위한 MOSFET, IGBT 기반 릴레이' },
  { name: '특수 인증 릴레이', description: '철도(EN 50155) 및 의료기기(EN 60601-1) 표준 준수 고신뢰성 릴레이' },
];
// --- 큐레이션 종료 ---

export default function CelducPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            CELDUC (셀딕)
          </h1>
          {/* 임시 로고 */}
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md">
             <span className="text-gray-400 italic">(CELDUC 로고)</span>
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
          CELDUC은 프랑스에 본사를 둔 **산업용 SSR(무접점 릴레이)** 및 **마그네틱 센서** 분야의 글로벌 리더입니다.
          <br />
          플라스틱 사출, 공장 자동화, 철도, 의료 등 고신뢰성이 요구되는 산업 현장에 최적화된 제어 솔루션을 제공합니다.
        </p>
      </section>

      {/* --- 수정된 레이아웃 --- */}
      {/* 핵심 전문 분야 리스트 (AC 2) */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          핵심 전문 분야
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCategories.map((category) => (
            <div key={category.name}
                 className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {category.description}
                </p>
              </div>
              <div className="mt-4">
                <Link href="/contact"
                      className="font-medium text-blue-600 hover:text-blue-800">
                  전문가 상담하기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 기타 취급 제품군 리스트 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          기타 취급 제품군
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherCategories.map((category) => (
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
      {/* --- 수정된 레이아웃 종료 --- */}

      {/* 상담 유도 섹션 (AC 3) */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          CELDUC 제품 관련 기술 상담
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          산업용 히터의 정밀 온도 제어, 3상 모터의 소프트 스타트,
          <br />
          또는 ATEX 방폭 지역용 센서에 대한 기술 지원, 샘플, 견적이 필요하신가요?
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

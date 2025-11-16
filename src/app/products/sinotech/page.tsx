import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SinoTech 커넥터',
  description: 'SinoTech 통신 커넥터 전문: RJ45, SFP, USB-C, HDMI, D-SUB, RF 커넥터. 견적 및 기술 상담 가능.',
};

// --- 큐레이션 (수정됨) ---
// 핵심 전문 분야 (Curation)
const coreCategories = [
  { name: '통신 및 광통신 (Telecom & Fiber Optics)', description: 'RJ45, SFP, QSFP 등 고속 통신망 및 데이터 센터용 커넥터' },
  { name: '산업용 및 RF (Industrial & RF)', description: 'D-SUB, 원형 커넥터, UFL/SMA 등 산업/IoT/무선 모듈용 커넥터' },
  { name: 'PC & 디스플레이 I/O', description: 'USB-C, HDMI, Display Port 등 최신 PC/가전 인터페이스' },
];

// 기타 취급 제품군
const otherCategories = [
  { name: '카드 커넥터', description: 'SATA, FFC/FPC, PCI Express/MINI PCI 커넥터' },
  { name: '범용 커넥터', description: '핀 헤더, 암 헤더, 배터리 커넥터' },
  { name: '기타 통신 부품', description: 'IDC 터미널 블록, Telecom 모듈, 분배 박스' },
];
// --- 큐레이션 종료 ---

export default function SinoTechPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            SinoTech (시노텍)
          </h1>
          {/* 임시 로고 */}
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md">
             <span className="text-gray-400 italic">(SinoTech 로고)</span>
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
          SinoTech는 **통신, 네트워크, PC/범용 커넥터** 전반을 다루는 전문 제조사입니다.
          <br />
          제이에스일렉트론은 SinoTech와의 유연하고 신속한 기술 지원을 바탕으로 고객사의 모든 커넥터 니즈에 대응합니다.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          SinoTech 제품 관련 기술 상담
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          SinoTech의 광범위한 커넥터 라인업에 대한 기술 지원, 샘플, 견적이 필요하신가요?
          <br />
          지금 바로 '커넥터 전문가'에게 문의하세요.
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

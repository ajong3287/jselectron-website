import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SinoTech 커넥터 | 제이에스일렉트론',
  description: 'SinoTech (시노텍)의 통신, 네트워크, PC, 범용 커넥터 전문 공급. 전문가와 상담하세요.',
};

// SinoTech 핵심 제품 카테고리 (웹 서치 기반)
const categories = [
  { name: '통신/네트워크 (RJ45, RJ11)', description: 'Transformer Jacks, SMT 타입 등 다양한 PCB Modular Jacks & Plugs' },
  { name: '광통신 (Fiber Optics)', description: 'SFP, SFP+, QSFP, SFP28 케이지 및 어댑터, 패치 코드' },
  { name: 'RF 커넥터', description: 'UFL(USS), SMP, SMA, SMB 동축 커넥터 및 케이블 어셈블리' },
  { name: 'PC/모바일 I/O', description: 'USB Type C, Micro/Mini USB, HDMI, Display Port (DP)' },
  { name: '카드 커넥터', description: 'SATA, FFC/FPC, PCI Express/MINI PCI 커넥터' },
  { name: '범용/산업용', description: '핀 헤더, 배터리 커넥터, D-SUB, 원형 커넥터, DC 파워 잭' },
  { name: '기타 통신 부품', description: 'IDC 터미널 블록, Telecom 모듈, 분배 박스' },
];

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

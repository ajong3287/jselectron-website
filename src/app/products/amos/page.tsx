import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Amos (아모스) 핀 헤더/IC소켓 | 제이에스일렉트론',
  description: 'Amos (아모스)의 핀 헤더, 암 헤더, IC 소켓, PLCC 소켓 등 PCB 표준 커넥터 전문. 전문가와 상담하세요.',
};

const coreCategories = [
  {
    name: '핀 헤더 (Pin Header)',
    description: '0.8mm~2.54mm Pitch. SMT, DIP, R/A (ㄱ자) 타입 등 모든 표준 규격',
    image: '/products/amos-pin-header.jpg'
  },
  {
    name: '암 헤더 (Female Header)',
    description: '0.8mm~2.54mm Pitch. 핀 헤더와 세트가 되는 모든 표준 규격의 소켓',
    image: '/products/amos-female-header.jpg'
  },
  {
    name: 'IC 소켓 (IC Socket)',
    description: 'DIP IC 소켓, PLCC 소켓, PGA 소켓 등 반도체 칩 실장용 정밀 소켓',
    image: '/products/amos-ic-socket.jpg'
  },
];

const otherCategories = [
  { name: '박스 헤더 (Box Header)', description: 'Ejector Header 포함, IDC 케이블 연결용 표준 박스 헤더' },
  { name: '보드-투-보드 (BTB)', description: 'PCB 기판 간의 직접 연결을 위한 다양한 Pitch의 BTB 커넥터' },
  { name: '기타 커넥터', description: 'FPC/FFC, D-SUB, 와이어 하네스 등 맞춤형 솔루션' },
];

export default function AmosPage() {
  return (
    <div>
      {/* 페이지 타이틀 - 파란색 배경 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-32 h-16 flex items-center justify-center bg-white rounded-md p-2 relative">
              <Image src="/logos/amos.png" alt="Amos 로고" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Amos (아모스)
          </h1>
          <p className="text-lg md:text-xl font-semibold max-w-4xl mx-auto">
            핀 헤더(Pin Header), 암 헤더(Female Header), IC 소켓 등
            PCB(인쇄 회로 기판) 실장에 필수적인 표준 커넥터 전문 제조사입니다.
            임베디드 보드, 제어기기, SMT/EMS 공정에 필요한 모든 규격의 부품을 공급합니다.
          </p>
        </div>
      </section>

      {/* 핵심 전문 분야 - 흰색 배경 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center tracking-tight">
            핵심 전문 분야
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCategories.map((category) => (
              <div key={category.name}
                   className="p-6 bg-white border-2 border-blue-100 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all">
                <div className="relative w-full h-40 mb-4 bg-white rounded-md overflow-hidden border border-gray-200">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-base font-semibold text-gray-800 bg-white bg-opacity-70">
                    ({category.name} 이미지 필요)
                  </div>
                </div>

                <h3 className="text-lg font-black text-blue-600 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Link href="/contact"
                      className="inline-block font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  전문가 상담하기 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기타 취급 제품군 - 연한 파란색 배경 */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center tracking-tight">
            기타 취급 제품군
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((category) => (
              <div key={category.name}
                   className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all">
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Link href="/contact"
                      className="inline-block font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  전문가 상담하기 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 유도 섹션 - 흰색 배경 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
            Amos 제품 관련 기술 상담
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            PCB 실장용 표준 커넥터의 기술 지원, 샘플, 견적이 필요하신가요?
            <br />
            지금 바로 전문가에게 문의하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact"
                  className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-base font-bold shadow-lg transition-all transform hover:scale-105">
              전화상담 (대표 연결)
            </Link>
            <Link href="/contact"
                  className="inline-block text-blue-700 bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-base font-bold shadow-lg transition-all">
              간편 문의 남기기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

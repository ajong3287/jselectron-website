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
    <div className="bg-white">
      {/* 페이지 타이틀 */}
      <section className="relative h-[300px] bg-dark-bg overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 via-dark-bg/50 to-dark-bg/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="w-32 h-16 flex items-center justify-center bg-white rounded-md p-2 mb-4 relative">
            <Image src="/logos/amos.png" alt="Amos 로고" fill style={{ objectFit: 'contain' }} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight text-shadow text-white">
            Amos (아모스)
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-200 max-w-3xl">
            PCB 표준 커넥터 및 핀 헤더 전문 제조사
          </p>
        </div>
      </section>

      {/* 핵심 전문 분야 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10 text-center tracking-tight">
            핵심 전문 분야
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCategories.map((category) => (
              <div key={category.name}
                   className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-primary-blue transition-all">
                <div className="relative w-full h-32 mb-3 bg-gray-50 rounded overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-700 bg-white bg-opacity-70">
                    ({category.name} 이미지 필요)
                  </div>
                </div>

                <h3 className="text-base font-bold text-primary-blue mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기타 취급 제품군 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10 text-center tracking-tight">
            기타 취급 제품군
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherCategories.map((category) => (
              <div key={category.name}
                   className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 다른 제조사 바로가기 */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-8 text-center tracking-tight">
            다른 제조사 제품 보기
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'SinoTech', url: '/products/sinotech', logo: '/logos/sinotech.png' },
              { name: 'MUP', url: '/products/mup', logo: '/logos/mup.png' },
              { name: 'CELDUC', url: '/products/celduc', logo: '/logos/celduc.png' },
              { name: 'LithoTop', url: '/products/lithotop', logo: '/logos/lithotop.png' },
              { name: 'Amos', url: '/products/amos', logo: '/logos/amos.png' },
            ].map((m) => (
              <Link
                key={m.name}
                href={m.url}
                className={`w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 transition-all
                  ${m.name === 'Amos'
                    ? 'border-primary-blue opacity-50 cursor-default'
                    : 'border-gray-200 hover:border-primary-blue hover:shadow-md'}`}
              >
                <div className="relative w-24 h-12">
                  <Image src={m.logo} alt={`${m.name} 로고`} fill style={{ objectFit: 'contain' }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="relative bg-dark-bg py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-accent-blue/5 to-primary-blue/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-5 tracking-tight text-shadow">
            Amos 제품 문의
          </h3>
          <p className="text-base md:text-lg font-medium text-gray-400 mb-8">
            커넥터 전문가가 최적의 솔루션을 찾아드립니다
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:01026294760"
                className="inline-flex items-center justify-center text-white bg-gradient-to-r from-primary-blue to-accent-blue hover:shadow-accent-blue/50 px-8 py-3 rounded-xl text-base font-bold shadow-2xl transition-all transform hover:scale-105 glow-blue">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화상담 (010-2629-4760)
            </a>
            <Link href="/contact"
                className="inline-flex items-center justify-center text-white bg-dark-section border-2 border-accent-blue hover:bg-accent-blue/10 px-8 py-3 rounded-xl text-base font-bold shadow-lg transition-all backdrop-blur-sm">
                간편 문의 남기기
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

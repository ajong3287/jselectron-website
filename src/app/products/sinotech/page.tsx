import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SinoTech (시노텍) 커넥터 | 제이에스일렉트론',
  description: 'SinoTech 통신/네트워크 커넥터 전문. RJ45, SFP 케이지, 광통신, RF 커넥터. 전문가 기술 상담 및 견적 문의.',
};

const coreCategories = [
  {
    name: '통신 및 광통신 (Telecom & Fiber Optics)',
    description: 'RJ45, SFP, QSFP 등 고속 통신망 및 데이터 센터용 커넥터',
    image: '/products/sinotech-rj45.jpg',
  },
  {
    name: '산업용 및 RF (Industrial & RF)',
    description: 'D-SUB, 원형 커넥터, UFL/SMA 등 산업/IoT/무선 모듈용 커넥터',
    image: '/products/sinotech-rf.jpg',
  },
  {
    name: 'PC & 디스플레이 I/O',
    description: 'USB-C, HDMI, Display Port 등 최신 PC/가전 인터페이스',
    image: '/products/sinotech-usbc.jpg',
  },
];

const otherCategories = [
  { name: '카드 커넥터', description: 'SATA, FFC/FPC, PCI Express/MINI PCI 커넥터' },
  { name: '범용 커넥터', description: '핀 헤더, 암 헤더, 배터리 커넥터' },
  { name: '기타 통신 부품', description: 'IDC 터미널 블록, Telecom 모듈, 분배 박스' },
];

export default function SinoTechPage() {
  return (
    <div className="bg-white">
      {/* 페이지 타이틀 */}
      <section className="relative h-[300px] bg-dark-bg overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 via-dark-bg/50 to-dark-bg/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="w-32 h-16 flex items-center justify-center bg-white rounded-md p-2 mb-4 relative">
            <Image src="/logos/sinotech.png" alt="SinoTech 로고" fill style={{ objectFit: 'contain' }} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight text-shadow text-white">
            SinoTech (시노텍)
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-200 max-w-3xl">
            통신, 네트워크, PC/범용 커넥터 전반을 다루는 전문 제조사
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

      {/* 기타 전문 분야 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10 text-center tracking-tight">
            기타 전문 분야
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
                  ${m.name === 'SinoTech'
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
            SinoTech 제품 문의
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

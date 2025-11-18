import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '제품 소개',
  description: 'SinoTech 커넥터, MUP 카드소켓, CELDUC SSR, LithoTop 배터리, Amos 핀헤더 전문 공급. 기술 상담 및 견적 문의 가능.',
};

const manufacturers = [
  { name: 'SinoTech', specialty: '통신/네트워크/범용 커넥터', url: '/products/sinotech', logo: '/logos/sinotech.png' },
  { name: 'MUP', specialty: 'IC/SIM/메모리 카드 커넥터', url: '/products/mup', logo: '/logos/mup.png' },
  { name: 'CELDUC', specialty: '산업용 SSR (무접점 릴레이)', url: '/products/celduc', logo: '/logos/celduc.png' },
  { name: 'LithoTop', specialty: '소형 리튬 폴리머 배터리', url: '/products/lithotop', logo: '/logos/lithotop.png' },
  { name: 'Amos', specialty: '핀 헤더 및 IC 소켓 (PCB 표준)', url: '/products/amos', logo: '/logos/amos.png' },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Page title section */}
      <section className="relative h-[400px] bg-dark-bg overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 via-dark-bg/50 to-dark-bg/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-shadow text-white">
            PRODUCTS
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 max-w-4xl">
            제이에스일렉트론은 커넥터 전문가이자 소형 배터리 전문가로서,
            엄선된 5대 핵심 제조사의 제품을 통해 고객의 모든 니즈에 대응합니다.
          </p>
        </div>
      </section>

      {/* 5 Manufacturers grid */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center tracking-tight">
          핵심 제조사별 제품군
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {manufacturers.map((m) => (
            <Link key={m.name} href={m.url}
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm
                             hover:shadow-lg hover:border-primary-blue transition-all duration-300">
              <div className="h-24 mb-4 flex items-center justify-center bg-gray-50 rounded p-3 relative">
                <Image
                  src={m.logo}
                  alt={`${m.name} 로고`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                {m.name}
              </h3>
              <p className="text-sm text-gray-600">
                {m.specialty}
              </p>
            </Link>
          ))}
        </div>
      </section>

       {/* CTA section */}
      <section className="relative bg-dark-bg py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-accent-blue/5 to-primary-blue/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight text-shadow">
            부품 소재 전문가의 맞춤 솔루션
          </h3>
          <p className="text-lg md:text-xl font-medium text-gray-400 mb-10">
            찾으시는 제품이 없거나, 어떤 부품이 적합할지 확신이 서지 않으시나요?
            <br />
            지금 바로 커넥터 전문가에게 전화로 문의하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:01026294760"
                className="inline-flex items-center justify-center text-white bg-gradient-to-r from-primary-blue to-accent-blue hover:shadow-accent-blue/50 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl transition-all transform hover:scale-105 glow-blue">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화상담 (010-2629-4760)
            </a>
            <Link href="/contact"
                className="inline-flex items-center justify-center text-white bg-dark-section border-2 border-accent-blue hover:bg-accent-blue/10 px-10 py-4 rounded-xl text-lg font-bold shadow-lg transition-all backdrop-blur-sm">
                간편 문의 남기기
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

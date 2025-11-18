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
    <div className="bg-dark-bg">
      {/* Page title section - Dark gradient */}
      <section className="bg-gradient-to-r from-dark-section to-gradient-start text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-shadow">
          제품 소개
        </h1>
        <p className="text-lg md:text-xl font-semibold max-w-4xl mx-auto text-gray-300">
          제이에스일렉트론은 커넥터 전문가이자 소형 배터리 전문가로서,
          엄선된 5대 핵심 제조사의 제품을 통해 고객의 모든 니즈에 대응합니다.
        </p>
      </section>

      {/* 5 Manufacturers grid - Dark section */}
      <section className="bg-dark-section py-16 px-6">
        <h2 className="text-3xl font-black text-white mb-10 text-center tracking-tight">
          핵심 제조사별 제품군
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {manufacturers.map((m) => (
            <Link key={m.name} href={m.url}
                  className="block p-8 bg-dark-bg border-2 border-gray-700 rounded-xl shadow-lg
                             hover:shadow-accent-blue/30 hover:border-accent-blue transition-all duration-300 transform hover:scale-105">
              <div className="h-20 mb-4 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-md p-2 relative">
                <Image
                  src={m.logo}
                  alt={`${m.name} 로고`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">
                {m.name}
              </h3>
              <p className="text-base font-semibold text-gray-400">
                {m.specialty}
              </p>
            </Link>
          ))}
        </div>
      </section>

       {/* CTA section - Gradient accent */}
      <section className="text-center bg-gradient-to-r from-gradient-start to-dark-section py-16 px-6">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight text-shadow">
          부품 소재 전문가의 맞춤 솔루션
        </h3>
        <p className="text-lg md:text-xl font-semibold text-gray-300 mb-10 max-w-3xl mx-auto">
          찾으시는 제품이 없거나, 어떤 부품이 적합할지 확신이 서지 않으시나요?
          <br />
          지금 바로 커넥터 전문가에게 전화로 문의하세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact"
                className="inline-block text-white bg-primary-blue hover:bg-accent-blue px-8 py-3 rounded-lg text-lg font-bold shadow-lg transition-all transform hover:scale-105 glow-blue">
                전화상담 (대표 연결)
            </Link>
            <Link href="/contact"
                className="inline-block text-white bg-transparent border-2 border-accent-blue hover:bg-accent-blue/20 px-8 py-3 rounded-lg text-lg font-bold shadow-lg transition-all">
                간편 문의 남기기
            </Link>
        </div>
      </section>
    </div>
  );
}

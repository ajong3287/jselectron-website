import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '회사 소개',
  description: '커넥터 & 배터리 전문 제이에스일렉트론. CEO 박동주의 정직한 기술 파트너십, SinoTech·MUP·CELDUC·LithoTop·Amos 공식 취급. 견적 상담 환영.',
};

const partners = [
  { name: 'SinoTech', specialty: '통신/네트워크/범용 커넥터', url: '/products/sinotech', logo: '/logos/sinotech.png' },
  { name: 'MUP', specialty: 'IC/SIM/메모리 카드 커넥터', url: '/products/mup', logo: '/logos/mup.png' },
  { name: 'CELDUC', specialty: '산업용 SSR (무접점 릴레이)', url: '/products/celduc', logo: '/logos/celduc.png' },
  { name: 'LithoTop', specialty: '소형 리튬 폴리머 배터리', url: '/products/lithotop', logo: '/logos/lithotop.png' },
  { name: 'Amos', specialty: '핀 헤더 및 IC 소켓 (PCB 표준)', url: '/products/amos', logo: '/logos/amos.png' },
];

export default function AboutPage() {
  return (
    <div>
      {/* 페이지 타이틀 - 파란색 배경 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          회사 소개
        </h1>
        <p className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto">
          제이에스일렉트론은 단순한 부품 공급을 넘어, 고객의 성공적인 비즈니스를 위한
          신뢰할 수 있는 기술 파트너입니다.
        </p>
      </section>

      {/* CEO 메시지 섹션 (AC 2) - 흰색 배경 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-10 text-center tracking-tight">
            CEO 메시지
          </h2>
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <p className="font-bold text-2xl text-blue-600 text-center mb-8">
            "커넥터와 소형 배터리 분야의 전문가로서,<br />
            고객의 어떤 니즈에도 확실한 솔루션을 제공합니다."
          </p>
          <p>
            안녕하십니까, 제이에스일렉트론 대표 박동주입니다.
          </p>
          <p>
            저는 수년간의 기술 영업 경험을 통해, B2B 시장에서 가장 중요한 것은 '신뢰'와 '전문성'임을 깨달았습니다.
            저희는 화려한 포장 대신, '정직한 제품'과 '안정적인 공급', 그리고 '신속한 기술 지원'이라는 기본에 집중합니다.
          </p>
          <p>
            제이에스일렉트론은 잡상인이 아닙니다.
            대표인 제가 직접 '커넥터 전문가'이자 '유통 전문가'로서 고객사의 R&D 단계부터 양산까지 모든 과정을 함께 고민하고,
            SinoTech, MUP, CELDUC, LithoTop, Amos 등 엄선된 파트너사들과의 유연한 협력을 통해 최적의 솔루션을 찾아 드립니다.
          </p>
          <p className="text-center font-semibold text-xl text-gray-900">
            믿고 상담해주십시오. 득이 되는 파트너가 될 것을 약속드립니다.
          </p>
        </div>
        </div>
      </section>

      {/* 비전 및 핵심 가치 섹션 (AC 3) - 연한 파란색 배경 */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-10 text-center tracking-tight">
            핵심 가치
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
          {/* 가치 1: 정직함 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-500 transition-all">
            <h3 className="font-black text-2xl mb-4 text-blue-600">정직 (Honesty)</h3>
            <p className="text-gray-700 leading-relaxed">
              과장된 약속 대신, 투명한 정보와 실현 가능한 납기를 약속합니다.
              모든 비즈니스는 정직함에서 시작됩니다.
            </p>
          </div>
          {/* 가치 2: 품질 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-500 transition-all">
            <h3 className="font-black text-2xl mb-4 text-blue-600">품질 (Quality)</h3>
            <p className="text-gray-700 leading-relaxed">
              불량 제로화를 목표로, 검증된 5대 핵심 제조사의 제품만을 고집합니다.
              품질은 타협의 대상이 아닙니다.
            </p>
          </div>
          {/* 가치 3: 안정적 공급 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-500 transition-all">
            <h3 className="font-black text-2xl mb-4 text-blue-600">안정적 공급 (Stability)</h3>
            <p className="text-gray-700 leading-relaxed">
              고객의 생산 일정에 차질이 없도록, 안정적인 부품 공급망을 확보하고
              신속하게 대응합니다.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* 핵심 파트너사 섹션 - 흰색 배경 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-6 text-center tracking-tight">
            핵심 파트너사
          </h2>
          <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            제이에스일렉트론은 다음 5대 핵심 제조사의 공식 파트너로서,
            검증된 제품의 안정적인 한국 공급이 가능합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Link key={partner.name} href={partner.url}
                    className="block p-8 bg-white border-2 border-gray-200 rounded-xl shadow-lg
                               hover:shadow-2xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                <div className="h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-md p-2 relative">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} 로고`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
                  {partner.name}
                </h3>
                <p className="text-lg font-semibold text-gray-700">
                  {partner.specialty}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 역량 암시 - 연한 파란색 배경 */}
      <section className="text-center bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            찾으시는 부품이 없으신가요?
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-10">
            제이에스일렉트론은 5대 파트너사 외에도 수많은 커넥터 및 부품 소재 공급망을 확보하고 있습니다.
            <br />
            부품 소재 전문가가 대표님의 니즈에 맞는 최적의 솔루션을 찾아 드립니다.
          </p>
          <Link href="/contact"
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg text-xl font-bold shadow-lg transition-all transform hover:scale-105">
            전문가에게 지금 바로 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '회사 소개 | 제이에스일렉트론',
  description: '제이에스일렉트론의 경영 철학과 전문성을 소개합니다.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          회사 소개
        </h1>
        <p className="text-lg text-gray-700">
          제이에스일렉트론은 단순한 부품 공급을 넘어, 고객의 성공적인 비즈니스를 위한
          '신뢰할 수 있는 기술 파트너'입니다.
        </p>
      </section>

      {/* CEO 메시지 섹션 (AC 2) */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
          CEO 메시지
        </h2>
        <div className="space-y-4 text-gray-800">
          <p className="font-semibold text-lg">
            "커넥터와 소형 배터리 분야의 '부품 소재 공급 달인'으로서,
            <br />
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
          <p>
            믿고 상담해주십시오. 득이 되는 파트너가 될 것을 약속드립니다.
          </p>
        </div>
      </section>

      {/* 비전 및 핵심 가치 섹션 (AC 3) */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
          핵심 가치 (Core Values)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* 가치 1: 정직함 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">정직 (Honesty)</h3>
            <p className="text-gray-700">
              과장된 약속 대신, 투명한 정보와 실현 가능한 납기를 약속합니다.
              모든 비즈니스는 정직함에서 시작됩니다.
            </p>
          </div>
          {/* 가치 2: 품질 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">품질 (Quality)</h3>
            <p className="text-gray-700">
              불량 제로화를 목표로, 검증된 5대 핵심 제조사의 제품만을 고집합니다.
              품질은 타협의 대상이 아닙니다.
            </p>
          </div>
          {/* 가치 3: 안정적 공급 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">안정 (Stability)</h3>
            <p className="text-gray-700">
              고객의 생산 일정에 차질이 없도록, 안정적인 부품 공급망을 확보하고
              신속하게 대응합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 파트너사 섹션 (Story 1.3 / AC 2) */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
          핵심 파트너사
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          제이에스일렉트론은 다음 5대 핵심 제조사의 공식 파트너로서,
          검증된 제품의 안정적인 한국 공급이 가능합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 임시 파트너 데이터. TODO: Story 2.1/2.2에서 링크 연결 */}
          {[
            { name: 'SinoTech', specialty: '통신/네트워크/범용 커넥터', url: '/products/sinotech' },
            { name: 'MUP', specialty: 'IC/SIM/메모리 카드 커넥터', url: '/products/mup' },
            { name: 'CELDUC', specialty: '산업용 SSR (무접점 릴레이)', url: '/products/celduc' },
            { name: 'LithoTop', specialty: '소형 리튬 폴리머 배터리', url: '/products/lithotop' },
            { name: 'Amos', specialty: '핀 헤더 및 IC 소켓 (PCB 표준)', url: '/products/amos' },
          ].map((partner) => (
            <Link key={partner.name} href={partner.url}
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md
                             hover:shadow-lg hover:border-blue-500 transition-all duration-300">
              <div className="h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-md">
                <span className="text-gray-400 italic">({partner.name} 로고 영역)</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600">
                {partner.specialty}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 추가 역량 암시 (Story 1.3 / AC 3) */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          찾으시는 부품이 없으신가요?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          제이에스일렉트론은 5대 파트너사 외에도 수많은 커넥터 및 부품 소재 공급망을 확보하고 있습니다.
          <br />
          '부품 공급 달인'이 대표님의 니즈에 맞는 최적의 솔루션을 찾아 드립니다.
        </p>
        <Link href="/contact"
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium">
          전문가에게 지금 바로 문의하기
        </Link>
      </section>
    </div>
  );
}

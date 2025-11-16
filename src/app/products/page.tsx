import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제품 소개',
  description: 'SinoTech 커넥터, MUP 카드소켓, CELDUC SSR, LithoTop 배터리, Amos 핀헤더 전문 공급. 기술 상담 및 견적 문의 가능.',
};

// 5대 핵심 파트너 및 전문 분야 데이터 (PRD 5.0, Arch 6.0 기반)
const manufacturers = [
  {
    name: 'SinoTech',
    specialty: '통신/네트워크/범용 커넥터',
    url: '/products/sinotech',
    logo: '/logos/sinotech-logo-placeholder.png', // (임시 경로)
  },
  {
    name: 'MUP',
    specialty: 'IC/SIM/메모리 카드 커넥터',
    url: '/products/mup',
    logo: '/logos/mup-logo-placeholder.png', // (임시 경로)
  },
  {
    name: 'CELDUC',
    specialty: '산업용 SSR (무접점 릴레이)',
    url: '/products/celduc',
    logo: '/logos/celduc-logo-placeholder.png', // (임시 경로)
  },
  {
    name: 'LithoTop',
    specialty: '소형 리튬 폴리머 배터리',
    url: '/products/lithotop',
    logo: '/logos/lithotop-logo-placeholder.png', // (임시 경로)
  },
  {
    name: 'Amos',
    specialty: '핀 헤더 및 IC 소켓 (PCB 표준)',
    url: '/products/amos',
    logo: '/logos/amos-logo-placeholder.png', // (임시 경로)
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 (AC 3) */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          제품 소개
        </h1>
        <p className="text-lg text-gray-700">
          제이에스일렉트론은 **커넥터 전문가**이자 **소형 배터리 전문가**로서,
          <br />
          엄선된 5대 핵심 제조사의 제품을 통해 고객의 모든 니즈에 대응합니다.
        </p>
      </section>

      {/* 5대 제조사 그리드 (AC 2) - 동등한 비중 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          핵심 제조사별 제품군
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturers.map((m) => (
            <Link key={m.name} href={m.url}
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md
                             hover:shadow-lg hover:border-blue-500 transition-all duration-300">
              <div className="h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-md">
                {/* 임시 로고 텍스트.
                    TODO: /public/logos/ 폴더에 실제 이미지 파일 추가 필요.
                */}
                <span className="text-gray-400 italic">({m.name} 로고 영역)</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {m.name}
              </h3>
              <p className="text-gray-600">
                {m.specialty}
              </p>
            </Link>
          ))}
        </div>
      </section>

       {/* 상담 유도 섹션 (AC 3) */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          '부품 소재 공급 달인'의 맞춤 솔루션
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          찾으시는 제품이 없거나, 어떤 부품이 적합할지 확신이 서지 않으시나요?
          <br />
          지금 바로 '커넥터 전문가'에게 전화로 문의하세요.
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

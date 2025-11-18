import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '회사 소개',
  description: '커넥터 & 배터리 전문 제이에스일렉트론. CEO 박동주의 정직한 기술 파트너십, SinoTech·MUP·CELDUC·LithoTop·Amos 공식 취급. 견적 상담 환영.',
};

export default function AboutPage() {
  return (
    <div className="bg-dark-bg">
      {/* 페이지 타이틀 */}
      <section className="relative h-[500px] bg-dark-bg overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 via-dark-bg/50 to-dark-bg/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-shadow text-white">
            COMPANY
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200">
            Global leader in the supply of electronic parts
          </p>
        </div>
      </section>

      {/* CEO 메시지 섹션 */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 tracking-tight">
            CEO Message
          </h2>

          <div className="grid md:grid-cols-[300px_1fr] gap-0">
            {/* 왼쪽: 파란색 박스 */}
            <div className="bg-primary-blue p-6 h-80 flex items-center">
              <div className="space-y-3 text-white text-xs leading-relaxed">
                <p>고객의 소중함을 아는 회사,</p>
                <p>새로운 사고와 철저한 프로정신으로,</p>
                <p>브랜드 파워를 강화하기 위한,</p>
                <p className="font-bold text-sm pt-2">
                  전자부품 전문유통기업<br />
                  제이에스일렉트론
                </p>
              </div>
            </div>

            {/* 오른쪽: 비즈니스 이미지 (호버 확대) */}
            <div className="h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
                alt="Business"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* 하단 텍스트 (오른쪽 배치, 왼쪽 정렬) */}
          <div className="mt-8 ml-auto max-w-2xl space-y-4 text-gray-700 text-sm leading-relaxed">
            <p className="font-bold">
              안녕하십니까.
            </p>
            <p>
              제이에스일렉트론 홈페이지를 방문해 주셔서 감사합니다.
            </p>
            <p>
              저희는 전자부품 유통 전문 회사입니다.
            </p>
            <p>
              전세계 유수의 전자부품 생산업체들의 우수한 품질과 가격경쟁력 있는 제품들을 국내외 고객사들에게 소개해 드리고
              고객사의 요청에 최대한 부합하는 가격, 납기, 거래조건 등으로 대응해 드리는 것을 최고의 사명으로 여기고 있습니다.
            </p>
            <p>
              항상 고객사의 경쟁력(품질, 가격, 납기 등)에 일조를 할 수 있는 협력사로서의 사명을 잊지 않고
              저희들이 맡은 분야에서만큼은 고객사에 최고의 만족을 드릴 수 있도록 노력하고 정진하겠습니다.
            </p>
            <p>
              어디서든 언제든 어떻게든 저희들이 맡은 분야 이상에서 저희들을 필요로 하시는 고객사들의 손과 발이 되겠습니다.
            </p>
            <p className="pt-2">
              감사합니다.
            </p>
            <p className="text-right text-gray-500 text-xs">
              JS Electron Co., Ltd. CEO
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="relative bg-dark-bg py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-accent-blue/5 to-primary-blue/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight text-shadow">
            지금 바로 전문가와 상담하세요
          </h3>
          <p className="text-lg md:text-xl font-medium text-gray-400 mb-10">
            최적의 부품 솔루션을 찾아드립니다
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

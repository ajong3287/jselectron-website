import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MUP 커넥터 | 제이에스일렉트론',
  description: 'MUP (엠유피)의 IC/SIM/메모리 카드 커넥터, BTB, FPC, RF 등 정밀 커넥터 전문. 전문가와 상담하세요.',
};

// MUP 핵심 제품 카테고리 (PDF 카탈로그 기반)
const categories = [
  { name: 'IC 카드 커넥터', description: '결제 단말기(POS), ATM, 도어락용 고내구성/방수 IC 카드 소켓 (Blade/Sealed SW)' },
  { name: 'SIM 카드 커넥터', description: 'MINI, MICRO, NANO SIM 소켓 (Push-Pull, Hinge, Push-Push 타입)' },
  { name: '메모리 카드 커넥터', description: 'TF(MicroSD), SD 카드 소켓 (Push-Pull, Push-Push, 콤보 타입)' },
  { name: 'BTB (Board-to-Board)', description: '0.35mm, 0.4mm 초정밀 피치, 모바일/배터리/고전류 BTB 커넥터' },
  { name: 'FPC / FFC 커넥터', description: '0.3mm, 0.5mm 피치, 모바일 및 디스플레이용 초정밀 연성회로기판 커넥터' },
  { name: 'RF 커넥터 및 안테나', description: 'RF 테스트 소켓(I~V세대), 동축 커넥터, 안테나 스프링, 동축선 클립' },
  { name: '모바일 I/O', description: 'USB Type C, MICRO USB, MINI USB, HDMI & DP 포트' },
  { name: '범용 커넥터', description: '핀 헤더, 암 헤더 (Pin/Female Header), PCMCIA 커넥터' },
];

export default function MupPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            MUP (엠유피)
          </h1>
          {/* 임시 로고 */}
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md">
             <span className="text-gray-400 italic">(MUP 로고)</span>
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
          MUP는 **IC/SIM/메모리 카드 커넥터** 및 **모바일용 정밀 부품(BTB/FPC/RF)**에 특화된 전문 제조사입니다.
          <br />
          POS 단말기, IoT 모듈, 웨어러블 기기 등 소형/정밀 기기에 필요한 최적의 솔루션을 제안합니다.
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
          MUP 제품 관련 기술 상담
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          IC 카드 리더기, IoT 모듈 개발에 필요한 정밀 커넥터의 기술 지원, 샘플, 견적이 필요하신가요?
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

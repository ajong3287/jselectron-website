import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'MUP 커넥터',
  description: 'MUP IC카드·SIM·메모리카드 소켓 전문. NANO SIM, TF, SD카드 커넥터, 0.4mm BTB/FPC 초정밀 커넥터. 견적 문의 환영.',
};

// --- 큐레이션 (수정됨) ---
// 핵심 전문 분야 (Curation)
const coreCategories = [
  { name: 'IC 카드 커넥터', description: '결제 단말기(POS), ATM, 도어락용 고내구성/방수 IC 카드 소켓 (Blade/Sealed SW) [cite: 4591-4598, 4599-4606]' },
  { name: 'SIM 카드 커넥터 (Mini/Micro/Nano)', description: 'IoT 모듈, GPS 트래커용 NANO, MICRO, MINI SIM 소켓 (Push-Pull, Hinge, Push-Push 타입) [cite: 4446-4453, 4454-4461, 4462-4467, 4467-4474]' },
  { name: '메모리 카드 커넥터 (TF/SD)', description: '블랙박스, 드론, 산업용 기기용 TF(MicroSD), SD 카드 소켓 및 콤보 타입 [cite: 4480-4486, 4487-4495]' },
  { name: '초정밀 커넥터 (BTB / FPC)', description: '0.35mm/0.4mm 초정밀 피치. 모바일/웨어러블 기기용 보드-투-보드 및 FPC 커넥터 [cite: 4555-4564, 4565-4571, 4572-4580]' },
];

// 기타 취급 제품군
const otherCategories = [
  { name: 'RF 커넥터 및 안테나', description: 'RF 테스트 소켓(I~V세대), 동축 커넥터, 안테나 스프링, 케이블 클립 [cite: 4530-4537, 4538-4545, 4546-4554]' },
  { name: '모바일 I/O', description: 'USB Type C, MICRO USB, MINI USB, HDMI & DP 포트 [cite: 4496-4503, 4504-4512, 4513-4520, 4521-4529]' },
  { name: '범용 커넥터', description: '핀 헤더, 암 헤더 (Pin/Female Header), PCMCIA 커넥터 [cite: 4581-4584, 4585-4590, 4607-4611, 4612-4616]' },
];
// --- 큐레이션 종료 ---

export default function MupPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            MUP (엠유피)
          </h1>
          {/* 로고 */}
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md p-2 relative">
            <Image
              src="/logos/mup.png"
              alt="MUP 로고"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
          MUP는 **IC/SIM/메모리 카드 커넥터** 및 **모바일용 정밀 부품(BTB/FPC/RF)**에 특화된 전문 제조사입니다. [cite: 4425-4427]
          <br />
          POS 단말기, IoT 모듈, 웨어러블 기기 등 소형/정밀 기기에 필요한 최적의 솔루션을 제안합니다.
        </p>
      </section>

      {/* --- 수정된 레이아웃 --- */}
      {/* 핵심 전문 분야 리스트 (AC 2) */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          핵심 전문 분야
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreCategories.map((category) => (
            <div key={category.name}
                 className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {category.description}
                </p>
              </div>
              <div className="mt-4">
                <Link href="/contact"
                      className="font-medium text-blue-600 hover:text-blue-800">
                  전문가 상담하기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 기타 취급 제품군 리스트 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          기타 취급 제품군
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCategories.map((category) => (
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
      {/* --- 수정된 레이아웃 종료 --- */}

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

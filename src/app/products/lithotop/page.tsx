import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LithoTop 소형 배터리',
  description: 'LithoTop 초소형 리튬 폴리머 배터리 전문: TWS 이어폰, 스마트워치, 의료기기용 맞춤 배터리 팩. BMS 설계 지원.',
};

// --- 큐레이션 (수정됨) ---
// 4대 핵심 적용 분야 (Application)
const coreApplications = [
  { name: 'TWS 오디오 기기', description: '블루투스 이어폰 및 TWS 헤드셋용 초소형 맞춤형 리튬 폴리머 배터리 [cite: 1850]' },
  { name: '스마트 웨어러블', description: '스마트워치, 밴드 등 착용형 기기를 위한 고신뢰성 초소형 배터리 [cite: 1851]' },
  { name: '의료 및 헬스케어', description: '휴대용 의료 측정기, 헬스케어 기기용 맞춤형 리튬 이온 배터리 팩 [cite: 1852]' },
  { name: '스마트홈 & IoT', description: '소형 IoT 센서, 스마트홈 기기용 저전력, 고신뢰성 배터리 솔루션 [cite: 1853]' },
];

// 2대 핵심 기술 서비스 (Technology)
const coreTechnologies = [
  { name: '맞춤형 배터리 팩 (PACK)', description: '폴리머 셀 또는 18650 원통형 셀 기반의 맞춤형 배터리 팩 설계 및 제조 [cite: 1814, 1816]' },
  { name: 'BMS (보호회로) 설계', description: 'BMS 생산 라인을 통한 배터리 팩의 안정적인 충/방전, 보호회로 원스톱 제공 [cite: 1816, 1848-1849, 1856-1863]' },
];
// --- 큐레이션 종료 ---

export default function LithoTopPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            LithoTop (리소탑)
          </h1>
          {/* 로고 */}
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md p-2 relative">
            <Image
              src="/logos/lithotop.png"
              alt="LithoTop 로고"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
          LithoTop은 **초소형 리튬 폴리머 배터리** 및 **맞춤형 배터리 팩**에 특화된 전문 제조사입니다. [cite: 1800, 1816]
          <br />
          TWS(무선 이어폰), 스마트 웨어러블, 소형 의료기기 등 고성능 소형 배터리가 필요한 모든 분야에 최적화된 솔루션을 제공합니다. [cite: 1850-1853]
        </p>
      </section>

      {/* --- 수정된 레이아웃 --- */}
      {/* 4대 핵심 적용 분야 리스트 (AC 2) */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          핵심 적용 분야
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreApplications.map((app) => (
            <div key={app.name}
                 className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {app.description}
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

      {/* 2대 핵심 기술 서비스 리스트 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          핵심 기술 서비스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreTechnologies.map((tech) => (
            <div key={tech.name}
                 className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tech.description}
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
          LithoTop 배터리 관련 기술 상담
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          개발 중인 TWS, 웨어러블 기기에 적합한 초소형 맞춤 배터리가 필요하신가요?
          <br />
          지금 바로 '소형 배터리 전문가'에게 문의하세요.
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

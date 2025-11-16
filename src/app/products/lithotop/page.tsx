import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LithoTop (리소탑) 소형 배터리 | 제이에스일렉트론',
  description: 'LithoTop (리소탑)의 TWS, 웨어러블, 의료기기용 초소형 리튬 폴리머 배터리 팩 및 BMS 전문. 전문가와 상담하세요.',
};

const coreApplications = [
  {
    name: 'TWS 오디오 기기',
    description: '블루투스 이어폰 및 TWS 헤드셋용 초소형 맞춤형 리튬 폴리머 배터리',
    image: '/products/lithotop-tws.jpg'
  },
  {
    name: '스마트 웨어러블',
    description: '스마트워치, 밴드 등 착용형 기기를 위한 고신뢰성 초소형 배터리',
    image: '/products/lithotop-wearable.jpg'
  },
  {
    name: '의료 및 헬스케어',
    description: '휴대용 의료 측정기, 헬스케어 기기용 맞춤형 리튬 이온 배터리 팩',
    image: '/products/lithotop-medical.jpg'
  },
  {
    name: '스마트홈 & IoT',
    description: '소형 IoT 센서, 스마트홈 기기용 저전력, 고신뢰성 배터리 솔루션',
    image: '/products/lithotop-iot.jpg'
  },
];

const coreTechnologies = [
  { name: '맞춤형 배터리 팩 (PACK)', description: '폴리머 셀 또는 18650 원통형 셀 기반의 맞춤형 배터리 팩 설계 및 제조' },
  { name: 'BMS (보호회로) 설계', description: 'BMS 생산 라인을 통한 배터리 팩의 안정적인 충/방전, 보호회로 원스톱 제공' },
];

export default function LithoTopPage() {
  return (
    <div>
      {/* 페이지 타이틀 - 파란색 배경 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-32 h-16 flex items-center justify-center bg-white rounded-md p-2 relative">
              <Image src="/logos/lithotop.png" alt="LithoTop 로고" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            LithoTop (리소탑)
          </h1>
          <p className="text-lg md:text-xl font-semibold max-w-4xl mx-auto">
            초소형 리튬 폴리머 배터리 및 맞춤형 배터리 팩에 특화된 전문 제조사입니다.
            TWS(무선 이어폰), 스마트 웨어러블, 소형 의료기기 등 고성능 소형 배터리가 필요한 모든 분야에 최적화된 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* 핵심 적용 분야 - 흰색 배경 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center tracking-tight">
            핵심 적용 분야
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreApplications.map((app) => (
              <div key={app.name}
                   className="p-6 bg-white border-2 border-blue-100 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all">
                <div className="relative w-full h-40 mb-4 bg-white rounded-md overflow-hidden border border-gray-200">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-base font-semibold text-gray-800 bg-white bg-opacity-70">
                    ({app.name} 이미지 필요)
                  </div>
                </div>

                <h3 className="text-lg font-black text-blue-600 mb-2">
                  {app.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {app.description}
                </p>
                <Link href="/contact"
                      className="inline-block font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  전문가 상담하기 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 기술 - 연한 파란색 배경 */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center tracking-tight">
            핵심 기술
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreTechnologies.map((tech) => (
              <div key={tech.name}
                   className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all">
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <Link href="/contact"
                      className="inline-block font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  전문가 상담하기 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 유도 섹션 - 흰색 배경 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
            LithoTop 제품 관련 기술 상담
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            TWS, 웨어러블, 의료기기용 맞춤형 배터리의 기술 지원, 샘플, 견적이 필요하신가요?
            <br />
            지금 바로 배터리 전문가에게 문의하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact"
                  className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-base font-bold shadow-lg transition-all transform hover:scale-105">
              전화상담 (대표 연결)
            </Link>
            <Link href="/contact"
                  className="inline-block text-blue-700 bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-base font-bold shadow-lg transition-all">
              간편 문의 남기기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

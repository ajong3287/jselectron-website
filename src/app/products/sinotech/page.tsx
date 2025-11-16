import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SinoTech (시노텍) 커넥터 | 제이에스일렉트론',
  description: 'SinoTech 통신/네트워크 커넥터 전문. RJ45, SFP 케이지, 광통신, RF 커넥터. 전문가 기술 상담 및 견적 문의.',
};

// (기존 큐레이션된 카테고리 데이터)
const coreCategories = [
  { 
    name: '통신 및 광통신 (Telecom & Fiber Optics)', 
    description: 'RJ45, SFP, QSFP 등 고속 통신망 및 데이터 센터용 커넥터',
    image: '/products/sinotech-rj45.jpg', // 이미지 경로 추가
  },
  { 
    name: '산업용 및 RF (Industrial & RF)', 
    description: 'D-SUB, 원형 커넥터, UFL/SMA 등 산업/IoT/무선 모듈용 커넥터',
    image: '/products/sinotech-rf.jpg', // 이미지 경로 추가
  },
  { 
    name: 'PC & 디스플레이 I/O', 
    description: 'USB-C, HDMI, Display Port 등 최신 PC/가전 인터페이스',
    image: '/products/sinotech-usbc.jpg', // 이미지 경로 추가
  },
];
const otherCategories = [
  { name: '카드 커넥터', description: 'SATA, FFC/FPC, PCI Express/MINI PCI 커넥터' },
  { name: '범용 커넥터', description: '핀 헤더, 암 헤더, 배터리 커넥터' },
  { name: '기타 통신 부품', description: 'IDC 터미널 블록, Telecom 모듈, 분배 박스' },
];

export default function SinoTechPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            SinoTech (시노텍)
          </h1>
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md p-2 relative">
             <Image src="/logos/sinotech.png" alt="SinoTech 로고" layout="fill" objectFit="contain" />
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-primary-blue pl-4">
          SinoTech는 **통신, 네트워크, PC/범용 커넥터** 전반을 다루는 전문 제조사입니다.
          <br />
          제이에스일렉트론은 SinoTech와의 유연하고 신속한 기술 지원을 바탕으로 고객사의 모든 커넥터 니즈에 대응합니다.
        </p>
      </section>

      {/* 핵심 전문 분야 리스트 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          핵심 전문 분야
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCategories.map((category) => (
            <div key={category.name} 
                 className="p-6 bg-accent-blue border border-blue-200 rounded-lg shadow-sm flex flex-col justify-between">
              {/* --- 이미지 영역 추가 --- */}
              <div className="relative w-full h-40 mb-4 bg-white rounded-md overflow-hidden border border-gray-200">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="opacity-70"
                />
                 <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-800 bg-white bg-opacity-70">
                   ({category.name} 이미지 필요)
                 </div>
              </div>
              {/* --- 이미지 영역 완료 --- */}
              
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-light-text mb-4">
                  {category.description}
                </p>
              </div>
              <div className="mt-4">
                <Link href="/contact" 
                      className="font-medium text-primary-blue hover:text-blue-800">
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
                      className="text-primary-blue hover:text-blue-800 font-medium">
                  전문가 상담하기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 상담 유도 섹션 */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          SinoTech 제품 관련 기술 상담
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          SinoTech의 광범위한 커넥터 라인업에 대한 기술 지원, 샘플, 견적이 필요하신가요?
          <br />
          지금 바로 '커넥터 전문가'에게 문의하세요.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/contact"
                className="inline-block text-white bg-primary-blue hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium">
                전화상담 (대표 연결)
            </Link>
            <Link href="/contact" 
                className="inline-block text-blue-700 bg-white border border-primary-blue hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium">
                간편 문의 남기기
            </Link>
        </div>
      </section>
    </div>
  );
}

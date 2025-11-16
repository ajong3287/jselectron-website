import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Amos (아모스) 핀 헤더/IC소켓 | 제이에스일렉트론',
  description: 'Amos (아모스)의 핀 헤더, 암 헤더, IC 소켓, PLCC 소켓 등 PCB 표준 커넥터 전문. 전문가와 상담하세요.',
};

// (기존 큐레이션된 카테고리 데이터)
const coreCategories = [
  { 
    name: '핀 헤더 (Pin Header)', 
    description: '0.8mm~2.54mm Pitch. SMT, DIP, R/A (ㄱ자) 타입 등 모든 표준 규격',
    image: '/products/amos-pin-header.jpg'
  },
  { 
    name: '암 헤더 (Female Header)', 
    description: '0.8mm~2.54mm Pitch. 핀 헤더와 세트가 되는 모든 표준 규격의 소켓',
    image: '/products/amos-female-header.jpg'
  },
  { 
    name: 'IC 소켓 (IC Socket)', 
    description: 'DIP IC 소켓, PLCC 소켓, PGA 소켓 등 반도체 칩 실장용 정밀 소켓',
    image: '/products/amos-ic-socket.jpg'
  },
];
const otherCategories = [
  { name: '박스 헤더 (Box Header)', description: 'Ejector Header 포함, IDC 케이블 연결용 표준 박스 헤더' },
  { name: '보드-투-보드 (BTB)', description: 'PCB 기판 간의 직접 연결을 위한 다양한 Pitch의 BTB 커넥터' },
  { name: '기타 커넥터', description: 'FPC/FFC, D-SUB, 와이어 하네스 등 맞춤형 솔루션' },
];

export default function AmosPage() {
  return (
    <div className="space-y-12">
      {/* 페이지 타이틀 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Amos (아모스)
          </h1>
          <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-md p-2 relative">
             <Image src="/logos/amos.png" alt="Amos 로고" layout="fill" objectFit="contain" />
          </div>
        </div>
        <p className="text-lg text-gray-700 border-l-4 border-primary-blue pl-4">
          Amos는 **핀 헤더(Pin Header), 암 헤더(Female Header), IC 소켓** 등
          <br />
          **PCB(인쇄 회로 기판) 실장**에 필수적인 표준 커넥터 전문 제조사입니다.
          <br />
          임베디드 보드, 제어기기, SMT/EMS 공정에 필요한 모든 규격의 부품을 공급합니다.
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
          Amos 제품 관련 기술 상담
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          개발 중인 보드에 적합한 1.27mm 핀 헤더, PLCC 소켓 등 표준 부품의 견적이나 샘플이 필요하신가요?
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

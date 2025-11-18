'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 5대 핵심 파트너 데이터 (Source of Truth)
const manufacturers = [
  { name: 'SinoTech', specialty: '통신/네트워크/범용 커넥터', url: '/products/sinotech', logo: '/logos/sinotech.png' },
  { name: 'MUP', specialty: 'IC/SIM/메모리 카드 커넥터', url: '/products/mup', logo: '/logos/mup.png' },
  { name: 'CELDUC', specialty: '산업용 SSR (무접점 릴레이)', url: '/products/celduc', logo: '/logos/celduc.png' },
  { name: 'LithoTop', specialty: '소형 리튬 폴리머 배터리', url: '/products/lithotop', logo: '/logos/lithotop.png' },
  { name: 'Amos', specialty: '핀 헤더 및 IC 소켓 (PCB 표준)', url: '/products/amos', logo: '/logos/amos.png' },
];

export default function PartnerLogoGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 자동 슬라이드
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === manufacturers.length - 1 ? 0 : prev + 1));
    }, 4000); // 4초마다 자동 이동

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? manufacturers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === manufacturers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-dark-section overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        Partners
      </h2>

      <div
        className="relative w-full max-w-5xl mx-auto flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 왼쪽 화살표 */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-gray-700 hover:border-accent-blue rounded-full transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 로고 슬라이더 */}
        <div className="overflow-hidden w-full px-16">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / manufacturers.length)}%)` }}
          >
            {manufacturers.map((m, index) => (
              <Link key={`${m.name}-${index}`} href={m.url} passHref legacyBehavior>
                <a className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-gray-700 rounded-md p-3 relative shadow-sm hover:shadow-accent-blue/30 hover:border-accent-blue transition-all">
                  <Image
                    src={m.logo}
                    alt={`${m.name} 로고`}
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* 오른쪽 화살표 */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-gray-700 hover:border-accent-blue rounded-full transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 인디케이터 점 */}
      <div className="flex justify-center gap-2 mt-6">
        {manufacturers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-accent-blue w-6' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/about" className="text-accent-blue hover:text-blue-400 font-medium hover:underline">
          자세한 파트너십 정보 확인
        </Link>
      </div>
    </section>
  );
}

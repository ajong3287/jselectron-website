'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    title: '부품 소재 전문가에게',
    highlight: '문의주세요',
    description: '커넥터, 소형 배터리, 산업용 SSR 전문가의\n1:1 맞춤 상담으로 최적의 솔루션을 찾아드립니다',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
  },
  {
    title: 'Global Sourcing',
    highlight: '전문 파트너',
    description: '5대 핵심 제조사와의 공식 파트너십으로\n최고 품질의 부품을 안정적으로 공급합니다',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
  },
  {
    title: '맞춤형 솔루션',
    highlight: '제공합니다',
    description: '고객사 Needs에 맞는 특수제품 개발부터\nTurnkey Base 제품공급까지 원스톱 서비스',
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen bg-dark-bg overflow-hidden">
      {/* Animated circuit board pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='2' fill='%233B82F6'/%3E%3Ccircle cx='50' cy='30' r='2' fill='%233B82F6'/%3E%3Ccircle cx='80' cy='60' r='2' fill='%233B82F6'/%3E%3Cline x1='10' y1='10' x2='50' y2='30' stroke='%233B82F6' stroke-width='0.5'/%3E%3Cline x1='50' y1='30' x2='80' y2='60' stroke='%233B82F6' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-bg/80 to-dark-bg"></div>

      {/* Multiple blue glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>

      {/* Slides container - only show current slide */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-dark-bg/70"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6 md:px-12">
              <div className="mb-6">
                <span className="inline-block px-6 py-2 bg-primary-blue/20 border border-primary-blue/50 rounded-full text-accent-blue text-sm font-semibold mb-8">
                  Global Electronics Component Specialist
                </span>
              </div>

              <h1 className="text-3xl font-black text-white mb-6 leading-tight tracking-tight text-shadow max-w-5xl">
                {slide.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">
                  {slide.highlight}
                </span>
              </h1>

              <p className="text-base font-medium text-gray-400 mb-8 max-w-3xl leading-relaxed whitespace-pre-line">
                {slide.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="tel:01026294760"
                  className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-primary-blue to-accent-blue rounded-xl shadow-2xl hover:shadow-accent-blue/50 transition-all transform hover:scale-105 glow-blue"
                >
                  <span>전화상담</span>
                  <span className="ml-2 text-sm opacity-80">(010-2629-4760)</span>
                </a>
                <Link href="/contact">
                  <span className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-dark-section border-2 border-accent-blue rounded-xl hover:bg-accent-blue/10 transition-all cursor-pointer backdrop-blur-sm">
                    간편 문의 남기기
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span>5대 핵심 제조사 공식 파트너</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>즉시 기술 상담 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
                  </svg>
                  <span>안정적 공급 보장</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-accent-blue w-8' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-dark-section/50 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-accent-blue/20 hover:border-accent-blue transition-all"
        aria-label="이전 슬라이드"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-dark-section/50 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-accent-blue/20 hover:border-accent-blue transition-all"
        aria-label="다음 슬라이드"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}

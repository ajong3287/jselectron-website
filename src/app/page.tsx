import Link from 'next/link';
import HeroSection from '@/components/modules/HeroSection';
import ServiceCards from '@/components/modules/ServiceCards';
import PartnerLogoGrid from '@/components/modules/PartnerLogoGrid';

export default function Home() {
  return (
    <div className="bg-dark-bg">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Service Cards - 3 Core Services */}
      <ServiceCards />

      {/* 3. Partner Logos */}
      <div className="bg-dark-section py-20">
        <PartnerLogoGrid />
      </div>

      {/* 4. Final CTA Section */}
      <section className="relative bg-dark-bg py-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-accent-blue/5 to-primary-blue/10"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight text-shadow">
            지금 바로 전문가와 상담하세요
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-400 mb-12">
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

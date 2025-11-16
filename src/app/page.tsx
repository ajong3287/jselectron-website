import Link from 'next/link';
import HeroSection from '@/components/modules/HeroSection';
import PartnerLogoGrid from '@/components/modules/PartnerLogoGrid';

export default function Home() {
  return (
    <div>
      {/* 1. Hero 섹션 (Story 5.3) - Epic 8: 파란색 그라데이션 */}
      <HeroSection />

      {/* 2. 핵심 파트너사 로고 (Story 2.1 재사용/개선) - Epic 8: 흰색 배경 */}
      <div className="bg-white py-16">
        <PartnerLogoGrid />
      </div>

      {/* 3. CTA 섹션 (Story 3.1) - Epic 8: 연한 파란색 배경 */}
      <section className="bg-blue-50 text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          부품 소재 전문가에게 직접 문의하세요.
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-10">
          가장 빠르고 정확한 솔루션을 제공받으실 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:01026294760"
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg text-xl font-bold shadow-lg transition-all transform hover:scale-105">
                📞 전화상담 (010-2629-4760)
            </a>
            <Link href="/contact"
                className="inline-block text-blue-700 bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-lg text-xl font-bold shadow-lg transition-all">
                간편 문의 남기기
            </Link>
        </div>
      </section>
    </div>
  );
}

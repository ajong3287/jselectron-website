import Link from 'next/link';
import HeroSection from '@/components/modules/HeroSection';
import PartnerLogoGrid from '@/components/modules/PartnerLogoGrid';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* 1. Hero 섹션 (Story 5.3) */}
      <HeroSection />

      {/* 2. 핵심 파트너사 로고 (Story 2.1 재사용/개선) */}
      <PartnerLogoGrid />

      {/* 3. CTA 섹션 (Story 3.1) */}
      <section className="text-center p-10 rounded-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          '부품 소재 공급 달인'에게 직접 문의하세요.
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          가장 빠르고 정확한 솔루션을 제공받으실 수 있습니다.
        </p>
        <div className="flex justify-center gap-4">
            <a href="tel:01026294760"
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium">
                📞 전화상담 (010-2629-4760)
            </a>
            <Link href="/contact"
                className="inline-block text-blue-700 bg-white border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium">
                간편 문의 남기기
            </Link>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import HeroSection from '@/components/modules/HeroSection';
import ServiceCards from '@/components/modules/ServiceCards';
import PartnerLogoGrid from '@/components/modules/PartnerLogoGrid';

export default function Home() {
  return (
    <div className="bg-dark-bg">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Name Section */}
      <Link href="/about">
        <section className="h-20 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center border-b border-gray-200">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">
            JS ELECTRON Co., Ltd.
          </h2>
        </section>
      </Link>

      {/* 3. Service Cards - 3 Core Services */}
      <ServiceCards />

      {/* 4. Partner Logos */}
      <div className="bg-dark-section py-20">
        <PartnerLogoGrid />
      </div>
    </div>
  );
}

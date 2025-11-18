import Link from 'next/link';

const services = [
  {
    title: '고객전용 제품 개발',
    description: '당사가 보유한 전문업체를 통하여 고객사 Needs에 맞는 특수제품 개발 및 공급',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'GLOBAL SOURCING',
    description: 'Global 채널을 통한 한발 더 빠른 납기대응 및 최저가 구매에 의한 고객 만족 추구',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Turnkey Base 제품공급',
    description: '고객사가 제공한 규격을 분석하여 최적의 단가 제공 및 대체 가능 vendor 추천',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-bg to-dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white mb-4 text-shadow">
            핵심 서비스
          </h2>
          <p className="text-base text-gray-400">
            고객의 성공을 위한 3가지 전문 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-dark-section border border-gray-800 rounded-2xl hover:border-accent-blue transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-accent-blue/0 group-hover:from-accent-blue/5 group-hover:to-accent-blue/10 transition-all duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 text-accent-blue group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn more link */}
                <Link href="/contact">
                  <span className="inline-flex items-center text-accent-blue hover:text-blue-400 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                    자세히 보기
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

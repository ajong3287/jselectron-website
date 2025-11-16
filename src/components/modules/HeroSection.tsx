import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  // Story 5.1에서 확정된 Primary Blue (#007AFF)와 Neutral Colors를 기반으로 스타일링
  return (
    <section className="relative w-full h-[500px] bg-gray-900 overflow-hidden rounded-xl shadow-2xl">
      {/* 3-Layer Expertise 비주얼 배경 (Placeholder) */}
      <div className="absolute inset-0 opacity-20">
        {/* TODO: 3가지 핵심 제품 이미지를 조합한 단일 비주얼 파일 필요 */}
        <Image
          src="/products/expertise-collage-placeholder.jpg"
          alt="커넥터, 배터리, SSR 산업 부품 비주얼"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* 컨텐츠 레이어 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6 bg-black bg-opacity-40">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          부품 소재 공급 달인.
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-blue-300 mb-8">
          커넥터, 소형 배터리, 산업용 SSR 전문가의 1:1 맞춤 상담.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* 전화 상담 (Primary CTA) */}
          <a
            href="tel:01026294760"
            className="inline-block px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            📞 지금 바로 전화상담 (010-2629-4760)
          </a>
          {/* 간편 문의 (Secondary CTA) */}
          <Link href="/contact" passHref legacyBehavior>
            <a
              className="inline-block px-8 py-3 text-lg font-bold text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              간편 문의 남기기 →
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

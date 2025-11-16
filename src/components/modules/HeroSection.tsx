import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  // Story 5.1에서 확정된 Primary Blue (#007AFF)와 Neutral Colors를 기반으로 스타일링
  // Epic 8: 디자인 개선 - 파란색 그라데이션 배경으로 시각적 임팩트 강화
  return (
    <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      {/* 3-Layer Expertise 비주얼 배경 (Placeholder) */}
      <div className="absolute inset-0 opacity-10">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
          부품 소재 전문가에게 문의주세요.
        </h1>
        <p className="text-xl md:text-3xl font-bold text-blue-100 mb-10">
          커넥터, 소형 배터리, 산업용 SSR 전문가의 1:1 맞춤 상담.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* 전화 상담 (Primary CTA) */}
          <a
            href="tel:01026294760"
            className="inline-block px-8 py-3 text-lg font-bold text-blue-900 bg-white rounded-lg shadow-2xl hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            📞 지금 바로 전화상담 (010-2629-4760)
          </a>
          {/* 간편 문의 (Secondary CTA) */}
          <Link href="/contact" passHref legacyBehavior>
            <a
              className="inline-block px-8 py-3 text-lg font-bold text-white border-3 border-white rounded-lg hover:bg-white hover:text-blue-900 transition-all"
            >
              간편 문의 남기기 →
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

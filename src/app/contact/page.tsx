import type { Metadata } from 'next';
import ContactModule from '@/components/modules/ContactModule'; // 클라이언트 폼 컴포넌트 import

export const metadata: Metadata = {
  title: '문의하기',
  description: '커넥터·배터리·SSR 전문가 직통 상담: 010-2629-4760. 비교견적, 기술지원, 샘플 요청 환영. 간편 문의 접수 가능.',
};

export default function ContactPage() {
  const phoneNumber = "010-2629-4760";
  const telLink = `tel:${phoneNumber}`;

  return (
    <div className="bg-white">
      {/* 페이지 타이틀 */}
      <section className="relative h-[400px] bg-dark-bg overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 via-dark-bg/50 to-dark-bg/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-shadow text-white">
            CONTACT
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-200 max-w-4xl">
            구매팀의 비교 견적부터 R&D팀의 기술/샘플 상담까지,
            부품 소재 전문가가 신속하고 정확하게 답변해 드립니다.
          </p>
        </div>
      </section>

      {/* 2단 레이아웃 섹션 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl ml-0 mr-auto pl-12">
          <div className="grid md:grid-cols-3 gap-16">
            {/* 왼쪽: 연락처 정보 */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Inquiry
              </h2>
              <p className="text-gray-600 mb-8">
                If you have any questions,<br />
                please contact us.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tel.</p>
                  <a href={telLink} className="text-base text-primary-blue hover:underline">
                    010-2629-4760
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">E-mail.</p>
                  <a href="mailto:info@jselectron.co.kr" className="text-base text-primary-blue hover:underline">
                    info@jselectron.co.kr
                  </a>
                </div>
              </div>
            </div>

            {/* 오른쪽: 문의 폼 */}
            <div className="md:col-span-1">
              <ContactModule />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

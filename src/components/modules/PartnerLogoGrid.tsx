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
  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        핵심 파트너 제조사 (5대 전문 브랜드)
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        {manufacturers.map((m) => (
          <Link key={m.name} href={m.url} passHref legacyBehavior>
            <a className="w-24 h-16 md:w-36 md:h-20 flex items-center justify-center bg-white border border-gray-200 rounded-md p-2 relative shadow-sm hover:shadow-lg transition-shadow">
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
      <div className="text-center mt-8">
        <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
          자세한 파트너십 정보 확인 →
        </Link>
      </div>
    </section>
  );
}

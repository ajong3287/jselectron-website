import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-section border-t border-gray-800 mt-auto">
      <div className="container mx-auto p-6 text-center text-gray-400 text-sm space-y-1">
        <p>
          상호: 제이에스일렉트론 | 대표: 박동주 | 사업자등록번호: 134-21-33120
        </p>
        <p>
          주소: 서울특별시 구로구 경인로53길 15, 나동 2층 2207호 (구로동, 중앙유통단지)
        </p>
        <p>
          대표전화: 010-2629-4760 | 이메일: (이메일 확정 필요)
        </p>
        <p className="pt-2 text-gray-500">
          Copyright © {currentYear} JS Electron. All Rights Reserved.
        </p>
        <p className="mt-2 space-x-4">
          <Link href="/support" className="text-accent-blue hover:text-blue-400 hover:underline">고객 지원 (FAQ)</Link>
        </p>
      </div>
    </footer>
  );
}

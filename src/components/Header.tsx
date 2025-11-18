import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-white hover:text-accent-blue transition-colors">제이에스일렉트론</Link>
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/" className="text-white hover:text-accent-blue transition-colors">홈</Link>
          <Link href="/about" className="text-white hover:text-accent-blue transition-colors">회사 소개</Link>
          <Link href="/products" className="text-white hover:text-accent-blue transition-colors">제품 소개</Link>
          <Link href="/support" className="text-white hover:text-accent-blue transition-colors">고객 지원</Link>
        </div>
        <Link href="/contact" className="text-white bg-primary-blue hover:bg-accent-blue px-4 py-2 rounded-md text-sm font-medium transition-all glow-blue hidden md:block">문의하기</Link>
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

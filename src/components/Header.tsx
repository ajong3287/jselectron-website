import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="제이에스일렉트론 로고"
            width={150}
            height={40}
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">홈</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">회사 소개</Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">제품 소개</Link>
          <Link href="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">문의하기</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

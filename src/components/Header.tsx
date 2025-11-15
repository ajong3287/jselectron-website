import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            JS Electronics
          </Link>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

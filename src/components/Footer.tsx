export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">JS Electronics</h3>
            <p className="text-sm text-gray-600">Company info placeholder</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p className="text-sm text-gray-600">Contact info placeholder</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-sm text-gray-600">Address placeholder</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600">
          Copyright {new Date().getFullYear()} JS Electronics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

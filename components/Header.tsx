import Link from "next/link";
import { Scissors } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-yellow-400 w-10 h-10 rounded-lg flex items-center justify-center font-black">
            <Scissors size={20} />
          </div>
          <div>
            <span className="text-lg font-black text-blue-900">TailorBoard</span>
            <p className="text-xs text-gray-500">by DIBA</p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-900 font-semibold transition">Home</Link>
          <Link href="/features" className="text-gray-700 hover:text-blue-900 font-semibold transition">Features</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-semibold transition">Contact</Link>
          <a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-900 to-blue-800 text-yellow-400 px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold">Download</a>
        </div>

        <button className="md:hidden text-blue-900 font-bold" aria-label="Menu">☰</button>
      </nav>
    </header>
  );
}

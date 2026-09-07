import Link from "next/link";
import { Scissors } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-yellow-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3" title="TailorBoard - Home">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-yellow-400 w-10 h-10 rounded-lg flex items-center justify-center font-black">
            <Scissors size={20} aria-label="TailorBoard Logo" />
          </div>
          <span className="text-xl font-black text-blue-900 hidden sm:inline">TailorBoard</span>
          <span className="text-xs text-gray-500 hidden sm:inline">by DIBA</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-900 font-semibold transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-900 font-semibold transition">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-semibold transition">Contact</Link>
          <a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-900 to-blue-800 text-yellow-400 px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold">Download</a>
        </div>

        <button className="md:hidden text-blue-900 font-bold" aria-label="Menu">☰</button>
      </nav>
    </header>
  );
}

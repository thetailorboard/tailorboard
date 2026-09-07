import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-400 text-blue-900 w-10 h-10 rounded-lg flex items-center justify-center font-black">TB</div>
              <div>
                <span className="text-xl font-black text-yellow-400">TailorBoard</span>
                <p className="text-xs text-blue-300">by DIBA</p>
              </div>
            </div>
            <p className="text-sm text-blue-200">Professional business management platform for tailors in Nigeria and beyond.</p>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-yellow-400 transition">Features</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.tailorboard.app" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-yellow-400 transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-yellow-400 transition">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+2348106611231" className="hover:text-yellow-400 transition">+234 810 661 1231</a></li>
              <li><a href="mailto:support@tailorboard.gmail.com" className="hover:text-yellow-400 transition">support@tailorboard.gmail.com</a></li>
              <li><a href="https://wa.me/2348106611231" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>&copy; 2026 TailorBoard by DIBA. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-yellow-400 transition">Privacy</Link>
              <Link href="/terms" className="hover:text-yellow-400 transition">Terms</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

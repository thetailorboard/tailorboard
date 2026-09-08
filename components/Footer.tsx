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
                <span className="text-lg font-black text-yellow-400">TailorBoard</span>
                <p className="text-xs text-blue-300">by DIBA</p>
              </div>
            </div>
            <p className="text-sm text-blue-200">Professional business management for tailors in Nigeria and beyond.</p>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-yellow-400 transition">Features</Link></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-yellow-400 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+2348106611231" className="hover:text-yellow-400 transition">+234 810 661 1231</a></li>
              <li><a href="mailto:thetailorboard@gmail.com" className="hover:text-yellow-400 transition">thetailorboard@gmail.com</a></li>
              <li><a href="https://wa.me/2348106611231" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center text-sm text-blue-200">
          <p>&copy; 2026 TailorBoard by DIBA. All rights reserved. | Benin City, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

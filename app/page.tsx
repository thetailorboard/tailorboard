export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Run Your Tailoring Business Smarter</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">Customers, orders, measurements, invoices and reminders — in one app, so nothing gets lost between the fitting room and the delivery date.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg">Download APK</a>
            <a href="/features" className="bg-blue-800 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg border-2 border-yellow-400">See Features</a>
          </div>
          <p className="text-blue-200 mt-8 text-sm">v2.0.0 • Android 8.0+ • Free to start</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center text-blue-900 mb-12">Why Tailors Love TailorBoard</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "✂️", title: "Manage Everything in One Place", desc: "Customers, measurements, orders and invoices live together" },
              { icon: "⏰", title: "Never Miss a Deadline", desc: "Every order moves through a clear pipeline with reminders" },
              { icon: "₦", title: "Get Paid Faster", desc: "Generate invoices in seconds and send via WhatsApp" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-blue-900 mb-6">Ready to simplify your workshop?</h2>
          <p className="text-xl text-gray-700 mb-8">Free to download, free to use. No ads, no account required.</p>
          <a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg">Download Now</a>
        </div>
      </section>
    </div>
  );
}

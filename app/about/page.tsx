export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-blue-900 mb-6">About TailorBoard</h1>
          <p className="text-xl text-gray-700">Professional business management for tailors, built with passion</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">TailorBoard was created with a simple purpose: to give tailors the business tools they deserve.</p>
            <p className="text-lg text-gray-700 leading-relaxed">We understand the challenges tailors face — managing customers, tracking orders, calculating costs, and ensuring timely deliveries. That's why we built TailorBoard.</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Built by Tailors, for Tailors</h3>
            <p className="text-gray-700 mb-2"><strong>Founded by:</strong> Kamal Adewumi</p>
            <p className="text-gray-700 mb-2"><strong>Company:</strong> DIBA (Digital Inside Business Agency)</p>
            <p className="text-gray-700"><strong>Location:</strong> Benin City, Nigeria</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-8">Why TailorBoard?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-5xl font-black text-blue-900">500+</p>
                <p className="text-gray-700 mt-2">Active Tailors</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-blue-900">4.8★</p>
                <p className="text-gray-700 mt-2">App Rating</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-blue-900">2026</p>
                <p className="text-gray-700 mt-2">Year Founded</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Simplicity</h3>
                <p className="text-blue-100">If it's not simple, we don't build it</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Focus</h3>
                <p className="text-blue-100">Built specifically for tailors, not generic</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Partnership</h3>
                <p className="text-blue-100">We grow when our users succeed</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-black text-blue-900 mb-4">Ready to Join Us?</h2>
            <p className="text-lg text-gray-700 mb-6">Start your 30-day free trial today</p>
            <a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg">Download TailorBoard</a>
          </div>
        </div>
      </section>
    </div>
  );
}

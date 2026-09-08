export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black text-blue-900 mb-6">Run Your Tailoring Business Smarter</h1>
          <p className="text-xl text-gray-700 mb-8">Customers, orders, measurements, invoices and reminders — in one app. Nothing gets lost between the fitting room and delivery.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg">Start Free Trial</a>
            <a href="/features" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition text-lg">Learn More</a>
          </div>
          <p className="text-gray-600 text-sm">30-day free trial, then ₦1,000/month or ₦10,000/year</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-blue-900 text-center mb-12">Why Tailors Love TailorBoard</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-yellow-400 transition hover:-translate-y-2">
              <p className="text-4xl mb-4">👥</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Add & Manage Customers</h3>
              <p className="text-gray-700">Save customer profiles, contact info, preferences and order history all in one place</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-yellow-400 transition hover:-translate-y-2">
              <p className="text-4xl mb-4">📏</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Save Measurements Online</h3>
              <p className="text-gray-700">Store all customer measurements securely and access them anytime</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-yellow-400 transition hover:-translate-y-2">
              <p className="text-4xl mb-4">₦</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Get Paid Faster</h3>
              <p className="text-gray-700">Generate professional invoices and send via WhatsApp instantly</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-yellow-400 transition hover:-translate-y-2">
              <p className="text-4xl mb-4">🎯</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Stay Organized</h3>
              <p className="text-gray-700">Tasks, shopping lists, customer notes and order tracking all synced</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-yellow-400 transition hover:-translate-y-2">
              <p className="text-4xl mb-4">📊</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Track Your Growth</h3>
              <p className="text-gray-700">See your business stats, revenue and customer insights at a glance</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-yellow-400 transition hover:-translate-y-2">
              <p className="text-4xl mb-4">⏰</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Never Miss a Deadline</h3>
              <p className="text-gray-700">Every order tracked through delivery with automatic reminders</p>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Start Free Today</h3>
            <p className="text-blue-100 mb-2">30-day free trial with full access to all features. No credit card required to start.</p>
            <p className="text-sm text-blue-200">After trial: ₦1,000/month or ₦10,000/year</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-blue-900 mb-4">Ready to simplify your workshop?</h2>
          <p className="text-lg text-gray-700 mb-8">Create your account and get 30 days of free access to all features.</p>
          <a href="https://play.google.com/store/apps/details?id=com.tailorboard" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg">Start Your Free Trial</a>
          <p className="text-sm text-gray-600 mt-4">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </div>
  );
}

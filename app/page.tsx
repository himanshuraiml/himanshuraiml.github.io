import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Rocket, Users, Gauge, Lock, Code, Cloud } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to succeed
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Built with modern technology and designed for performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                  <Rocket className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Performance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized for speed with cutting-edge technology that delivers results in milliseconds.
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                  <Lock className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bank-level encryption and security protocols to keep your data safe and protected.
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                  <Users className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work together seamlessly with real-time updates and powerful collaboration tools.
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                  <Gauge className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant insights with powerful analytics and reporting features built right in.
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                  <Code className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Developer Friendly</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean APIs and comprehensive documentation make integration a breeze.
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                  <Cloud className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Native</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built for the cloud with automatic scaling and global availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                Join thousands of teams already building with our platform
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                >
                  Start Free Trial
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
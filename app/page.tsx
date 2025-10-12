import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Research Highlights Preview */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Research Highlights
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Exploring the frontiers of artificial intelligence and machine learning
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning</h3>
                <p className="text-gray-600">
                  Developing novel algorithms for deep learning, neural networks, and automated decision-making systems.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Science</h3>
                <p className="text-gray-600">
                  Advanced analytics, statistical modeling, and big data processing for real-world applications.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Applications</h3>
                <p className="text-gray-600">
                  Applying artificial intelligence to solve complex problems in healthcare, education, and industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest News/Updates */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Latest Updates
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-sm text-blue-900 font-medium mb-2">Recent Publication</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  " "
                </h3>
                 <p className="text-gray-600 text-sm mb-4">
                  
                </p> 
                <a href="#" className="text-blue-900 hover:text-blue-800 text-sm font-medium">
                  Read more →
                </a>
              </div> 
              
              { <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-sm text-blue-900 font-medium mb-2">Conference Presentation</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                 
                </p>
                <a href="#" className="text-blue-900 hover:text-blue-800 text-sm font-medium">
                  View details →
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
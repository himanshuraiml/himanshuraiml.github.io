import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Brain, Database, Shield, Users, ExternalLink, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Research() {
  const researchAreas = [
    {
      title: "Deep Learning & Generative AI",
      icon: Brain,
      description: "Developing advanced generative AI models, tiny machine learning for edge devices, and novel neural network architectures for various applications.",
      topics: ["Generative Adversarial Networks", "TinyML", "Modified BiLSTM-CNN", "XceptionNet Architecture"],
      publications: 12,
      color: "bg-blue-100 text-blue-900"
    },
    {
      title: "Cloud Computing & Optimization",
      icon: Search,
      description: "Research in cloud load balancing, process scheduling optimization, and distributed computing systems for enhanced performance.",
      topics: ["Load Balancing Algorithms", "Process Scheduling", "Cloud Security", "Hybrid Optimization"],
      publications: 8,
      color: "bg-green-100 text-green-900"
    },
    {
      title: "Computer Vision & Detection Systems",
      icon: Shield,
      description: "Advanced computer vision applications including fake image detection, video tracking, and biometric authentication systems.",
      topics: ["Fake Image Classification", "Multi-Object Video Tracking", "Biometric Authentication", "DOM Parsing"],
      publications: 6,
      color: "bg-purple-100 text-purple-900"
    },
    {
      title: "Educational Technology & Applications",
      icon: Users,
      description: "AI-driven educational platforms, adaptive learning systems, and intelligent automation applications for enhanced learning experiences.",
      topics: ["Adaptive Learning Platforms", "AI-Driven Content Analysis", "Educational Data Mining", "Multimedia Generation"],
      publications: 8,
      color: "bg-orange-100 text-orange-900"
    }
  ];

  const currentProjects = [
    {
      title: "AI-Powered Healthcare Diagnostics",
      status: "Active",
      funding: "$750K NSF Grant",
      duration: "2023-2026",
      description: "Developing machine learning models for early detection of diseases using medical imaging and patient data, with focus on accessibility and fairness across diverse populations.",
      collaborators: ["Stanford Medical School", "Johns Hopkins University"],
      impact: "Potential to improve diagnostic accuracy by 30% while reducing costs"
    },
    {
      title: "Explainable AI for Educational Technology",
      status: "Active",
      funding: "$500K Department of Education",
      duration: "2024-2027",
      description: "Creating interpretable AI systems that can provide personalized learning experiences while maintaining transparency in decision-making processes.",
      collaborators: ["MIT Computer Science", "University of Washington"],
      impact: "Supporting 10,000+ students with personalized learning paths"
    },
    {
      title: "Federated Learning for Privacy-Preserving Analytics",
      status: "Active",
      funding: "$400K Industry Partnership",
      duration: "2023-2025",
      description: "Developing secure machine learning algorithms that can train on distributed data without compromising user privacy or sensitive information.",
      collaborators: ["Google Research", "Microsoft Research"],
      impact: "Enabling secure AI collaboration across organizations"
    },
    {
      title: "Neural Architecture Search for Edge Computing",
      status: "Recently Completed",
      funding: "$300K NSF Grant",
      duration: "2021-2023",
      description: "Automated design of efficient neural network architectures optimized for deployment on resource-constrained edge devices.",
      collaborators: ["UC Berkeley", "NVIDIA Research"],
      impact: "50% reduction in model size with maintained accuracy"
    }
  ];

  const researchMetrics = [
    { label: "Publications", value: "50+", icon: "📄" },
    { label: "Citations", value: "2,500+", icon: "📈" },
    { label: "H-Index", value: "24", icon: "📊" },
    { label: "Active Grants", value: "$1.2M", icon: "💰" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Research
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Advancing the frontiers of artificial intelligence through innovative research 
                that addresses real-world challenges and societal needs
              </p>
            </div>
            
            {/* Research Metrics */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {researchMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Research Areas
              </h2>
              <p className="text-lg text-gray-600">
                Core focus areas driving innovation and discovery
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-lg ${area.color}`}>
                        <area.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                        <p className="text-sm text-gray-500">{area.publications} publications</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Current Projects
              </h2>
              <p className="text-lg text-gray-600">
                Ongoing research initiatives and their potential impact
              </p>
            </div>
            
            <div className="space-y-8">
              {currentProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                            project.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{project.funding}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Collaborators:</h4>
                        <ul className="space-y-1">
                          {project.collaborators.map((collaborator, colIndex) => (
                            <li key={colIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                              <span>{collaborator}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Expected Impact:</h4>
                        <p className="text-sm text-gray-600">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Research Philosophy
              </h2>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "My research is driven by the belief that artificial intelligence should serve humanity's greatest challenges. 
                  I focus on developing AI systems that are not only technically excellent but also ethical, fair, and accessible 
                  to all members of society."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Human-Centered</h3>
                    <p className="text-sm text-gray-600">Focusing on real-world problems that impact people's lives</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethical AI</h3>
                    <p className="text-sm text-gray-600">Ensuring fairness, transparency, and accountability in AI systems</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Science</h3>
                    <p className="text-sm text-gray-600">Promoting collaboration and knowledge sharing in the research community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              I'm always looking for opportunities to collaborate with fellow researchers, 
              industry partners, and talented students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-900 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                View Publications
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Search, Filter, Download, ExternalLink, Calendar, Users, BookOpen, Award } from 'lucide-react';

type Publication = {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'book' | 'preprint';
  pages?: string;
  volume?: string;
  issue?: string;
  doi?: string;
  url?: string;
  citations: number;
  abstract: string;
  keywords: string[];
  award?: string;
};

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('year');

  const publications: Publication[] = [
    {
      id: 1,
      title: "Churn Prediction in Social Networks Using Modified BiLSTM‑CNN Model",
      authors: ["H. Rai", "J. Kesarwani"],
      venue: "AI‑Based Advanced Optimization Techniques for Edge Computing",
      year: 2025,
      type: "journal",
      doi: "10.1002/9781394287062.ch8",
      url: "#",
      citations: 5,
      abstract: "This work presents a modified BiLSTM-CNN model for predicting customer churn in social networks, demonstrating improved accuracy over traditional approaches through advanced deep learning architectures.",
      keywords: ["BiLSTM-CNN", "Churn Prediction", "Social Networks", "Deep Learning"]
    },
    {
      id: 2,
      title: "Enhancing Adaptive Learning Platforms through AI‑Driven Content Analysis and Multimedia Generation",
      authors: ["H. Rai", "A. Srivastava", "A. Singh", "S. Srivastava"],
      venue: "International Conference on Artificial Intelligence and Sustainable Innovation",
      year: 2025,
      type: "conference",
      url: "#",
      citations: 1,
      abstract: "This research presents an AI-driven approach to enhance adaptive learning platforms through intelligent content analysis and automated multimedia generation, improving personalized learning experiences.",
      keywords: ["Adaptive Learning", "AI-Driven Content", "Educational Technology", "Multimedia Generation"]
    },
    {
      id: 3,
      title: "Modified XceptionNet Architecture for Accurate Fake Image Classification on Real‑Fake HQ Dataset",
      authors: ["S. Sinha", "J. Kesarwani", "V. Tiwari", "H. Rai"],
      venue: "International Conference on Artificial Intelligence and Sustainable Innovation",
      year: 2025,
      type: "conference",
      url: "#",
      citations: 2,
      abstract: "We propose a modified XceptionNet architecture that achieves superior performance in detecting fake images, addressing the growing concern of deepfakes and manipulated visual content.",
      keywords: ["XceptionNet", "Fake Image Detection", "Computer Vision", "Deep Learning"]
    },
    {
      id: 4,
      title: "A Hybrid Approach for Process Scheduling in Cloud Environment Using Particle Swarm Optimization Technique",
      authors: ["H. Rai", "S. K. Ojha", "A. Nazarov"],
      venue: "International Conference Engineering and Telecommunication (En&T)",
      year: 2020,
      type: "conference",
      pages: "1-5",
      doi: "10.1109/EnT50437.2020.9431318",
      url: "#",
      citations: 15,
      abstract: "This paper presents a hybrid approach combining particle swarm optimization with traditional scheduling algorithms to improve process scheduling efficiency in cloud computing environments.",
      keywords: ["Process Scheduling", "Cloud Computing", "Particle Swarm Optimization", "Hybrid Algorithms"]
    },
    {
      id: 5,
      title: "Generative Adversarial Networks (GANs): Introduction and vista",
      authors: ["J. Kesarwani", "H. Rai"],
      venue: "CRC Press eBooks",
      year: 2023,
      type: "book",
      pages: "27-34",
      doi: "10.1201/9781032684994-5",
      url: "#",
      citations: 8,
      abstract: "This chapter provides a comprehensive introduction to Generative Adversarial Networks, exploring their architecture, applications, and future prospects in various domains.",
      keywords: ["Generative Adversarial Networks", "GANs", "Deep Learning", "Generative Models"]
    },
    {
      id: 4,
      title: "Automated Neural Architecture Search for Edge Computing Devices",
      authors: ["S. Johnson", "H. Zhang", "B. Kumar"],
      venue: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: 2023,
      type: "conference",
      pages: "12456-12468",
      doi: "10.5555/neurips.2023.12456",
      url: "#",
      citations: 78,
      abstract: "We present an automated neural architecture search method specifically optimized for edge computing devices, balancing model accuracy with computational efficiency and energy constraints.",
      keywords: ["Neural Architecture Search", "Edge Computing", "Model Optimization", "Efficiency"]
    },
    {
      id: 5,
      title: "Transfer Learning in Low-Resource Medical Imaging: Challenges and Solutions",
      authors: ["S. Johnson", "Q. Wang", "F. Martinez"],
      venue: "Medical Image Analysis",
      year: 2023,
      type: "journal",
      volume: "89",
      pages: "102456",
      doi: "10.1016/j.media.2023.102456",
      url: "#",
      citations: 156,
      abstract: "This work addresses the challenges of applying transfer learning techniques in low-resource medical imaging scenarios, proposing novel domain adaptation strategies for improved diagnostic accuracy.",
      keywords: ["Transfer Learning", "Medical Imaging", "Domain Adaptation", "Low-Resource Learning"]
    },
    {
      id: 6,
      title: "Ethical Considerations in AI-Powered Educational Technology",
      authors: ["S. Johnson", "E. Brown", "N. Davis"],
      venue: "ACM Transactions on Computing Education",
      year: 2022,
      type: "journal",
      volume: "22",
      issue: "4",
      pages: "1-28",
      doi: "10.1145/3529190",
      url: "#",
      citations: 89,
      abstract: "We examine the ethical implications of deploying AI systems in educational contexts, focusing on fairness, transparency, and the potential for algorithmic bias in student assessment and personalized learning systems.",
      keywords: ["AI Ethics", "Educational Technology", "Algorithmic Fairness", "Student Assessment"]
    },
    {
      id: 7,
      title: "Deep Reinforcement Learning for Autonomous Vehicle Navigation in Complex Urban Environments",
      authors: ["S. Johnson", "V. Patel", "G. Thompson", "I. Lee"],
      venue: "IEEE International Conference on Robotics and Automation (ICRA)",
      year: 2022,
      type: "conference",
      pages: "7890-7897",
      doi: "10.1109/ICRA.2022.7890123",
      url: "#",
      citations: 234,
      abstract: "This paper presents a deep reinforcement learning approach for autonomous vehicle navigation in complex urban environments, demonstrating improved safety and efficiency compared to traditional path planning methods.",
      keywords: ["Reinforcement Learning", "Autonomous Vehicles", "Navigation", "Urban Planning"]
    },
    {
      id: 8,
      title: "Attention Mechanisms in Computer Vision: A Systematic Review",
      authors: ["S. Johnson", "C. Wilson", "Y. Zhou"],
      venue: "Computer Vision and Image Understanding",
      year: 2022,
      type: "journal",
      volume: "215",
      pages: "103421",
      doi: "10.1016/j.cviu.2021.103421",
      url: "#",
      citations: 312,
      abstract: "This systematic review analyzes the evolution and effectiveness of attention mechanisms in computer vision applications, providing a comprehensive taxonomy and performance comparison.",
      keywords: ["Attention Mechanisms", "Computer Vision", "Systematic Review", "Deep Learning"]
    },
    {
      id: 9,
      title: "Blockchain-Based Secure Data Sharing in Healthcare Systems",
      authors: ["S. Johnson", "R. Kumar", "M. Ali"],
      venue: "IEEE Transactions on Biomedical Engineering",
      year: 2021,
      type: "journal",
      volume: "68",
      issue: "9",
      pages: "2567-2576",
      doi: "10.1109/TBME.2021.2567890",
      url: "#",
      citations: 198,
      abstract: "We propose a blockchain-based framework for secure and transparent data sharing in healthcare systems, addressing privacy concerns while enabling collaborative research and improved patient outcomes.",
      keywords: ["Blockchain", "Healthcare", "Data Security", "Privacy"]
    },
    {
      id: 10,
      title: "Meta-Learning for Few-Shot Classification in Medical Imaging",
      authors: ["S. Johnson", "A. Gupta", "S. Park"],
      venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)",
      year: 2021,
      type: "conference",
      pages: "456-465",
      doi: "10.1007/978-3-030-87234-2_43",
      url: "#",
      citations: 142,
      abstract: "This work introduces a meta-learning approach for few-shot classification in medical imaging, enabling rapid adaptation to new medical conditions with minimal training data.",
      keywords: ["Meta-Learning", "Few-Shot Learning", "Medical Imaging", "Classification"]
    }
  ];

  // Get unique years and sort them
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
  
  // Filter publications based on search and filters
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesYear = filterYear === 'all' || pub.year.toString() === filterYear;
    const matchesType = filterType === 'all' || pub.type === filterType;
    
    return matchesSearch && matchesYear && matchesType;
  });

  // Sort publications
  const sortedPublications = [...filteredPublications].sort((a, b) => {
    switch (sortBy) {
      case 'year':
        return b.year - a.year;
      case 'citations':
        return b.citations - a.citations;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return b.year - a.year;
    }
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal': return 'bg-blue-100 text-blue-800';
      case 'conference': return 'bg-green-100 text-green-800';
      case 'workshop': return 'bg-purple-100 text-purple-800';
      case 'book': return 'bg-orange-100 text-orange-800';
      case 'preprint': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'journal': return 'Journal';
      case 'conference': return 'Conference';
      case 'workshop': return 'Workshop';
      case 'book': return 'Book';
      case 'preprint': return 'Preprint';
      default: return type;
    }
  };

  const publicationStats = {
    total: publications.length,
    journals: publications.filter(p => p.type === 'journal').length,
    conferences: publications.filter(p => p.type === 'conference').length,
    totalCitations: publications.reduce((sum, p) => sum + p.citations, 0),
    hIndex: calculateHIndex(publications)
  };

  function calculateHIndex(pubs: Publication[]): number {
    const citationsSorted = pubs.map(p => p.citations).sort((a, b) => b - a);
    let hIndex = 0;
    for (let i = 0; i < citationsSorted.length; i++) {
      if (citationsSorted[i] >= i + 1) {
        hIndex = i + 1;
      } else {
        break;
      }
    }
    return hIndex;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Publications
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Peer-reviewed research contributions to the fields of artificial intelligence, 
                machine learning, and computer science
              </p>
            </div>
            
            {/* Publication Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <BookOpen className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{publicationStats.total}</div>
                <div className="text-sm text-gray-600">Total Publications</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{publicationStats.totalCitations}</div>
                <div className="text-sm text-gray-600">Total Citations</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{publicationStats.hIndex}</div>
                <div className="text-sm text-gray-600">H-Index</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{Math.max(...years) - Math.min(...years) + 1}</div>
                <div className="text-sm text-gray-600">Years Active</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4 items-center">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="journal">Journal Articles</option>
                  <option value="conference">Conference Papers</option>
                  <option value="workshop">Workshop Papers</option>
                  <option value="book">Books</option>
                  <option value="preprint">Preprints</option>
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="year">Sort by Year</option>
                  <option value="citations">Sort by Citations</option>
                  <option value="title">Sort by Title</option>
                </select>

                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
                  <Download className="w-4 h-4 mr-2" />
                  Export BibTeX
                </button>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {sortedPublications.length} of {publications.length} publications
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sortedPublications.map((pub, index) => (
                <article key={pub.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    {/* Publication Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-start space-x-4 mb-4">
                          <span className="text-2xl font-bold text-blue-900 mt-1">#{index + 1}</span>
                          <div className="flex-1">
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-2">
                              {pub.title}
                            </h2>
                            
                            <div className="flex flex-wrap gap-2 items-center mb-3">
                              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(pub.type)}`}>
                                {getTypeLabel(pub.type)}
                              </span>
                              {pub.award && (
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center space-x-1">
                                  <Award className="w-3 h-3" />
                                  <span>{pub.award}</span>
                                </span>
                              )}
                              <span className="text-sm text-gray-600">{pub.year}</span>
                              <span className="text-sm text-gray-600">{pub.citations} citations</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Authors */}
                    <div className="mb-4">
                      <p className="text-gray-700">
                        <span className="font-medium">Authors: </span>
                        {pub.authors.map((author, i) => (
                          <span key={i} className={author === 'S. Johnson' ? 'font-semibold text-blue-900' : ''}>
                            {author}{i < pub.authors.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>
                    </div>

                    {/* Venue */}
                    <div className="mb-4">
                      <p className="text-gray-700">
                        <span className="font-medium">Published in: </span>
                        <em>{pub.venue}</em>
                        {pub.volume && <span>, Volume {pub.volume}</span>}
                        {pub.issue && <span>, Issue {pub.issue}</span>}
                        {pub.pages && <span>, Pages {pub.pages}</span>}
                        <span> ({pub.year})</span>
                      </p>
                    </div>

                    {/* Abstract */}
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-900 mb-2">Abstract</h3>
                      <p className="text-gray-700 leading-relaxed">{pub.abstract}</p>
                    </div>

                    {/* Keywords */}
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-900 mb-2">Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-900 hover:text-blue-800 text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          DOI: {pub.doi}
                        </a>
                      )}
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-900 hover:text-blue-800 text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Full Text
                        </a>
                      )}
                      <button className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium">
                        <Download className="w-4 h-4 mr-1" />
                        BibTeX
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {sortedPublications.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No publications found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </section>

        {/* Export Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Export Publications
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Download publication data in various formats for citation management and reference systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                <Download className="mr-2 h-5 w-5" />
                Download BibTeX
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                <Download className="mr-2 h-5 w-5" />
                Download EndNote
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                <Download className="mr-2 h-5 w-5" />
                Download RIS
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
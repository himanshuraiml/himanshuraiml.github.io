import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Award, MapPin, Calendar, BookOpen, Users, Globe, Lightbulb } from 'lucide-react';

export default function About() {
  const education = [
    {
      year: "2021",
      degree: "Ph.D. in Computer Science",
      institution: "Moscow Institute of Physics and Technology",
      focus: "Cloud Computing ",
      description: "Dissertation: 'Designing and optimization of multifact load balancing algorithm'"
    },
    {
      year: "2017",
      degree: "M.S. in Computer Science",
      institution: "Moscow Institute of Physics and Technology",
      focus: "Neural Network and Neural Computing",
      description: "Thesis: ''"
    },
    {
      year: "2015",
      degree: "B.Tech in Electronics and Communication",
      institution: "Lovely professional University, India",
      focus: "VLSI",
      description: " "
    }
  ];

  const skills = [
    {
      category: "Machine Learning",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Reinforcement Learning"],
      icon: "🧠"
    },
    {
      category: "Programming",
      skills: ["Python", "R", "C++", "JavaScript", "SQL"],
      icon: "💻"
    },
    {
      category: "Frameworks & Tools",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Apache Spark", "Docker", "Kubernetes"],
      icon: "🛠️"
    },
    {
      category: "Research Methods",
      skills: ["Statistical Analysis", "Experimental Design", "Data Visualization", "Technical Writing"],
      icon: "📊"
    },
    {
      category: "Leadership",
      skills: ["Team Management", "Grant Writing", "Project Leadership", "Mentoring", "Public Speaking"],
      icon: "👥"
    },
    {
      category: "Domains",
      skills: ["Qunantum Communication"," TinyMl","Healthcare AI", "Educational Technology", "Ethics in AI"],
      icon: "🌐"
    }
  ];

  return (,
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                About Me
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate educator and researcher dedicated to advancing artificial intelligence 
                and machine learning technologies for societal benefit
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <div className="sticky top-8">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center mb-6 p-4">
                      <img 
                        src="/image.png" 
                        alt="Professional photo of Dr. Sarah Johnson"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-700">SRM University , Tiruchirappalli</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-700">Computer Science & Engineering</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-700">8+ Years Experience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-700">200+ Students Mentored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0 lg:col-span-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I am an Assistant Professor in the Computer Science and Engineering Department at the SRM University , Tiruchirappalli, 
                    where I lead cutting-edge research in artificial intelligence, machine learning, and data science. My work focuses 
                    on developing intelligent systems that can learn, adapt, and make decisions in complex, real-world environments.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    With over 5 years of experience in both academia and industry, I have published more than 15 peer-reviewed papers 
                    in top-tier conferences and journals. I am particularly passionate about the intersection of AI and social good, working 
                    on projects that address healthcare challenges, educational equity, and sustainable technology solutions.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As an educator, I believe in fostering critical thinking and hands-on learning experiences. I have designed and taught 
                    courses ranging from introductory programming to advanced machine learning, always emphasizing the practical applications 
                    and ethical implications of technology. My teaching philosophy centers on creating inclusive learning environments where 
                    students from diverse backgrounds can thrive and contribute to the field.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Beyond research and teaching, I am actively involved in the academic community, serving as a reviewer for major conferences 
                    and journals, and participating in program committees. I am committed to mentoring the next generation of computer scientists, 
                    particularly underrepresented students in STEM fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Education
              </h2>
              <p className="text-lg text-gray-600">
                Academic journey and key milestones
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-900 hidden lg:block"></div>
              
              <div className="space-y-12">
                {education.map((item, index) => (
                  <div key={index} className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    {/* Timeline marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden lg:block">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-semibold text-blue-900 bg-blue-100 px-2 py-1 rounded">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                        <p className="text-lg font-medium text-gray-700 mb-1">{item.institution}</p>
                        <p className="text-sm text-blue-900 font-medium mb-3">{item.focus}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills and Expertise */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600">
                Technical competencies and research areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{skillGroup.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-900 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Awards & Recognition
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Russian Government Scholarship (M.S.)</h3>
                <p className="text-gray-600 text-sm">Master's program with full tuition fee and stipend coverage</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Russian Government Scholarship (Ph.D.)</h3>
                <p className="text-gray-600 text-sm">Ph.D. program with full tuition fee and stipend coverage</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ACM Professional Member</h3>
                <p className="text-gray-600 text-sm">Member No.: 0977556</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
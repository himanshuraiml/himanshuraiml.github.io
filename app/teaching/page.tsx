import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Users, Clock, Award, BookOpen, Download, ExternalLink, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Teaching() {
  const currentCourses = [
    {
      code: "",
      title: "Cloud Computing",
      level: "Graduate",
      enrollment: 60,
      semester: "Fall 2024",
      description: "Comprehensive study of cloud computing concepts, architectures, virtualization, and distributed computing systems.",
      topics: ["Cloud Architectures", "Virtualization", "Load Balancing", "Cloud Security", "Service Models"],
      format: "In-person + Online"
    },
    {
      code: "",
      title: "Machine Learning",
      level: "Undergraduate",
      enrollment: 65,
      semester: "Fall 2024",
      description: "Fundamentals of machine learning including supervised and unsupervised learning, neural networks, and practical applications.",
      topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Feature Engineering", "Model Evaluation"],
      format: "In-person"
    },
    {
      code: "",
      title: "Deep Learning",
      level: "Graduate",
      enrollment: 65,
      semester: "Spring 2024",
      description: "Advanced deep learning techniques including CNNs, RNNs, GANs, and modern architectures for various applications.",
      topics: ["Convolutional Networks", "Recurrent Networks", "Generative Models", "Transfer Learning", "TinyML"],
      format: "Hybrid"
    }
  ];

  const pastCourses = [
    {
      code: "",
      title: "Computer Networks",
      level: "Undergraduate",
      semesters: ["Fall 2023", "Spring 2023", "Fall 2022"],
      avgRating: 4.7
    },
    {
      code: "",
      title: "Algorithms",
      level: "Undergraduate",
      semesters: ["Spring 2024", "Spring 2023"],
      avgRating: 4.6
    },
    {
      code: "",
      title: "Discrete Mathematics",
      level: "Undergraduate",
      semesters: ["Spring 2022", "Fall 2021"],
      avgRating: 4.5
    },
    {
      code: "",
      title: "Introduction to Machine Learning",
      level: "Undergraduate",
      semesters: ["Fall 2022", "Spring 2022"],
      avgRating: 4.6
    },
    {
      code: "",
      title: "Research Methods in Computer Science",
      level: "PhD Seminar",
      semesters: ["Fall 2023", "Fall 2022"],
      avgRating: 4.9
    }
  ];

  const teachingAwards: any[] = [];

  const teachingStats = [
    { label: "Students Taught", value: "5000+", icon: "👥" },
    { label: "Courses Designed", value: "4", icon: "📚" },
    { label: "Avg Rating", value: "4.7/5", icon: "⭐" },
    { label: "Years Teaching", value: "4+", icon: "🎓" }
  ];

  const officeHours = [
    { day: "Tuesday", time: "2:00 PM - 4:00 PM", location: "Room 322, IST Building" },
    { day: "Thursday", time: "10:00 AM - 12:00 PM", location: "Room 322, IST Building" },
    { day: "By Appointment", time: "Email to schedule", location: "Online or In-person" }
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
                Teaching
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate about educating the next generation of computer scientists and fostering 
                critical thinking in artificial intelligence and machine learning
              </p>
            </div>
            
            {/* Teaching Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {teachingStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                  Teaching Philosophy
                </h2>
                <p className="text-lg text-gray-600">
                  My approach to education in computer science and artificial intelligence
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 mb-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <em>"Education is not the filling of a pail, but the lighting of a fire."</em> This quote by W.B. Yeats 
                    perfectly captures my teaching philosophy. I believe that effective education in computer science goes 
                    beyond transmitting knowledge—it's about inspiring curiosity, fostering critical thinking, and 
                    empowering students to become lifelong learners.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    In my courses, I emphasize hands-on learning experiences that bridge the gap between theoretical concepts 
                    and practical applications. Students work on real-world projects, collaborate on research initiatives, 
                    and engage with cutting-edge technologies. I believe that learning by doing not only reinforces 
                    understanding but also builds confidence and problem-solving skills essential for success in the 
                    rapidly evolving field of computer science.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I am particularly committed to creating inclusive learning environments where students from diverse 
                    backgrounds feel valued and supported. By incorporating ethical considerations into technical discussions 
                    and highlighting contributions from underrepresented groups in computing, I aim to prepare students who 
                    are not just technically proficient but also socially conscious leaders in technology.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h3>
                  <p className="text-sm text-gray-600">Engaging students through collaborative projects, discussions, and peer learning</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Application</h3>
                  <p className="text-sm text-gray-600">Connecting theoretical concepts to real-world problems and industry practices</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusive Environment</h3>
                  <p className="text-sm text-gray-600">Fostering diversity and creating supportive spaces for all learners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Courses */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Current Courses
              </h2>
              <p className="text-lg text-gray-600">
                Courses I'm teaching this academic year
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentCourses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
                        {course.code}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        course.level === 'Graduate' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{course.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{course.semester}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{course.enrollment} students enrolled</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{course.format}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
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

        {/* Course History */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Course History
              </h2>
              <p className="text-lg text-gray-600">
                Previously taught courses with student feedback
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastCourses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-blue-900 font-medium">{course.code}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      course.level === 'Graduate' || course.level === 'PhD Seminar' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${
                            i < Math.floor(course.avgRating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{course.avgRating}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Semesters Taught:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.semesters.map((semester, semIndex) => (
                        <span
                          key={semIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {semester}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Awards */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Teaching Recognition
              </h2>
              <p className="text-lg text-gray-600">
                Awards and recognition for teaching excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teachingAwards.map((award, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
                  <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-blue-900 font-medium text-sm mb-2">{award.organization}</p>
                  <p className="text-gray-500 text-sm mb-4">{award.year}</p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours & Contact */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                  Office Hours & Student Support
                </h2>
                <p className="text-lg text-gray-600">
                  Available times for academic guidance, research discussions, and career advice
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Office Hours */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-blue-900" />
                    <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-start p-4 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{schedule.day}</p>
                          <p className="text-sm text-gray-600">{schedule.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{schedule.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> For appointments outside office hours, please email me at least 24 hours in advance. 
                      I'm also available for brief questions before/after class.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Mail className="w-6 h-6 text-blue-900" />
                    <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:sarah.johnson@university.edu" className="text-blue-900 hover:text-blue-800 text-sm">
                          sarah.johnson@university.edu
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Office Phone</p>
                        <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Office Location</p>
                        <p className="text-gray-600 text-sm">Room 234, Computer Science Building<br />University of Technology</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">What to Bring:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Specific questions or problems you're working on</li>
                      <li>• Course materials or assignments for reference</li>
                      <li>• Your laptop if discussing coding problems</li>
                      <li>• Resume if seeking career advice</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Student Resources */}
              <div className="mt-12 bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Student Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-blue-900" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Course Materials</h4>
                    <p className="text-sm text-gray-600">Lecture notes, assignments, and supplementary resources</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-blue-900" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Study Groups</h4>
                    <p className="text-sm text-gray-600">Collaborative learning opportunities with peer support</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Download className="w-6 h-6 text-blue-900" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Code Examples</h4>
                    <p className="text-sm text-gray-600">Sample implementations and project templates</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="w-6 h-6 text-blue-900" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Career Guidance</h4>
                    <p className="text-sm text-gray-600">Advice on internships, graduate school, and industry careers</p>
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
              Questions About My Courses?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Whether you're a current student, prospective student, or fellow educator, 
              I'm always happy to discuss teaching and learning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-900 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
              <a
                href="mailto:sarah.johnson@university.edu"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                <Clock className="mr-2 h-5 w-5" />
                Schedule Appointment
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
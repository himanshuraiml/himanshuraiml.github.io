import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        {/* Project Portfolio Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Project Portfolio
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Showcasing recent developments in web and mobile applications
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Tribaah Project */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full border-b">
                  <Image
                    src="/tribaah-screenshot.png"
                    alt="Tribaah Website"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">Tribaah</CardTitle>
                      <CardDescription>Handcrafted Ethnic Elegance</CardDescription>
                    </div>
                    <Badge variant="secondary">E-Commerce</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    A premium e-commerce platform for handcrafted ethnic wear. Features a seamless shopping experience with custom collections and bridal sections.
                  </p>
                  <Link
                    href="https://tribaah.in"
                    target="_blank"
                    className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Medhiva Project */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full border-b">
                  <Image
                    src="/medhiva-screenshot.png"
                    alt="Medhiva Website"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">Medhiva</CardTitle>
                      <CardDescription>AI-Powered Career Acceleration</CardDescription>
                    </div>
                    <Badge variant="secondary">EdTech + AI</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    A gamified, AI-driven platform guiding users from resume optimization to landing their dream job. Includes success rate tracking and user ratings.
                  </p>
                  <Link
                    href="https://www.medhiva.com"
                    target="_blank"
                    className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* QR Attendance System */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="relative h-64 w-full bg-gray-100 border-b">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative h-64 w-full">
                          <Image
                            src="/qr-login.jpg"
                            alt="Attendance System Login"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-64 w-full">
                          <Image
                            src="/qr-dashboard.jpg"
                            alt="Admin Dashboard"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-64 w-full">
                          <Image
                            src="/qr-code.jpg"
                            alt="Student QR Code"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">QR Attendance System</CardTitle>
                      <CardDescription>Automated Tracking Solution</CardDescription>
                    </div>
                    <Badge variant="secondary">Utility</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4 text-sm">
                    An efficient attendance management system utilizing QR codes for instant verification and logging. Streamlines the process for institutions and organizations.
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm text-gray-500 italic">Internal Project</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
                  Your Publication Title Here
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Add your publication description here.
                </p>
                <a href="#" className="text-blue-900 hover:text-blue-800 text-sm font-medium">
                  Read more →
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-sm text-blue-900 font-medium mb-2">Conference Presentation</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Your Conference Title Here
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Add your conference details here.
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
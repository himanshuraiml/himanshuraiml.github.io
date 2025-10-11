'use client';

import Link from 'next/link';
import { ArrowRight, Download, Mail, MapPin, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        <svg
          className="absolute inset-y-0 left-1/2 h-full w-48 text-white transform -translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold uppercase tracking-wide text-gray-500">
                  Assistant Professor
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Dr. Himanshu</span>
                  <span className="block text-blue-900">Rai</span>
                </span>
              </h1>
              
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                  <Building2 className="h-5 w-5" />
                  <span className="text-lg">Computer Science & Engineering</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>University of Technology</span>
                </div>
              </div>

              <p className="mt-6 text-lg text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Specializing in Deep Learning (Gen AI, TinyML) and Cloud Computing. 
                Passionate about advancing research in computational intelligence and 
                mentoring the next generation of computer scientists.
              </p>

              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/research"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-6 py-3 text-base font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 group"
                  >
                    View Research
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </div>
                
                <div className="mt-6">
                  <button className="inline-flex items-center text-sm font-medium text-blue-900 hover:text-blue-800 transition-colors duration-200">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 relative sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:max-w-none lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-8">
                    <img 
                      src="/image.png" 
                      alt="Professional photo of Dr. Sarah Johnson"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">20+</p>
              <p className="text-blue-200">Publications</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">4+</p>
              <p className="text-blue-200">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">6</p>
              <p className="text-blue-200">Courses Taught</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-blue-200">Students Mentored</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
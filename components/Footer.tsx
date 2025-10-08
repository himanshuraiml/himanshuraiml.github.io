export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact Information
            </h3>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Dr. Himanshu Rai</p>
              <p>Assistant Professor</p>
              <p>Computer Science & Engineering</p>
              <p>SRM Institute of Science and Technology</p>
              <p className="mt-3">
                Email: <a href="mailto:Himanshr2@srmist.edu.in" className="text-blue-900 hover:text-blue-800">Himanshr2@srmist.edu.in</a>
              </p>
              <p>Phone: 0431-2258444</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <div className="mt-4 space-y-2">
              <div><a href="/research" className="text-sm text-gray-600 hover:text-blue-900 transition-colors duration-200">Research</a></div>
              <div><a href="/publications" className="text-sm text-gray-600 hover:text-blue-900 transition-colors duration-200">Publications</a></div>
              <div><a href="/teaching" className="text-sm text-gray-600 hover:text-blue-900 transition-colors duration-200">Teaching</a></div>
              <div><a href="/blog" className="text-sm text-gray-600 hover:text-blue-900 transition-colors duration-200">Blog</a></div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Office Hours
            </h3>
            <div className="mt-4 text-sm text-gray-600">
              <p>Tuesday: 2:00 PM - 4:00 PM</p>
              <p>Thursday: 10:00 AM - 12:00 PM</p>
              <p className="mt-2 text-xs text-gray-500">
                Room 234, CS Building<br />
                Or by appointment
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2024 Dr. Himanshu Rai. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
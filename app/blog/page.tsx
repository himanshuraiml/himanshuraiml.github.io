import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, Tag, BookOpen, TrendingUp } from 'lucide-react';
import { getAllPosts, getCategories, getAllTags, type BlogPost } from '@/lib/blog';
import BlogContent from '@/components/BlogContent';

export default function Blog() {
  const allPosts = getAllPosts();
  const tags = getAllTags();

  // Calculate blog stats
  const blogStats = {
    totalPosts: allPosts.length,
    tags: tags.length,
    totalReadTime: allPosts.reduce((sum, post) => sum + post.readTime, 0),
    averageReadTime: Math.round(allPosts.reduce((sum, post) => sum + (post.readTime || 0), 0) / allPosts.length)
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Blog
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Insights on research, tutorials for students, and reflections on academic life 
                in computer science and artificial intelligence
              </p>
            </div>
            
            {/* Blog Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <BookOpen className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{blogStats.totalPosts}</div>
                <div className="text-sm text-gray-600">Total Posts</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <Tag className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{blogStats.tags}</div>
                <div className="text-sm text-gray-600">Tags</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{blogStats.totalReadTime}m</div>
                <div className="text-sm text-gray-600">Total Read Time</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{blogStats.averageReadTime}m</div>
                <div className="text-sm text-gray-600">Avg Read Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content - Client Component */}
        <BlogContent posts={allPosts} tags={tags} />
      </main>
      
      <Footer />
    </div>
  );
}
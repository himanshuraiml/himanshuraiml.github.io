import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Tag, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-static';
export const dynamicParams = true;

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.tags.some(tag => post.tags.includes(tag)) && p.slug !== post.slug)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-8">
        {/* Back to Blog */}
        <div className="bg-gray-50 py-4">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-blue-900 hover:text-blue-800 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Featured Image */}
            {post.coverImage && (
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            )}

            {/* Meta Information */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <Tag className="w-4 h-4 mr-1" />
                    {tag}
                  </span>
                ))}
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.date)}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime} min read
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              {post.tags.length > 2 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Share this post:</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/image.png" 
                    alt="Dr. Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">About the Author</h4>
                  <p className="text-gray-700 mb-3">
                    Dr. Himanshu Rai is an Assistant Professor in Computer Science & Engineering at SRM Institute of Science and Technology, 
                    specializing in Machine Learning, Artificial Intelligence, and Data Science. She is passionate about advancing 
                    research in computational intelligence and mentoring students.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="/about" className="text-blue-900 hover:text-blue-800 text-sm font-medium">
                      View Profile
                    </Link>
                    <Link href="/contact" className="text-blue-900 hover:text-blue-800 text-sm font-medium">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Related Posts
                </h2>
                <p className="text-lg text-gray-600">
                  More posts with similar topics
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col">
                      {relatedPost.coverImage && (
                        <div className="aspect-w-16 aspect-h-9">
                          <img 
                            src={relatedPost.coverImage} 
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center space-x-3 mb-3">
                          {relatedPost.tags.slice(0, 1).map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {relatedPost.readTime || 0}m
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="border-t border-gray-200 pt-4 mt-auto">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatDate(relatedPost.date)}
                            </span>
                            <span className="text-blue-900 font-medium">Read more →</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-blue-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enjoyed this post?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Explore more insights on AI research, tutorials, and academic life on my blog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-900 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Read More Posts
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Clock, Tag, User, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { type BlogPost } from '@/lib/blog';

interface BlogContentProps {
  posts: BlogPost[];
  tags: string[];
}

export default function BlogContent({ posts, tags }: BlogContentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return (a.readTime || 0) - (b.readTime || 0);
        default:
          return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
      }
    });

    return filtered;
  }, [posts, searchTerm, selectedTag, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center flex-wrap">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                <option value="all">All Tags</option>
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>

              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
                <option value="readTime">Sort by Read Time</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAndSortedPosts.length} of {posts.length} posts
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredAndSortedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Post</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Link href={`/blog/${filteredAndSortedPosts[0].slug}`}>
                <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  {filteredAndSortedPosts[0].coverImage && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={filteredAndSortedPosts[0].coverImage} 
                        alt={filteredAndSortedPosts[0].title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      {filteredAndSortedPosts[0].tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(filteredAndSortedPosts[0].date)}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {filteredAndSortedPosts[0].readTime} min read
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {filteredAndSortedPosts[0].title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {filteredAndSortedPosts[0].excerpt}
                    </p>
                    
                    <div className="text-blue-900 font-medium hover:text-blue-800 transition-colors duration-200">
                      Read full post →
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredAndSortedPosts.length > 1 && (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPosts.slice(1).map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col">
                  {post.coverImage && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center space-x-3 mb-3">
                      {post.tags.slice(0, 1).map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime || 0}m
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.date)}
                        </span>
                        <span className="text-blue-900 font-medium">Read more →</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredAndSortedPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Get notified when I publish new posts about AI research, tutorials, and academic insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
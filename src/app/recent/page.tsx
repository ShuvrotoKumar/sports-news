'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiArrowRight, FiCalendar, FiFilter, FiSearch } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
};

const RecentPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);

  // Simulate data fetching
  useEffect(() => {
    const fetchArticles = () => {
      // In a real app, you would fetch this from an API
      const mockArticles: Article[] = [
        {
          id: 1,
          title: 'Champions League: Dramatic Comeback Seals Final Berth',
          excerpt: 'In a match that will be remembered for years, the underdogs staged an incredible comeback to secure their place in the finals.',
          date: 'December 4, 2025',
          readTime: '6 min read',
          category: 'Football',
          image: '/images/f6.jpg',
          isBreaking: true,
          isFeatured: true
        },
        {
          id: 2,
          title: 'NBA: Record-Breaking Night for Rookie Sensation',
          excerpt: 'The rookie phenom breaks multiple records in a single game, cementing their place as the future of the league.',
          date: 'December 3, 2025',
          readTime: '4 min read',
          category: 'Basketball',
          image: '/images/f12.jpg',
          isBreaking: true
        },
        {
          id: 3,
          title: 'Grand Slam Champion Announces Shocking Retirement',
          excerpt: 'In a press conference that stunned the tennis world, the reigning champion announced their immediate retirement from professional tennis.',
          date: 'December 3, 2025',
          readTime: '5 min read',
          category: 'Tennis',
          image: '/images/f15.jpg'
        },
        {
          id: 4,
          title: 'Formula 1: New Team Dominates Pre-Season Testing',
          excerpt: 'The newcomers have set the pace in pre-season testing, leaving established teams scrambling to catch up.',
          date: 'December 2, 2025',
          readTime: '7 min read',
          category: 'Motorsport',
          image: '/images/f16.jpg',
          isFeatured: true
        },
        {
          id: 5,
          title: 'Olympic Gold Medalist Breaks World Record',
          excerpt: 'The reigning Olympic champion has broken their own world record in a stunning display of athleticism.',
          date: 'December 2, 2025',
          readTime: '3 min read',
          category: 'Athletics',
          image: '/images/f14.jpg'
        },
        {
          id: 6,
          title: 'Golf: Underdog Wins Major Championship',
          excerpt: 'In one of the biggest upsets in recent memory, the underdog golfer has claimed their first major title.',
          date: 'December 1, 2025',
          readTime: '5 min read',
          category: 'Golf',
          image: '/images/f13.jpg'
        },
      ];

      // Set featured article
      const featured = mockArticles.find(article => article.isFeatured) || mockArticles[0];
      setFeaturedArticle(featured);
      
      // Set all articles except the featured one
      setArticles(mockArticles.filter(article => article.id !== featured.id));
      
      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    fetchArticles();
  }, []);

  const categories = ['all', 'football', 'basketball', 'tennis', 'athletics', 'motorsport', 'golf'];
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeFilter === 'all' || 
      article.category.toLowerCase() === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Format date to relative time (e.g., "2 hours ago")
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return `${diffInMinutes} min ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <FiCalendar className="w-5 h-5 mr-2 text-blue-300" />
              <span className="text-blue-200 font-medium">LATEST UPDATES</span>
              <span className="mx-3 text-blue-300">•</span>
              <span className="text-blue-100">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stay Updated with the <span className="text-yellow-400">Latest</span> in Sports
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Get breaking news, in-depth analysis, and exclusive interviews from the world of sports.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search recent news..."
                className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg bg-blue-700 bg-opacity-50 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white sticky top-0 z-20 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-3">
            <div className="flex items-center text-sm text-gray-600 mb-2 sm:mb-0">
              <FiFilter className="mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {isLoading ? (
          // Skeleton Loaders
          <div className="space-y-8">
            {/* Featured Article Skeleton */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-64 md:h-96 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
            
            {/* Articles Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Article */}
            {featuredArticle && (
              <article className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    {featuredArticle.isBreaking && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                        BREAKING
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <FiClock className="mr-1.5" />
                      <span>{formatRelativeTime(featuredArticle.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                    <div className="mt-auto">
                      <Link 
                        href={`/article/${featuredArticle.id}`}
                        className="inline-flex items-center text-blue-600 font-medium group-hover:underline"
                      >
                        Read full story
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <article 
                    key={article.id}
                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {article.isBreaking && (
                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
                          BREAKING
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <span className="text-white text-sm font-medium">{article.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <FiClock className="mr-1" />
                        <span>{formatRelativeTime(article.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-xs font-medium text-gray-500">
                          {Math.floor(Math.random() * 50) + 5} comments
                        </span>
                        <Link 
                          href={`/article/${article.id}`}
                          className="text-sm text-blue-600 font-medium hover:underline inline-flex items-center"
                        >
                          Read more
                          <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-6xl mb-4">📰</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {searchQuery 
                      ? `No results found for "${searchQuery}". Try a different search term.`
                      : `There are no recent articles in this category. Check back later for updates!`}
                  </p>
                </div>
              )}
            </div>

            {/* Load More Button */}
            {filteredArticles.length > 0 && (
              <div className="text-center mt-8">
                <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-all">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default RecentPage;
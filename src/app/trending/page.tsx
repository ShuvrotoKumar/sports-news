'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiArrowRight, FiTrendingUp, FiEye } from 'react-icons/fi';
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
  views: number;
  trendingScore: number;
};

const TrendingPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const fetchTrendingArticles = () => {
      // In a real app, you would fetch this from an API
      const mockArticles: Article[] = [
        {
          id: 1,
          title: 'Messi Breaks Another Record in Stunning Victory',
          excerpt: 'Lionel Messi scores a hat-trick to lead his team to a 4-1 victory, breaking multiple records in the process.',
          date: 'December 3, 2025',
          readTime: '5 min read',
          category: 'Football',
          image: '/images/f12.jpg',
          views: 12453,
          trendingScore: 98,
        },
        {
          id: 2,
          title: 'NBA Announces New Season Format Changes',
          excerpt: 'The NBA has unveiled significant changes to the upcoming season format, including a new playoff structure.',
          date: 'December 2, 2025',
          readTime: '4 min read',
          category: 'Basketball',
          image: '/images/f13.jpg',
          views: 9876,
          trendingScore: 94,
        },
        {
          id: 3,
          title: 'New World Record in 100m Sprint',
          excerpt: 'Breaking the 9-second barrier, the new world record in the 100m sprint has been set at 8.95 seconds.',
          date: 'December 1, 2025',
          readTime: '3 min read',
          category: 'Athletics',
          image: '/images/f14.jpg',
          views: 15678,
          trendingScore: 97,
        },
        {
          id: 4,
          title: 'Tennis Star Claims Fourth Grand Slam Title',
          excerpt: 'In a thrilling five-set match, the tennis sensation secures their fourth Grand Slam title of the year.',
          date: 'November 30, 2025',
          readTime: '6 min read',
          category: 'Tennis',
          image: '/images/f15.jpg',
          views: 11234,
          trendingScore: 95,
        },
        {
          id: 5,
          title: 'Formula 1 Season Finale: A Race to Remember',
          excerpt: 'The championship comes down to the final lap in an unforgettable season finale that had fans on the edge of their seats.',
          date: 'November 29, 2025',
          readTime: '7 min read',
          category: 'Motorsport',
          image: '/images/f16.jpg',
          views: 14321,
          trendingScore: 93,
        },
      ];

      // Simulate API delay
      setTimeout(() => {
        setArticles(mockArticles);
        setIsLoading(false);
      }, 800);
    };

    fetchTrendingArticles();
  }, []);

  const filteredArticles = activeTab === 'all' 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === activeTab);

  const categories = ['all', 'football', 'basketball', 'tennis', 'athletics', 'motorsport'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/f5.jpg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <FiTrendingUp className="w-8 h-8 mr-2 text-yellow-300" />
            <span className="text-yellow-300 font-semibold">TRENDING NOW</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hot Topics in Sports</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the most talked-about stories and breaking news in the world of sports
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar py-3">
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === category
                      ? 'bg-blue-600 text-white'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article 
                key={article.id}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <FiTrendingUp className="mr-1" />
                    <span>#{index + 1} Trending</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white text-sm font-medium">{article.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center mr-4">
                      <FiClock className="mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <FiEye className="mr-1" />
                      {article.views.toLocaleString()}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 text-black group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="ml-2 text-xs font-medium text-gray-500">
                        Trending Score: {article.trendingScore}
                      </span>
                    </div>
                    <Link 
                      href={`/article/${article.id}`}
                      className="text-blue-600 font-medium hover:underline inline-flex items-center"
                    >
                      Read More
                      <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!isLoading && filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No trending articles found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              There are currently no trending articles in this category. Check back later for updates!
            </p>
          </div>
        )}
      </main>

      <Footer />

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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

export default TrendingPage;
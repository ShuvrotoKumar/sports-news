'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch, FaUser, FaTimes, FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Category', href: '/category' },
    { name: 'Trending News', href: '/trending' },
    { name: 'Recent News', href: '/recent' },
    { name: 'Clubs Ranking', href: '/ranking' },
    { name: 'Sports Article', href: '/article' },
  ];

  // Mock search results - replace with actual API call
  const searchResults = [
    { id: 1, title: 'Premier League Results', type: 'Match', category: 'Football' },
    { id: 2, title: 'Champions League Draw', type: 'News', category: 'Football' },
    { id: 3, title: 'NBA Playoffs', type: 'Tournament', category: 'Basketball' },
  ];

  // Close search or sign in modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && 
          !(event.target as HTMLElement).closest('button')?.textContent?.includes('Sign In')) {
        setIsSignInOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log('Searching for:', searchQuery);
    // Here you would typically make an API call with searchQuery
  };

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Sport News</div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`${pathname === link.href ? 'text-red-600 font-semibold' : 'text-white'} hover:text-red-600 transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Search and Auth */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-red-600 transition-colors"
            >
              <FaSearch size={20} />
            </button>
            <button 
              onClick={() => setIsSignInOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center"
            >
              <FaUser className="mr-2" />
              Sign In
            </button>
          </div>

          {/* Search Overlay */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center pt-20 px-4">
              <div className="w-full max-w-2xl" ref={searchRef}>
                <div className="relative">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for news, teams, matches..."
                      className="w-full bg-gray-900 text-white px-6 py-4 pr-16 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <FaTimes size={24} />
                    </button>
                  </form>

                  {/* Search Results */}
                  {searchQuery && (
                    <div className="mt-4 bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                      {searchResults.map((result) => (
                        <div 
                          key={result.id}
                          className="p-4 hover:bg-gray-800 border-b border-gray-800 cursor-pointer flex justify-between items-center"
                        >
                          <div>
                            <h4 className="text-white font-medium">{result.title}</h4>
                            <div className="flex space-x-2 mt-1">
                              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                                {result.type}
                              </span>
                              <span className="text-xs text-gray-400">
                                {result.category}
                              </span>
                            </div>
                          </div>
                          <FaArrowRight className="text-gray-400" />
                        </div>
                      ))}
                      {searchResults.length === 0 && (
                        <div className="p-6 text-center text-gray-400">
                          No results found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div ref={modalRef} className="bg-gray-900 rounded-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                Sign In <FaArrowRight className="ml-2" />
              </button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <a href="#" className="text-primary hover:underline">Sign up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

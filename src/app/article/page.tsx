"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBookmark, FaRegBookmark, FaShare, FaComment, FaHeart, FaRegHeart } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock article data
const article = {
  id: 1,
  title: "Manchester City Secures Historic Quadruple with Champions League Victory",
  excerpt: "Pep Guardiola's side completes an unprecedented achievement by winning all four major trophies in a single season.",
  author: {
    name: "James Wilson",
    role: "Chief Football Correspondent",
    avatar: "/images/f5.jpg",
    bio: "Covering European football for over 15 years. Previously worked with BBC Sport and The Guardian."
  },
  category: "Football",
  date: "June 10, 2025",
  readTime: "8 min read",
  image: "/images/f6.jpg",
  content: [
    {
      type: "paragraph",
      text: "In a night that will be forever etched in football history, Manchester City completed an unprecedented quadruple by defeating Bayern Munich 2-1 in the UEFA Champions League final at the Atatürk Olympic Stadium in Istanbul. The victory marks the culmination of a remarkable season that saw Pep Guardiola's side dominate both domestically and in Europe."
    },
    {
      type: "paragraph",
      text: "The match itself was a tactical masterclass from both sides, with City eventually breaking the deadlock in the 67th minute through a stunning Kevin De Bruyne free-kick. Erling Haaland doubled the lead with a clinical finish in the 78th minute, before Bayern pulled one back through a late Joshua Kimmich penalty."
    },
    {
      type: "subheading",
      text: "A Season for the Ages"
    },
    {
      type: "paragraph",
      text: "This victory completes an extraordinary season for Manchester City, who have already secured the Premier League title, FA Cup, and Carabao Cup. They become the first English team in history to win all four major trophies in a single season, cementing their place as one of the greatest club sides of all time."
    },
    {
      type: "quote",
      text: "This is the pinnacle of my career. To win all four trophies with this group of players is something special. The hunger, the desire, the quality - it's been incredible to be part of this journey.",
      author: "Pep Guardiola, Manchester City Manager"
    },
    {
      type: "paragraph",
      text: "The achievement is particularly sweet for Guardiola, who had faced criticism in previous seasons for failing to deliver the Champions League to Manchester City. The Spanish tactician has now won the competition four times as a manager, further solidifying his status as one of the greatest managers in football history."
    },
    {
      type: "subheading",
      text: "Key Moments of the Match"
    },
    {
      type: "paragraph",
      text: "The match was a tense affair from the start, with both teams creating chances in an open first half. Bayern's Sadio Mané came closest to breaking the deadlock in the 34th minute, but his powerful strike rattled the crossbar with Ederson well beaten."
    },
    {
      type: "paragraph",
      text: "The game turned in City's favor in the second half when De Bruyne's perfectly placed free-kick left Bayern goalkeeper Manuel Neuer rooted to the spot. Haaland's goal, his 15th in the competition this season, put City in control before Kimmich's late penalty set up a nervy finish."
    },
    {
      type: "image",
      src: "/images/f7.jpg",
      caption: "Manchester City players celebrate with the Champions League trophy after their historic victory."
    },
    {
      type: "subheading",
      text: "What This Means for the Future"
    },
    {
      type: "paragraph",
      text: "This victory not only cements Manchester City's status as the dominant force in English football but also establishes them as a European powerhouse. With a young squad and the financial backing to strengthen further, this could be the start of a new era of dominance for the club."
    },
    {
      type: "paragraph",
      text: "For Guardiola, the challenge will be to maintain this level of success. As he said in his post-match interview, 'The hardest thing in football is not to win, but to keep winning.' Based on tonight's performance, it would be foolish to bet against them."
    }
  ],
  tags: ["Premier League", "Champions League", "Manchester City", "Pep Guardiola", "Football"],
  likes: 2458,
  comments: 324,
  shares: 587
};

// Related articles
const relatedArticles = [
  {
    id: 2,
    title: "Haaland Breaks Premier League Scoring Record in Final Day Thriller",
    excerpt: "Norwegian striker scores hat-trick to surpass Shearer and Cole's long-standing record.",
    image: "/images/f8.jpg",
    category: "Football",
    date: "May 28, 2025",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Guardiola Signs New Five-Year Deal with Manchester City",
    excerpt: "Spanish manager commits future to City after securing historic quadruple.",
    image: "/images/f9.jpg",
    category: "Football",
    date: "June 2, 2025",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "The Tactical Evolution of Pep Guardiola's Manchester City",
    excerpt: "How Guardiola transformed City into the most dominant team in Europe.",
    image: "/images/f10.jpg",
    category: "Tactical Analysis",
    date: "May 25, 2025",
    readTime: "10 min read"
  }
];

const ArticlePage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "/images/f9.jpg",
      text: "Incredible achievement by City! The quadruple is something special. Guardiola has built a machine!",
      date: "2 hours ago",
      likes: 45
    },
    {
      id: 2,
      author: "Sarah Miller",
      avatar: "/images/f11.jpg",
      text: "As a United fan, this hurts, but you have to respect what they've achieved. The best team in Europe right now.",
      date: "1 hour ago",
      likes: 32
    }
  ]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    const newComment = {
      id: comments.length + 1,
      author: "You",
      avatar: "/images/f12.jpg",
      text: comment,
      date: "Just now",
      likes: 0
    };
    
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Article Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm">{article.date}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{article.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{article.author.name}</h4>
                  <p className="text-sm text-gray-500">{article.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Bookmark"
                >
                  {isBookmarked ? (
                    <FaBookmark className="w-5 h-5 text-blue-600" />
                  ) : (
                    <FaRegBookmark className="w-5 h-5" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-gray-600" aria-label="Share">
                  <FaShare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden mb-12">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-sm font-medium">Photo: Getty Images</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {article.content.map((item, index) => {
              switch (item.type) {
                case 'paragraph':
                  return <p key={index} className="mb-6 text-gray-700 leading-relaxed">{item.text}</p>;
                case 'subheading':
                  return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-6">{item.text}</h2>;
                case 'quote':
                  return (
                    <blockquote key={index} className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700">
                      <p className="text-xl">"{item.text}"</p>
                      <p className="mt-4 text-gray-600">— {item.author}</p>
                    </blockquote>
                  );
                case 'image':
                  return (
                    <figure key={index} className="my-10">
                      <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
                        {item.src && (
                          <Image
                            src={item.src as string}
                            alt={item.caption || ''}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        )}
                      </div>
                      <figcaption className="mt-3 text-sm text-center text-gray-500">
                        {item.caption}
                      </figcaption>
                    </figure>
                  );
                default:
                  return null;
              }
            })}
          </div>
          
          {/* Article Tags */}
          <div className="flex flex-wrap gap-2 mt-12 mb-8">
            {article.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Article Actions */}
          <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 my-8">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
              >
                {isLiked ? (
                  <FaHeart className="w-5 h-5 text-red-500" />
                ) : (
                  <FaRegHeart className="w-5 h-5" />
                )}
                <span>{isLiked ? article.likes + 1 : article.likes}</span>
              </button>
              <span className="text-gray-300 mx-2">•</span>
              <div className="flex items-center space-x-1 text-gray-500">
                <FaComment className="w-5 h-5" />
                <span>{comments.length}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Share:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-gray-50 rounded-xl p-6 my-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900">{article.author.name}</h3>
                <p className="text-gray-600 mb-3">{article.author.role}</p>
                <p className="text-gray-700">{article.author.bio}</p>
              </div>
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments ({comments.length})</h2>
            
            <form onSubmit={handleCommentSubmit} className="mb-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/images/f12.jpg"
                      alt="Your avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full text-black px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-black text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!comment.trim()}
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={comment.avatar}
                        alt={comment.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{comment.author}</h4>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                      <p className="mt-1 text-gray-700">{comment.text}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <button className="text-xs text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                          <FaRegHeart className="w-3 h-3" />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-xs text-gray-500 hover:text-gray-700">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
                <Link href={`/article/${item.id}`} key={item.id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full mb-2">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{item.date}</span>
                        <span className="mx-2">•</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
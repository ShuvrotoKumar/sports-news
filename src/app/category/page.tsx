import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  articleCount: number;
};

const categories: Category[] = [
  {
    id: 1,
    name: 'FOOTBALL',
    slug: 'football',
    description: 'Latest football news, match highlights, and analysis from around the world.',
    image: '/images/f3.jpg',
    articleCount: 24,
  },
  {
    id: 2,
    name: 'BASKETBALL',
    slug: 'basketball',
    description: 'NBA, EuroLeague, and international basketball coverage.',
    image: '/images/f4.jpg',
    articleCount: 18,
  },
  {
    id: 3,
    name: 'CAR SPORT',
    slug: 'car-sport',
    description: 'Formula 1, MotoGP, and motorsport news and updates.',
    image: '/images/f5.jpg',
    articleCount: 15,
  },
  {
    id: 4,
    name: 'TABLE TENNIS',
    slug: 'table-tennis',
    description: 'Ping pong tournaments, player profiles, and match analysis.',
    image: '/images/f6.jpg',
    articleCount: 12,
  },
  {
    id: 5,
    name: 'TENNIS',
    slug: 'tennis',
    description: 'Grand Slam tournaments, rankings, and player interviews.',
    image: '/images/f3.jpg',
    articleCount: 10,
  },
  {
    id: 6,
    name: 'GOLF',
    slug: 'golf',
    description: 'PGA Tour, European Tour, and major championships coverage.',
    image: '/images/f4.jpg',
    articleCount: 8,
  },
];

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports Categories</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore the latest news and updates from your favorite sports
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/category/${category.slug}`}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-colors duration-300" />
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="bg-black bg-opacity-60 text-white p-4 rounded-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                  <p className="text-gray-200 mb-3 line-clamp-2">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-300 font-medium">
                      {category.articleCount} Articles
                    </span>
                    <span className="inline-flex items-center text-blue-300 group-hover:text-white transition-colors">
                      View All
                      <svg 
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're constantly adding new categories and content. Let us know what you'd like to see more of!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
            Suggest a Category
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
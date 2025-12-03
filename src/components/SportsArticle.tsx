import Image from 'next/image';
import Link from 'next/link';

const SportsArticle = () => {
  const articles = [
    {
      id: 1,
      title: 'NBA Finals: Game 7 Preview',
      excerpt: 'Everything you need to know about the decisive Game 7 of the NBA Finals.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Mike Johnson',
      date: 'Jun 15, 2025',
      category: 'Basketball'
    },
    {
      id: 2,
      title: 'Tennis: New Rising Star Emerges',
      excerpt: 'Young talent makes waves in the tennis world with stunning victory.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Sarah Williams',
      date: 'Jun 14, 2025',
      category: 'Tennis'
    },
    {
      id: 3,
      title: 'F1: Championship Battle Heats Up',
      excerpt: 'Title rivals separated by just 5 points with 3 races remaining.',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c47a06b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'David Chen',
      date: 'Jun 13, 2025',
      category: 'Motorsport'
    },
    {
      id: 4,
      title: 'Golf: Major Championship Preview',
      excerpt: 'Top players to watch at this year\'s Open Championship.',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c47a06b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Emily Davis',
      date: 'Jun 12, 2025',
      category: 'Golf'
    },
    {
      id: 5,
      title: 'Olympics: New Sports Added',
      excerpt: 'Breaking down the new sports making their Olympic debut.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'James Wilson',
      date: 'Jun 11, 2025',
      category: 'Olympics'
    },
    {
      id: 6,
      title: 'Soccer: Transfer Window Update',
      excerpt: 'All the latest transfer news and rumors from around Europe.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Lisa Brown',
      date: 'Jun 10, 2025',
      category: 'Soccer'
    }
  ];

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black-800">Sports Article</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-black-100">
            <svg className="w-5 h-5 text-black0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-black-100">
            <svg className="w-5 h-5 text-black0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center text-sm text-white mb-2">
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <span className='text-white'>{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <Link href={`/article/${article.id}`} className="hover:text-red-600">
                  {article.title}
                </Link>
              </h3>
              <p className="text-black-600 text-sm mb-4">{article.excerpt}</p>
              <Link 
                href={`/article/${article.id}`} 
                className="text-red-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-1">
          <button className="px-3 py-1 rounded-md text-black0 hover:bg-black-100">
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="px-3 py-1 rounded-md bg-red-600 text-white font-medium">
            1
          </button>
          <button className="px-3 py-1 rounded-md text-black-700 hover:bg-black-100">
            2
          </button>
          <button className="px-3 py-1 rounded-md text-black-700 hover:bg-black-100">
            3
          </button>
          <button className="px-3 py-1 rounded-md text-black-700 hover:bg-black-100">
            4
          </button>
          <button className="px-3 py-1 rounded-md text-black0 hover:bg-black-100">
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </nav>
      </div>
    </section>
  );
};

export default SportsArticle;

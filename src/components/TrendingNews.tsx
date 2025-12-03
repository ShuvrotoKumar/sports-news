import Image from 'next/image';
import Link from 'next/link';

const TrendingNews = () => {
  const trendingNews = [
    {
      id: 1,
      title: 'Messi scores hat-trick in final match',
      date: 'Dec 3, 2025',
      category: 'Football',
      image: '/images/f12.jpg'
    },
    {
      id: 2,
      title: 'NBA announces new season schedule',
      date: 'Dec 2, 2025',
      category: 'Basketball',
      image: '/images/f13.jpg'
    },
    {
      id: 3,
      title: 'New record set in 100m sprint',
      date: 'Dec 1, 2025',
      category: 'Athletics',
      image: '/images/f14.jpg'
    },
    {
      id: 4,
      title: 'Tennis star wins championship',
      date: 'Nov 30, 2025',
      category: 'Tennis',
      image: '/images/f15.jpg'
    }
  ];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-black">Trending News</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trending News List */}
        <div className="lg:col-span-2 space-y-4">
          {trendingNews.map((news) => (
            <div key={news.id} className="flex gap-4 p-4 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <span className="text-sm text-red-600 font-semibold">{news.category}</span>
                <h3 className="font-semibold text-lg mb-1">{news.title}</h3>
                <p className="text-sm text-red-600">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Promotional Banner */}
        <div className="lg:col-span-1">
          <div className="bg-black-100 rounded-lg p-6 h-full flex flex-col">
            <div className="relative h-48 mb-4">
              <Image
                src="/images/f14.jpg"
                alt="Discover the member benefits of USA Cycling"
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h3>
            <p className="text-black-600 mb-4">Join now and get exclusive access to training programs and events.</p>
            <button className="mt-auto bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;

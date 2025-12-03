import Image from 'next/image';
import Link from 'next/link';
import ClubsRanking from './ClubsRanking';

const RecentNews = () => {
  const recentNews = [
    {
      id: 1,
      title: 'NBA Playoffs: Conference Finals Preview',
      excerpt: 'A look at the matchups and predictions for the upcoming conference finals series.',
      image: '/images/f3.jpg',
      date: 'May 14, 2025',
      category: 'Basketball'
    },
    {
      id: 2,
      title: 'Tennis Star Wins Madrid Open',
      excerpt: 'Dominant performance secures another title for the world number one.',
      image: '/images/f4.jpg',
      date: 'May 13, 2025',
      category: 'Tennis'
    },
    {
      id: 3,
      title: 'Formula 1: New Team Announced',
      excerpt: 'Breaking: New team to join the grid in the 2026 season.',
      image: '/images/f5.jpg',
      date: 'May 12, 2025',
      category: 'Motorsport'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-48">
          <Image
            src="/images/f8.jpg"
            alt="Main recent news"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4">
            <span className="inline-block bg-red-600 text-black text-xs px-2 py-1 rounded mb-1">
              Football
            </span>
            <h3 className="text-black font-semibold text-lg">
              Champions League Semi-Finals: First Leg Results
            </h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-black mb-4">
            The first legs of the Champions League semi-finals delivered thrilling matches with unexpected results.
          </p>
          <Link href="/champions-league-semi-finals" className="text-red-600 hover:underline text-sm font-medium">
            Read More →
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {recentNews.map((news) => (
          <div key={news.id} className="flex gap-3 text-black">
            <div className="relative w-20 h-16 flex-shrink-0">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <span className="text-xs text-black font-medium">{news.category}</span>
              <h4 className="text-sm font-medium line-clamp-2">
                <Link href={`/news/${news.id}`} className="hover:text-red-600">
                  {news.title}
                </Link>
              </h4>
              <span className="text-xs text-black">{news.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-black">
        <Link href="/recent-news" className="text-sm font-medium text-black hover:underline">
          More News →
        </Link>
      </div>

      {/* Clubs Ranking */}
      <ClubsRanking />
    </div>
  );
};

export default RecentNews;

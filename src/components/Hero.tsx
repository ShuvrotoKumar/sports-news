import Image from 'next/image';
import Link from 'next/link';

// Placeholder image URLs
const PLACEHOLDER_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  side1: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  side2: 'https://images.unsplash.com/photo-1508098682722-e99c47a06b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
};

const Hero = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Hero Content */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <Image
              src={PLACEHOLDER_IMAGES.hero}
              alt="Top Scorer to the Final Match"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                Basketball
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                TOP SCORER TO THE FINAL MATCH
              </h1>
              <p className="text-black-200 mb-4 line-clamp-2">
                The championship game is set after an intense semifinal round. 
                The top scorer led his team to victory with an outstanding performance.
              </p>
              <Link 
                href="/news/top-scorer-final-match" 
                className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                CONTINUE READING
              </Link>
            </div>
          </div>
        </div>

        {/* Side Stories */}
        <div className="space-y-4">
          {[
            { id: 1, image:'/images/f1.jpg', title: 'Championship Preview' },
            { id: 2, image:'/images/f2.jpg', title: 'Player of the Week' }
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

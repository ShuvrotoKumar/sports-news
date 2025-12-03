import Image from 'next/image';
import Link from 'next/link';

const FeaturedArticle = () => {
  return (
    <section className="h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="md:flex h-full">
          {/* Main Image - Equal height with content */}
          <div className="md:w-1/2 relative h-64 md:h-full">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/f15.jpg"
                alt="Lionel Messi leaving PSG"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
                Football
              </span>
            </div>
          </div>
          
          {/* Article Content - Equal height with image */}
          <div className="p-6 md:w-1/2 flex flex-col h-full">
            <h2 className="text-2xl text-black md:text-3xl font-bold mb-4">
              LIONEL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN, CLUB CONFIRMS
            </h2>
            
            <div className="text-black mb-4">
              <p className="mb-4">
                Paris Saint-Germain has confirmed that Lionel Messi will be leaving the club at the end of the season. 
                The Argentine forward joined the French champions in 2021 after spending his entire professional career at Barcelona.
              </p>
              <p className="mb-4">
                During his time at PSG, Messi won two Ligue 1 titles and was instrumental in the team's success both domestically and in Europe. 
                His departure marks the end of an era for the Parisian club.
              </p>
              <p>
                "We would like to thank Leo for his contribution to the club and wish him all the best for the future," 
                said PSG president Nasser Al-Khelaifi in a statement.
              </p>
              <p>He will be replaced by Kylian Mbappé, who joined the club in 2018.</p>
              <p>He will be replaced by Kylian Mbappé, who joined the club in 2018.</p>
              <p>
                "Messi won two Ligue 1 titles and was instrumental in the team's success both domestically and in Europe. His departure marks the end of an era for the Parisian club."
              </p>
              <p>
                'When you lose, you get up, you make mistakes and you learn. And then you become a better player" and "I'm never satisfied. I always push my limits and try to get better every day'
              </p>
            </div>
            
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-black-200 mr-3 overflow-hidden">
                  <Image
                    src="/images/f14.jpg"
                    alt="Author"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-black">John Smith</p>
                  <p className="text-sm text-black">Sports Reporter</p>
                </div>
              </div>
              
              <div className="text-sm text-white">
                May 15, 2025
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-black-200">
              <Link 
                href="/article/lionel-messi-leaving-psg" 
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;

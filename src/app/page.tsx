import Header from '../components/Header';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import TrendingNews from '../components/TrendingNews';
import FeaturedArticle from '../components/FeaturedArticle';
import RecentNews from '../components/RecentNews';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <Hero />
        <CategorySection />
        <TrendingNews />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12 items-stretch">
          <div className="lg:col-span-2">
            <FeaturedArticle />
          </div>
          <div className="lg:col-span-1">
            <RecentNews />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </main>
  );
}

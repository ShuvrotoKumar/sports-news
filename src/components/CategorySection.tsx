import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'FOOTBALL',
    slug: 'football',
    image: '/images/f3.jpg',
  },
  {
    id: 2,
    name: 'BASKETBALL',
    slug: 'basketball',
    image: '/images/f4.jpg',
  },
  {
    id: 3,
    name: 'CAR SPORT',
    slug: 'car-sport',
      image: '/images/f5.jpg',
  },
  {
    id: 4,
    name: 'TABLE TENNIS',
    slug: 'table-tennis',
    image: '/images/f6.jpg',
  },
];

const CategorySection = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-black">Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/category/${category.slug}`}
            className="group relative h-40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="absolute inset-0">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-colors" />
            </div>
            <div className="relative h-full flex items-center justify-center">
              <h3 className="text-white text-lg font-bold text-center px-2">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

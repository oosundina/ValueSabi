
import React from 'react';
import { mockProducts } from '../data/mockData';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';
import PriceDropCard from '../components/PriceDropCard';
import { PhoneIcon, LaptopIcon, TVIcon, FridgeIcon, FashionIcon } from '../components/icons/CategoryIcons';

interface HomePageProps {
  onProductSelect: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onProductSelect }) => {
  const topValueProducts = [...mockProducts].sort((a, b) => b.valueScore - a.valueScore).slice(0, 5);
  const priceDropProducts = mockProducts.filter(p => p.priceDropPercent && p.priceDropPercent > 15);

  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800">
          Find <span className="text-[#00B074]">True Value</span>, Not Just a Cheaper Price.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Our Value Score helps you make smarter shopping decisions in Nigeria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Today's Highest Value Score</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
          {topValueProducts.map(product => (
            <div key={product.id} className="flex-shrink-0 w-80">
              <ProductCard product={product} onSelect={onProductSelect} />
            </div>
          ))}
        </div>
      </section>

      {priceDropProducts.length > 0 && (
         <section>
          <h2 className="text-2xl font-bold mb-4">Price Drops You Can't Miss</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {priceDropProducts.map(product => (
                    <PriceDropCard key={product.id} product={product} onSelect={onProductSelect} />
                ))}
            </div>
         </section>
      )}

       <section>
          <h2 className="text-2xl font-bold mb-4 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
             <CategoryItem icon={<PhoneIcon />} label="Phones" />
             <CategoryItem icon={<LaptopIcon />} label="Laptops" />
             <CategoryItem icon={<TVIcon />} label="TVs" />
             <CategoryItem icon={<FridgeIcon />} label="Appliances" />
             <CategoryItem icon={<FashionIcon />} label="Fashion" />
          </div>
       </section>
    </div>
  );
};

interface CategoryItemProps {
    icon: React.ReactNode;
    label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, label }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="text-[#00B074] mb-2">
            {icon}
        </div>
        <span className="font-semibold">{label}</span>
    </div>
);


export default HomePage;

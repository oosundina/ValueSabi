
import React from 'react';
import type { Product } from '../types';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

interface PriceDropCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
};


const PriceDropCard: React.FC<PriceDropCardProps> = ({ product, onSelect }) => {
  if (!product.oldPrice || !product.priceDropPercent) {
    return null;
  }

  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
        <div className="relative">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center">
                <ArrowDownIcon />
                <span>{product.priceDropPercent}%</span>
            </div>
        </div>
      <div className="p-4 flex-grow">
        <h3 className="font-bold text-lg text-zinc-800">{product.name}</h3>
        <div className="flex items-baseline mt-2 space-x-2">
            <p className="text-xl font-extrabold text-[#00B074]">{formatCurrency(product.bestPrice)}</p>
            <p className="text-md text-gray-500 line-through">{formatCurrency(product.oldPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceDropCard;


import React from 'react';
import type { Product } from '../types';
import ValueScore from './ValueScore';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(product)}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-zinc-800 flex-grow">{product.name}</h3>
        <div className="flex justify-between items-center mt-4">
          <ValueScore score={product.valueScore} />
          <p className="text-xl font-extrabold text-[#00B074]">{formatCurrency(product.bestPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

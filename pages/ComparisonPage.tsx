
import React from 'react';
import type { Product, PriceHistoryPoint, Offer } from '../types';
import PriceHistoryChart from '../components/PriceHistoryChart';
import { JumiaLogo, KongaLogo, SlotLogo, PointekLogo } from '../components/icons/RetailerLogos';
import ValueScore from '../components/ValueScore';

interface ComparisonPageProps {
  product: Product;
  priceHistory: PriceHistoryPoint[];
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
};

const RetailerLogo: React.FC<{ retailer: Offer['retailer'] }> = ({ retailer }) => {
  switch (retailer) {
    case 'Jumia': return <JumiaLogo />;
    case 'Konga': return <KongaLogo />;
    case 'Slot': return <SlotLogo />;
    case 'Pointek': return <PointekLogo />;
    default: return <span>{retailer}</span>;
  }
};

const ComparisonPage: React.FC<ComparisonPageProps> = ({ product, priceHistory }) => {
    const bestOffer = product.offers.reduce((prev, current) => (prev.price < current.price ? prev : current));

  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-md" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <ValueScore score={product.valueScore} size="large" />
          <p className="text-lg text-gray-600">{product.summary}</p>
          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-500">
             <h3 className="text-lg font-semibold text-zinc-800">Best Deal</h3>
             <p className="text-3xl font-bold text-emerald-600 mt-1">{formatCurrency(bestOffer.price)}</p>
             <p className="text-md text-gray-700">on {bestOffer.retailer} ({bestOffer.seller})</p>
             <a 
                href={bestOffer.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full text-center bg-[#00B074] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#009a65] transition duration-300"
              >
                Go to Store
             </a>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
         <h2 className="text-2xl font-bold mb-4">Compare Offers</h2>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b-2 border-gray-200">
                    <tr>
                        <th className="py-3 px-4 font-semibold">Retailer</th>
                        <th className="py-3 px-4 font-semibold">Seller</th>
                        <th className="py-3 px-4 font-semibold">Price</th>
                        <th className="py-3 px-4 font-semibold">Seller Rating</th>
                        <th className="py-3 px-4 font-semibold">Delivery Est.</th>
                        <th className="py-3 px-4 font-semibold"></th>
                    </tr>
                </thead>
                <tbody>
                    {product.offers.map((offer, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-4"><RetailerLogo retailer={offer.retailer} /></td>
                            <td className="py-4 px-4 text-gray-700">{offer.seller}</td>
                            <td className="py-4 px-4 font-bold text-lg">{formatCurrency(offer.price)}</td>
                            <td className="py-4 px-4 text-yellow-500 font-semibold">{offer.sellerRating.toFixed(1)} ★</td>
                            <td className="py-4 px-4 text-gray-600">{offer.deliveryEstimate}</td>
                            <td className="py-4 px-4">
                                <a href={offer.url} target="_blank" rel="noopener noreferrer" className="text-[#00B074] font-semibold hover:underline">
                                    Visit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
      </section>

      {priceHistory && priceHistory.length > 0 && (
         <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Price History (90 Days)</h2>
            <div className="h-80 w-full">
                <PriceHistoryChart data={priceHistory} />
            </div>
         </section>
      )}

    </div>
  );
};

export default ComparisonPage;

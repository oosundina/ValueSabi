
import React, { useState, useCallback } from 'react';
import HomePage from './pages/HomePage';
import ComparisonPage from './pages/ComparisonPage';
import type { Product } from './types';
import { mockProducts, mockPriceHistory } from './data/mockData';
import Header from './components/Header';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSearch = useCallback((query: string) => {
    if (!query) {
      setSelectedProduct(null);
      return;
    }
    const foundProduct = mockProducts.find(p => p.name.toLowerCase().includes(query.toLowerCase()));
    if (foundProduct) {
      setSelectedProduct(foundProduct);
    } else {
        // In a real app, you might show a "not found" message
        alert("Product not found!");
    }
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-zinc-800">
      <Header onSearch={handleSearch} onLogoClick={clearSelection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedProduct ? (
          <ComparisonPage product={selectedProduct} priceHistory={mockPriceHistory[selectedProduct.id] || []} />
        ) : (
          <HomePage onProductSelect={setSelectedProduct} />
        )}
      </main>
       <footer className="text-center py-6 border-t border-gray-200 mt-12">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ValueSabi. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-1">Don't just find the price. Sabi the value.</p>
       </footer>
    </div>
  );
};

export default App;

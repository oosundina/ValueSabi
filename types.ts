
export interface Offer {
  retailer: 'Jumia' | 'Konga' | 'Slot' | 'Pointek';
  seller: string;
  price: number;
  sellerRating: number;
  deliveryEstimate: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  valueScore: number;
  bestPrice: number;
  oldPrice?: number;
  priceDropPercent?: number;
  summary: string;
  offers: Offer[];
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
}

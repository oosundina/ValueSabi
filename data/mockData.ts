
import type { Product, PriceHistoryPoint } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Samsung Galaxy A54',
    category: 'Mobile Phones',
    imageUrl: 'https://ng.jumia.is/unsafe/product/64/1959413/1.jpg',
    valueScore: 88,
    bestPrice: 245500,
    summary: 'Excellent mid-range value with a superior camera and display for its price point.',
    offers: [
      {
        retailer: 'Jumia',
        seller: 'Official Store',
        price: 245500,
        sellerRating: 4.8,
        deliveryEstimate: '2-4 days',
        url: 'https://www.jumia.com.ng/samsung-galaxy-a54-5g-8gb-ram-256gb-rom-awesome-graphite-314959146.html',
      },
      {
        retailer: 'Konga',
        seller: 'TechGiant',
        price: 248000,
        sellerRating: 4.7,
        deliveryEstimate: '3-5 days',
        url: 'https://www.jumia.com.ng/samsung-galaxy-a54-5g-8gb-ram-256gb-rom-awesome-graphite-314959146.html',
      },
      {
        retailer: 'Slot',
        seller: 'Slot Limited',
        price: 250000,
        sellerRating: 4.9,
        deliveryEstimate: '1-2 days',
        url: 'https://www.jumia.com.ng/samsung-galaxy-a54-5g-8gb-ram-256gb-rom-awesome-graphite-314959146.html',
      },
    ],
  },
  {
    id: 2,
    name: 'Apple iPhone 13',
    category: 'Mobile Phones',
    imageUrl: 'https://ng.jumia.is/unsafe/product/41/5636313/1.jpg',
    valueScore: 92,
    bestPrice: 480000,
    oldPrice: 520000,
    priceDropPercent: 8,
    summary: 'A powerful and reliable device with a fantastic camera system and A15 Bionic chip.',
    offers: [
        {
            retailer: 'Jumia',
            seller: 'Apple Official',
            price: 485000,
            sellerRating: 4.9,
            deliveryEstimate: '3-5 days',
            url: 'https://www.jumia.com.ng/apple-iphone-13-128gb-blue-313636514.html',
        },
        {
            retailer: 'Slot',
            seller: 'Slot Limited',
            price: 480000,
            sellerRating: 4.9,
            deliveryEstimate: '1-2 days',
            url: 'https://www.jumia.com.ng/apple-iphone-13-128gb-blue-313636514.html',
        },
    ],
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    category: 'Laptops',
    imageUrl: 'https://ng.jumia.is/unsafe/product/96/3890313/1.jpg',
    valueScore: 95,
    bestPrice: 850000,
    summary: 'A premium 2-in-1 laptop with stunning design, powerful performance, and a brilliant OLED display.',
     offers: [
        {
            retailer: 'Konga',
            seller: 'Premium Laptops NG',
            price: 850000,
            sellerRating: 4.8,
            deliveryEstimate: '2-4 days',
            url: 'https://www.jumia.com.ng/hp-spectre-x360-14-intel-core-i7-16gb-ram-1tb-ssd-win-11-stylus-pen-313098369.html',
        },
     ],
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Audio',
    imageUrl: 'https://ng.jumia.is/unsafe/product/88/4183013/1.jpg',
    valueScore: 91,
    bestPrice: 210000,
    oldPrice: 250000,
    priceDropPercent: 16,
    summary: 'Industry-leading noise cancellation and superb sound quality in a comfortable, lightweight design.',
    offers: [
        {
            retailer: 'Jumia',
            seller: 'GadgetHub',
            price: 210000,
            sellerRating: 4.7,
            deliveryEstimate: '4-6 days',
            url: 'https://www.jumia.com.ng/sony-wh-1000xm5-wireless-noise-canceling-headphones-black-310381488.html',
        },
    ]
  },
  {
      id: 5,
      name: 'LG 55" C2 OLED TV',
      category: 'Televisions',
      imageUrl: 'https://ng.jumia.is/unsafe/product/99/0881013/1.jpg',
      valueScore: 89,
      bestPrice: 720000,
      summary: 'Stunning picture quality with perfect blacks and vibrant colors, ideal for movies and gaming.',
       offers: [
        {
            retailer: 'Konga',
            seller: 'Home Electronics',
            price: 720000,
            sellerRating: 4.9,
            deliveryEstimate: '3-5 days',
            url: 'https://www.jumia.com.ng/lg-55-inch-c2-series-class-oled-evo-gallery-edition-smart-tv-310188099.html',
        },
     ],
  }
];

export const mockPriceHistory: { [key: number]: PriceHistoryPoint[] } = {
  1: [
    { date: '90 days ago', price: 265000 },
    { date: '60 days ago', price: 260000 },
    { date: '30 days ago', price: 255000 },
    { date: '15 days ago', price: 250000 },
    { date: 'Today', price: 245500 },
  ],
  2: [
    { date: '90 days ago', price: 530000 },
    { date: '60 days ago', price: 525000 },
    { date: '30 days ago', price: 500000 },
    { date: '15 days ago', price: 490000 },
    { date: 'Today', price: 480000 },
  ],
  3: [
    { date: '90 days ago', price: 880000 },
    { date: '60 days ago', price: 870000 },
    { date: '30 days ago', price: 865000 },
    { date: '15 days ago', price: 855000 },
    { date: 'Today', price: 850000 },
  ],
  4: [
    { date: '90 days ago', price: 250000 },
    { date: '60 days ago', price: 248000 },
    { date: '30 days ago', price: 225000 },
    { date: '15 days ago', price: 220000 },
    { date: 'Today', price: 210000 },
  ],
  5: [
    { date: '90 days ago', price: 750000 },
    { date: '60 days ago', price: 740000 },
    { date: '30 days ago', price: 730000 },
    { date: '15 days ago', price: 725000 },
    { date: 'Today', price: 720000 },
  ]
};

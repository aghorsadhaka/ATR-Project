export interface SadhanaEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  price: number;
  image: string;
  duration: string;
}

export const mockSadhanaEvents: SadhanaEvent[] = [
  {
    id: 'event1',
    title: 'Full Moon Meditation',
    description: 'Join a guided meditation under the full moon.',
    date: '2025-11-28',
    price: 0,
    image: '/images/event1.jpg',
    duration: '2 hours',
  },
  {
    id: 'event2',
    title: 'Sunrise Yoga Sadhana',
    description: 'Start your day with energizing yoga and chants.',
    date: '2025-12-05',
    price: 10,
    image: '/images/event2.jpg',
    duration: '1.5 hours',
  },
];
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  cover: string;
  isFree: boolean;
}

export const mockBooks: Book[] = [
  {
    id: 'book1',
    title: 'The Art of Meditation',
    author: 'Gyan Sharma',
    description: 'A complete guide on meditation techniques.',
    price: 0,
    cover: '/images/book1.jpg',
    isFree: true,
  },
  {
    id: 'book2',
    title: 'Tantra for Beginners',
    author: 'Anita Desai',
    description: 'Introduction to tantra practices.',
    price: 9.99,
    cover: '/images/book2.jpg',
    isFree: false,
  },
  // Add more books here as needed
];

/* Store related Data Items*/

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 'product1',
    name: 'Meditation Cushion',
    description: 'Comfortable cushion for extended meditation sessions.',
    price: 45.00,
    image: '/images/cushion.jpg',
    category: 'Meditation',
    inStock: true,
  },
  {
    id: 'product2',
    name: 'Tibetan Singing Bowl',
    description: 'Handcrafted singing bowl for sound healing.',
    price: 85.00,
    image: '/images/singing-bowl.jpg',
    category: 'Sound Healing',
    inStock: true,
  },
  {
    id: 'product3',
    name: 'Incense Set',
    description: 'Premium incense sticks for spiritual practice.',
    price: 25.00,
    image: '/images/incense.jpg',
    category: 'Aromatherapy',
    inStock: false,
  },
];

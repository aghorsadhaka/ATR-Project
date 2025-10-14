import { mockProducts } from '@/app/lib/mockData';
import ProductCard from '@/app/components/ProductCard';

export default function StorePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Spiritual Store</h2>
      <p className="text-gray-600 mb-8">Essential items for your spiritual practice</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

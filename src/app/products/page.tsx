import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Habesha Store Catalogue</h1>
            <p className="text-gray-600 mt-1">Explore authentic coffee, spices, and traditional crafts.</p>
          </div>
          <Link href="/" className="text-amber-700 hover:underline font-medium text-sm">
            &larr; Back to Home
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

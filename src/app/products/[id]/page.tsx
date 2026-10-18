import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <div className="mb-6">
          <Link href="/products" className="text-amber-700 hover:underline font-medium text-sm">
            &larr; Back to Catalogue
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 w-full rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">{product.category}</span>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
            <p className="text-2xl font-bold text-amber-800 mt-3">ETB {product.price}</p>
            <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.available ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="mt-8">
              <button
                disabled={!product.available}
                className="w-full bg-amber-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-amber-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full mb-3 rounded overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">{product.category}</span>
        <h3 className="font-bold text-lg mt-1 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">ETB {product.price}</span>
        <Link
          href={`/products/${product.id}`}
          className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
    >
      {/* Product Image */}
      <div className="h-56 p-4 flex items-center justify-center bg-gray-50 rounded-t-xl relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-contain"
          priority={false}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col grow">
        <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>

        <p className="text-sm text-gray-500 capitalize mt-1">
          {product.category}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <span className="text-sm text-yellow-500">
            ⭐ {product.rating?.rate}
          </span>
        </div>

        {/* Spacer */}
        <div className="grow"></div>

        {/* Add To Cart Button */}
        <button
          // onClick={(e) => handleAddToCart(e, product)}
          className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

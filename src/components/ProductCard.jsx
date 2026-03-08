"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    // Your cart logic here
    console.log("Added to cart:", product.name);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 overflow-hidden h-full">
      
      {/* 1. Link Overlay: Makes the whole card clickable without wrapping the button in an <a> tag */}
      <Link href={`/products/${product._id}`} className="absolute inset-0 z-0">
        <span className="sr-only">View details for {product.name}</span>
      </Link>

      {/* 2. Image Section */}
      <div className="relative aspect-[4/3] w-full bg-gray-50/50 overflow-hidden flex items-center justify-center">
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide text-gray-700 shadow-sm border border-gray-100">
          {product.category}
        </div>

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
      </div>

      {/* 3. Content Section */}
      <div className="flex flex-col flex-grow p-5">
        
        {/* Title & Rating */}
        <div className="flex justify-between items-start gap-3 mb-2">
          <h2 className="font-bold text-gray-900 leading-tight line-clamp-2 text-lg">
            {product.name}
          </h2>
          
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md shrink-0 border border-amber-100/50">
            <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-amber-700 text-sm">
              {/* Formats 3.12 to 3.1 */}
              {product.rating.toFixed(1)} 
            </span>
            <span className="text-amber-600/60 text-xs ml-0.5">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Description Preview */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-6">
          {product.description}
        </p>

        {/* Spacer to push price/button to the bottom */}
        <div className="grow"></div>

        {/* 4. Price & Action Section */}
        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
              Price
            </span>
            <span className="text-2xl font-extrabold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
          </div>

          {/* Button needs relative and z-10 to sit above the invisible Link overlay */}
          <button
            onClick={handleAddToCart}
            className="relative z-10 flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
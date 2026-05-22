import React from "react";
import { Product } from "../types";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  key?: string;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // Calculate savings percentage
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 overflow-hidden flex flex-col group relative">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
        {product.popular && (
          <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            সেরা বিক্রীত
          </span>
        )}
        <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm w-fit">
          {discountPercent}% ছাড়
        </span>
      </div>

      {/* Quantity Weight Badge on Right */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {product.weight}
        </span>
      </div>

      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-amber-50/50 p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.bengaliName}
          referrerPolicy="no-referrer"
          className="object-contain max-h-[85%] group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Decorative faint amber circle background behind jar */}
        <div className="absolute w-44 h-44 bg-amber-200/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow relative z-10 bg-white">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
          <span className="text-xs text-gray-400 font-medium ml-1">(৪৮ রিভিউ)</span>
        </div>

        <h3 className="text-xl font-bold text-amber-950 mb-2 leading-tight group-hover:text-amber-600 transition-colors">
          {product.bengaliName}
        </h3>
        
        <p className="text-xs text-amber-800/60 font-mono tracking-wide uppercase mb-3">
          {product.name}
        </p>

        <p className="text-sm text-gray-600 mb-6 line-clamp-3">
          {product.description}
        </p>

        {/* Pricing & Add to Cart */}
        <div className="mt-auto pt-4 border-t border-amber-50 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-amber-950">
              ৳ {product.price.toLocaleString("bn-BD")}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ৳ {product.originalPrice.toLocaleString("bn-BD")}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-amber-50 px-4 py-2.5 rounded-xl font-semibold transition-all shadow-md active:scale-95 cursor-pointer max-sm:px-3 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>কার্টে যোগ করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
}

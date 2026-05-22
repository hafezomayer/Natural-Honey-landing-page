import { HONEY_PRODUCTS, Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
            আমাদের পণ্যসমূহ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-amber-950 tracking-tight leading-tight">
            আমাদের সেরা প্রিমিয়াম প্রাকৃতিক মধু কালেকশন
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            সম্পূর্ণ হাত দিয়ে সংগৃহীত বিশুদ্ধতা নিশ্চিত প্রতিটি বোতলে। নিচের যেকোনো প্রকার পছন্দ করুন এবং সরাসরি কার্টে যোগ করে অর্ডার করুন:
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HONEY_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

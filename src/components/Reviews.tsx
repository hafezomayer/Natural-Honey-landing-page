import { Star, MessageSquare } from "lucide-react";
import { Review } from "../types";

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gradient-to-br from-transparent via-amber-500/5 to-amber-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 lg:space-y-16">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
            গ্রাহকদের প্রতিক্রিয়া
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-amber-950 tracking-tight leading-tight">
            আমাদের খাঁটি মধু নিয়ে খুশি গ্রাহকদের মতামত
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            দেশজুড়ে হাজারো সন্তুষ্ট গ্রাহকদের মধ্য থেকে কিছু নির্বাচিত মতামত নিচে তুলে ধরা হলো:
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left h-full relative"
            >
              {/* Quote bubble absolute watermark */}
              <div className="absolute top-4 right-6 text-amber-500/10 pointer-events-none">
                <MessageSquare className="w-16 h-16 fill-current" />
              </div>

              <div className="space-y-5 relative z-10">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-amber-50/80 relative z-10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-amber-950">{review.name}</h4>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{review.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

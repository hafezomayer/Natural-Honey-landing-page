import { ArrowRight, ShoppingBag, ShieldCheck, Heart } from "lucide-react";

interface HeroProps {
  onOrderNowClick: () => void;
}

export default function Hero({ onOrderNowClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-amber-50/60 via-amber-100/10 to-transparent">
      {/* Decorative Bee Rhythms & Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left">
            
            {/* Tagline Badges */}
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/20 text-amber-950 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
                🐝 সরাসরি খামার থেকে সংগৃহীত
              </span>
              <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-700 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
                ❤️ ১০০% খাঁটি গ্যারান্টি
              </span>
            </div>

            {/* Headline and descriptions */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 tracking-tight leading-tight lg:leading-[1.15]">
                প্রাকৃতিক মধু <br />
                <span className="text-amber-600 drop-shadow-xs">
                  সরাসরি আপনার দরজায়!
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                সুন্দরবন ও আমাদের বিশ্বস্ত মৌ-খামার থেকে সংগৃহীত সম্পূর্ণ খাঁটি, অরগানিক এবং প্রাকৃতিক মধু নিয়ে এসেছি আপনার জন্য। কৃত্রিম প্রক্রিয়াজাতকরণ ছাড়া মধুর আসল পুষ্টি ও স্বাদ এখন আপনার হাতে।
              </p>
            </div>

            {/* USP Points */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-100 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm text-amber-900 font-bold select-none">১০০% ল্যাব-পরীক্ষিত</span>
              </div>
              <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-100 flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm text-amber-900 font-bold select-none">ক্যাশ অন ডেলিভারি</span>
              </div>
              <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-100 flex items-center gap-3">
                <Heart className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm text-amber-900 font-bold select-none">কোন প্রকার ভেজাল নেই</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOrderNowClick}
                className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-amber-50 font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] cursor-pointer"
              >
                <span>আজই অর্ডার করুন</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <a
                href="#about"
                className="flex items-center justify-center gap-2 border-2 border-amber-205 hover:bg-amber-100/40 text-amber-950 font-bold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all cursor-pointer"
              >
                <span>আরো জানুন</span>
              </a>
            </div>

          </div>

          {/* Hero Image / Jar graphic container */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Hexagon Pattern Grid or blob decorative backplates */}
            <div className="absolute inset-0 bg-radial-gradient from-amber-400/20 to-transparent rounded-full filter blur-3xl -z-10 pointer-events-none scale-110"></div>
            
            <div className="relative max-w-sm sm:max-w-md lg:max-w-full w-full rounded-3xl overflow-hidden border border-amber-100 shadow-2xl bg-amber-50/20 p-2">
              <img
                src="/src/assets/images/honey_hero_banner_1779373197010.png"
                alt="Premium Honey Jar Product Shot"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-amber-100/50 flex items-center justify-between text-left shadow-md">
                <div>
                  <h4 className="text-sm font-bold text-amber-950">খাঁটি সরিষা ফুলের মধু</h4>
                  <p className="text-xs text-gray-500">বিশেষ ঋতুভিত্তিক অফার</p>
                </div>
                <div className="flex items-center gap-1 bg-amber-500 text-white font-extrabold text-sm py-1.5 px-3 rounded-lg">
                  ৫০০ গ্রাম
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

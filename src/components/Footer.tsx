import { MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-amber-200/90 pt-16 pb-8 border-t border-amber-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer layout */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-amber-900/60 items-start text-left">
          
          {/* Column 1: Info and logo */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 text-amber-950 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-amber-50"
                >
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v1.272a9.004 9.004 0 0 1 7.151 8.228H21a.75.75 0 0 1 0 1.5h-1.124a9.004 9.004 0 0 1-7.151 8.228V21a.75.75 0 0 1-1.5 0v-1.022a9.004 9.004 0 0 1-7.151-8.228H3a.75.75 0 0 1 0-1.5h1.124a9.004 9.004 0 0 1 7.151-8.228V3a.75.75 0 0 1 .75-.75Zm0 3.751A7.502 7.502 0 0 0 5.253 12h13.494A7.502 7.502 0 0 0 12 6.001Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                প্রাকৃতিক মধু
              </span>
            </div>
            
            <p className="text-sm text-amber-100/60 leading-relaxed">
              আমরা কোনো প্রকার ভেজালহীন খাঁটি এবং প্রাকৃতিক সুন্দরবনের ও খামারের সংগৃহীত মধু বিক্রি করি। আপনাদের সুস্বাস্থ্য এবং সন্তুষ্টিই আমাদের প্রধান কাম্য।
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">দ্রুত লিংক সমূহ</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">হোম</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">আমাদের সম্পর্কে</a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">আমাদের মধু</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-amber-400 transition-colors">উপকারিতা</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">রিভিউ</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location / Map Placeholder */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-4 h-4 text-amber-500" /> খামারের গুগল ম্যাপ লোকেশন
            </h4>

            {/* Custom crafted layout with clean aesthetic styling of mock maps */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-900 bg-amber-900/30 h-40 flex items-center justify-center text-center p-4">
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#d97706 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              ></div>
              <div className="space-y-2 relative z-10">
                <span className="block text-2xl">📍</span>
                <p className="text-xs font-bold text-white leading-normal">
                  মৌ-খামার এভিনিউ, সুন্দরবন রোড, খুলনা, বাংলাদেশ।
                </p>
                <span className="inline-block text-[10px] bg-amber-500/10 text-amber-400 font-semibold px-2.5 py-1 rounded-full border border-amber-500/20">
                  অরগানিক মৌচাক জোন
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-amber-100/40 gap-4">
          <p>© {year} প্রাকৃতিক মধু ডট কম। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">প্রাইভেসি পলিসি</a>
            <a href="#terms" className="hover:text-amber-400 transition-colors">শর্তাবলী</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

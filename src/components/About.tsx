import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "কখনো উত্তপ্ত (heating) করা হয় না, যার ফলে সব পুষ্টি অক্ষুণ্ণ থাকে।",
    "রাসায়নিক মুক্ত ও সম্পূর্ণ প্রাকৃতিক ফিল্টারিং পদ্ধতি ব্যবহার করা হয়।",
    "সুন্দরবনের গহীন থেকে শুরু করে স্থানীয় বিশ্বস্ত মৌপালকদের খামার থেকে সংগৃহীত।",
    "বিএসটিআই বা স্বীকৃত ল্যাব পরীক্ষার মাধ্যমে সর্বোচ্চ বিশুদ্ধতা যাচাই করা হয়।",
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Harvesting graphic / farm image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl z-0"></div>
            
            <div className="relative rounded-3xl overflow-hidden border border-amber-100 shadow-xl bg-amber-50/10 p-2.5">
              <img
                src="/images/honey_harvesting_1779373217821.png"
                alt="Honey Harvesting Bee Farm"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-amber-500 text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-md">
                খামারের জীবন্ত দৃশ্য
              </div>
            </div>
          </div>

          {/* Text content details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
                মধু কিভাবে আসে?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-amber-950 tracking-tight leading-tight">
                আমাদের খাঁটি ও প্রাকৃতিক মধু সংগ্রহের মূল গল্প
              </h2>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              আজকের দিনে রাসায়নিক ও ভেজালের ভিড়ে খাঁটি পণ্য পাওয়া খুব কঠিন। আমরা প্রতিজ্ঞা করেছি আপনাদের সুস্থ জীবনের অংশ হতে এবং খাঁটি স্বাদ উপহার দিতে। আমাদের মধু সরাসরি মৌচাক থেকে অত্যন্ত যত্ন ও হাইজেনিক প্রক্রিয়ায় নিখুঁতভাবে বোতলজাত করা হয়। 
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              মধু সংগ্রহের সময় মৌমাছিদের ক্ষতি না করার বিষয়টিকে আমরা বিশেষভাবে গুরুত্ব দিই। অর্গানিক পদ্ধতিতে খামারিদের থেকে শ্রেষ্ঠ মধু বাছাই করে আমাদের নিজস্ব ল্যাবে কোয়ালিটি টেস্ট সম্পন্ন করা হয়। তাই প্রতিটি ফোঁটায় থাকে খাঁটি সুস্বাস্থ্য এবং মধুর অরিজিনাল টেস্ট।
            </p>

            {/* List checklist points */}
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {points.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-amber-950 font-bold">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

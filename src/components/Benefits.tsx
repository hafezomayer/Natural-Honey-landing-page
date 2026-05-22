import { Trees, ShieldCheck, Award, Truck } from "lucide-react";
import { Benefit } from "../types";

interface BenefitsProps {
  benefits: Benefit[];
}

export default function Benefits({ benefits }: BenefitsProps) {
  // Render Lucide icon based on name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Trees":
        return <Trees className="w-8 h-8 text-amber-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-amber-600" />;
      case "Award":
        return <Award className="w-8 h-8 text-amber-600" />;
      case "Truck":
        return <Truck className="w-8 h-8 text-amber-600" />;
      default:
        return <Award className="w-8 h-8 text-amber-600" />;
    }
  };

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-amber-500/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 lg:space-y-16">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
            কেন আমাদের মধু সেরা?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-amber-950 tracking-tight leading-tight">
            আমাদের খাঁটি মধুর স্বাস্থ্যকর সুবিধা ও বৈশিষ্ট্যসমূহ
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            প্রিমিয়াম কোয়ালিটি নিশ্চিত করাই আমাদের ব্যবসার প্রধান লক্ষ্য। নিচে আমাদের মধুর অনন্য গুণাবলী দেওয়া হলো:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 hover:border-amber-300 shadow-xs hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between group h-full"
            >
              <div className="space-y-5">
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {renderIcon(benefit.iconName)}
                </div>
                {/* Text attributes */}
                <div className="space-y-2">
                  <h3 className="text-lg lg:text-xl font-bold text-amber-950">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

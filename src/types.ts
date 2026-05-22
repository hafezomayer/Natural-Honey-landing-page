export interface Product {
  id: string;
  name: string;
  bengaliName: string;
  description: string;
  price: number;
  originalPrice: number;
  weight: string;
  image: string;
  popular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  avatar: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const HONEY_PRODUCTS: Product[] = [
  {
    id: "sundarban",
    name: "Sundarban Khalisha Flower Honey",
    bengaliName: "সুন্দরবনের খলিশা মধু",
    description: "সুন্দরবনের গহীনের খলিশা ফুলের খাঁটি মধু। হালকা রঙের, অত্যন্ত সুস্বাদু এবং মৃদু ফুলজ সুবাসযুক্ত।",
    price: 950,
    originalPrice: 1200,
    weight: "৫০০ গ্রাম",
    image: "/images/sundarban_honey_1779373236945.png",
    popular: true,
  },
  {
    id: "kalajira",
    name: "Black Seed (Kalajira) Flower Honey",
    bengaliName: "কালোজিরা ফুলের মধু",
    description: "কালোজিরা ফুলের নেক্টার থেকে তৈরি এই মধু ঘন কালচে রঙের এবং ওষুধি গুণে ভরপুর। সর্বরোগের মহৌষধ হিসেবে সমাদৃত।",
    price: 750,
    originalPrice: 900,
    weight: "৫০০ গ্রাম",
    image: "/images/kalajira_honey_1779373258364.png",
    popular: false,
  },
  {
    id: "litchi",
    name: "Litchi Flower Honey",
    bengaliName: "লিচু ফুলের মধু",
    description: "লিচু বাগান থেকে উৎপাদিত হালকা সোনালী রঙের সুমিষ্ট মধু। চমৎকার সুগন্ধ এবং হালকা স্বাদের জন্য সবার প্রিয়।",
    price: 500,
    originalPrice: 650,
    weight: "৫০০ গ্রাম",
    image: "/images/litchi_honey_1779373276201.png",
    popular: false,
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: "purity",
    title: "১০০% খাঁটি ও প্রাকৃতিক",
    description: "আমাদের প্রতিটি ফোঁটা মধু সরাসরি মৌচাক থেকে সংগ্রহ করা হয়। কোনো প্রকার কৃত্রিম চিনি, প্রিজারভেটিভ বা ভেজাল মেশানো হয় না।",
    iconName: "Trees",
  },
  {
    id: "premium",
    title: "অরগানিক ও স্বাস্থ্যকর",
    description: "প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট, এনজাইম এবং ভিটামিনে ভরপুর যা আপনার রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে এবং শক্তি যোগায়।",
    iconName: "ShieldCheck",
  },
  {
    id: "lab",
    title: "পরীক্ষিত মান",
    description: "সংগ্রহের পর আমাদের প্রতিটি ব্যাচ ল্যাব টেস্টের মাধ্যমে বিশুদ্ধতা নিশ্চিত করা হয়, যেন আপনি পান সেরা মানের আসল স্বাদ।",
    iconName: "Award",
  },
  {
    id: "delivery",
    title: "দ্রুত ও নিরাপদ হোম ডেলিভারি",
    description: "সারা বাংলাদেশে আমরা ক্যাশ অন ডেলিভারি সুবিধা প্রদান করি। নিরাপদে এবং দ্রুততম সময়ে পণ্য আপনার দোরগোড়ায়।",
    iconName: "Truck",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "ডা: আনোয়ার হোসেন",
    rating: 5,
    comment: "আমি কালোজিরা ফুলের মধু কিনেছি। বাজারের সাধারণ মধুর চেয়ে স্বাদ এবং ঘনত্ব অনেক উন্নত। এর ওষুধি গুণ টের পেয়েছি। খাঁটি জিনিস প্রদানের জন্য ধন্যবাদ!",
    location: "মিরপুর, ঢাকা",
    avatar: "https://picsum.photos/seed/doctor1/100/100",
  },
  {
    id: "2",
    name: "নুসরাত পারভীন",
    rating: 5,
    comment: "বাচ্চাদের প্রতিদিন সকালে সুন্দরবনের খলিশা মধু খাওয়াই। তারা এর অতুলনীয় সুগন্ধ এবং মিষ্টি স্বাদ খুব পছন্দ করে। ডেলিভারি মাত্র ২ দিনে পেয়েছি!",
    location: "খুলনা",
    avatar: "https://picsum.photos/seed/nusrat/100/100",
  },
  {
    id: "3",
    name: "সাকিব চৌধুরী",
    rating: 5,
    comment: "লিচু ফুলের মধুর বোতলটা খোলার সাথে সাথে চমৎকার একটা সুবাস এলো। কালার খুবই ফ্রেশ। একদম নির্ভেজাল প্রাকৃতিক মধু। নিঃসন্দেহে আবার অর্ডার করবো।",
    location: "সিলেট",
    avatar: "https://picsum.photos/seed/shakib/100/100",
  },
];

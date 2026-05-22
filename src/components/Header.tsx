import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "হোম", href: "#home" },
    { name: "আমাদের সম্পর্কে", href: "#about" },
    { name: "আমাদের মধু", href: "#products" },
    { name: "উপকারিতা", href: "#benefits" },
    { name: "রিভিউ", href: "#reviews" },
    { name: "যোগাযোগ", href: "#contact" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-amber-50/95 backdrop-blur-md shadow-md py-3 border-b border-amber-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-amber-500 text-white p-2 rounded-full shadow-inner group-hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-amber-50"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v1.272a9.004 9.004 0 0 1 7.151 8.228H21a.75.75 0 0 1 0 1.5h-1.124a9.004 9.004 0 0 1-7.151 8.228V21a.75.75 0 0 1-1.5 0v-1.022a9.004 9.004 0 0 1-7.151-8.228H3a.75.75 0 0 1 0-1.5h1.124a9.004 9.004 0 0 1 7.151-8.228V3a.75.75 0 0 1 .75-.75Zm0 3.751A7.502 7.502 0 0 0 5.253 12h13.494A7.502 7.502 0 0 0 12 6.001Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-amber-900 tracking-tight leading-none">
                প্রাকৃতিক মধু
              </span>
              <span className="text-[10px] text-amber-700 tracking-widest font-medium uppercase mt-0.5">
                100% Pure & Organic
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-amber-900/80 hover:text-amber-600 font-medium transition-colors text-sm lg:text-base cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Utilities (Cart & Contact & Call) */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+8801700000000"
              className="hidden lg:flex items-center gap-2 bg-amber-100/50 hover:bg-amber-100 border border-amber-200 text-amber-950 px-4 py-2 rounded-full text-sm font-semibold transition-all"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>০১৭০০০০০০০০</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 bg-amber-500 hover:bg-amber-600 text-amber-50 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] sm:text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-amber-50 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-amber-50/98 backdrop-blur-md z-40 transition-transform duration-300">
          <nav className="flex flex-col p-6 space-y-4 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-amber-950 font-semibold text-lg border-b border-amber-100 pb-2 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+8801700000000"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold transition-colors w-full mt-4 shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>কল করুন: ০১৭০০০০০০০০</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

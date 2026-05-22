import { useState } from "react";
import { Product, CartItem, BENEFITS, REVIEWS } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Add to cart helper with success toast
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });

    // Show a beautiful custom toast message
    setToastMessage(`"${product.bengaliName}" সফলভাবে কার্টে যোগ করা হয়েছে!`);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen flex flex-col font-sans select-none antialiased">
      
      {/* Dynamic Toast Notification popup */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm animate-bounce flex items-center gap-3 bg-amber-950 text-white rounded-2xl px-5 py-4 shadow-xl border border-amber-500/20">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-amber-950 font-bold">
            ✓
          </div>
          <div className="flex-1 text-left text-sm font-semibold">
            {toastMessage}
          </div>
          <button
            onClick={() => setToastMessage("")}
            className="text-amber-500 hover:text-white font-bold ml-2"
          >
            ×
          </button>
        </div>
      )}

      {/* Adhesive Sticky Navigation Header */}
      <Header cartCount={totalCartCount} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Presentation Header */}
      <Hero onOrderNowClick={handleScrollToProducts} />

      {/* Floating Sticky Cart Indicator on Right (visible on desktop) */}
      {totalCartCount > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-24 right-6 z-30 flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all text-sm cursor-pointer border border-amber-400"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>কার্ট দেখুন ({totalCartCount})</span>
        </button>
      )}

      {/* About Section */}
      <About />

      {/* Products Presentation Section */}
      <Products onAddToCart={handleAddToCart} />

      {/* Benefits USP Section */}
      <Benefits benefits={BENEFITS} />

      {/* Reviews & Testimonials Section */}
      <Reviews reviews={REVIEWS} />

      {/* Call to Action Section (Section 6) */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-amber-50/50 to-amber-100/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-amber-400/10 to-transparent pointer-events-none scale-105"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
            আজই আপনার পছন্দের বিশুদ্ধ মধু অর্ডার করুন!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            কোন ঝামেলা ছাড়াই সরাসরি অর্গানিক খামারের খাঁটি মধু পান ক্যাশ অন ডেলিভারিতে। ফ্রি হোম ডেলিভারি পেতে আজই ২,০০০ টাকার সমপরিমাণ মধু অর্ডার করুন।
          </p>
          <div className="pt-4">
            <button
              onClick={handleScrollToProducts}
              className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg py-4 px-10 rounded-2xl shadow-lg transition-transform hover:translate-y-[-1px] cursor-pointer"
            >
              <span>আজই মধু কিনুন</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* End Footer copyright and map details */}
      <Footer />

      {/* Cart Drawer sliding view overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

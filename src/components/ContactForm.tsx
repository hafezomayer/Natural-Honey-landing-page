import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg("দয়া করে প্রয়োজনীয় সবগুলি তথ্য পূরণ করুন।");
      return;
    }
    setErrorMsg("");
    setIsSuccess(true);
    // Reset fields
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
            যোগাযোগ করুন
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-amber-950 tracking-tight leading-tight">
            যেকোনো প্রশ্ন অথবা বাল্ক অর্ডারের জন্য লিখুন
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            আপনি পাইকারি ও খুচরা বিক্রির যেকোনো প্রয়োজনে যোগাযোগ করতে পারেন। আমাদের কাস্টমার কেয়ার টিম সর্বদা আপনাকে সাহায্য করতে প্রস্তুত।
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left panel contact information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-amber-500/5 p-8 rounded-3xl border border-amber-100 flex flex-col justify-between h-full space-y-8">
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-amber-950">আমাদের তথ্য</h3>
                <p className="text-sm text-gray-500">
                  নিচের তথ্যের মাধ্যমে যেকোনো সময় আমাদের সাথে যোগাযোগ করতে পারেন:
                </p>
              </div>

              {/* Items */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-amber-500 text-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">হটলাইন</h4>
                    <p className="text-lg font-bold text-amber-950 mt-1">০১৭০০০০০০০০</p>
                    <p className="text-xs text-gray-500">সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-amber-500 text-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">ইমেইল</h4>
                    <p className="text-lg font-bold text-amber-950 mt-1">info@prakritikmodhu.com</p>
                    <p className="text-xs text-gray-500">আপনাদের মতামত ও কোয়ারি পাঠান</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-amber-500 text-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">প্রধান কার্যালয় / খামার</h4>
                    <p className="text-lg font-bold text-amber-950 mt-1 leading-snug">মৌ-খামার এভিনিউ, সুন্দরবন রোড, খুলনা, বাংলাদেশ।</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-amber-200/50 flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white hover:bg-amber-100 border border-amber-200/50 rounded-full flex items-center justify-center text-amber-900 shadow-xs transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white hover:bg-amber-100 border border-amber-200/50 rounded-full flex items-center justify-center text-amber-900 shadow-xs transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white hover:bg-emerald-100 border border-emerald-200/50 rounded-full flex items-center justify-center text-emerald-600 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-5 h-5 fill-current text-emerald-600" />
                </a>
              </div>

            </div>
          </div>

          {/* Right panel Contact Form */}
          <div className="lg:col-span-7 bg-amber-50/20 p-6 sm:p-10 rounded-3xl border border-amber-100/50 text-left">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="text-sm text-red-500 font-semibold bg-red-50 p-3 rounded-xl border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-amber-950 mb-1.5" htmlFor="name">
                      আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="যেমন: আহসান হাবিব"
                      className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-amber-950 mb-1.5" htmlFor="phone">
                      মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="যেমন: ০১৭XXXXXXXX"
                      className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-amber-950 mb-1.5" htmlFor="email">
                    ইমেইল ঠিকানা (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="যেমন: ahsan@gmail.com"
                    className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-amber-950 mb-1.5" htmlFor="message">
                    আপনার বার্তা <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="মধুর পরিমাণ বা আপনার কোনো কুয়েরি এখানে লিখুন..."
                    className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base md:text-lg py-4 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>বার্তা পাঠান</span>
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-amber-950">বার্তা সফলভাবে পাঠানো হয়েছে!</h3>
                  <p className="text-sm text-gray-500">
                    আমাদের সাপোর্ট টিম আপনার সাথে দ্রুত মোবাইলে বা ইমেইলে যোগাযোগ করবে।
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  আরেকটি বার্তা পাঠান
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

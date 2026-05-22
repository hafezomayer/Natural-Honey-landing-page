import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, Gift, CheckCircle } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [deliveryRegion, setDeliveryRegion] = useState<"inside" | "outside">("inside");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const itemTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingCharge = deliveryRegion === "inside" ? 80 : 150;
  const grandTotal = itemTotal > 0 ? itemTotal + shippingCharge : 0;

  // Form Submission handles mock checkout confirmation
  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      setErrorMsg("দয়া করে সবগুলি প্রয়োজনীয় তথ্য প্রদান করুন।");
      return;
    }
    if (customerPhone.length < 11) {
      setErrorMsg("সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন।");
      return;
    }
    setErrorMsg("");
    // Process Checkout
    setIsSubmitSuccess(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSubmitSuccess(false);
    setCustomerName("");
    setCustomerPhone("");
    setCustomerAddress("");
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background Dim Backdrop */}
      <div
        className="absolute inset-0 bg-amber-950/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={isSubmitSuccess ? handleCloseSuccessModal : onClose}
      ></div>

      {/* Cart Container Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-amber-50/98 shadow-2xl flex flex-col h-full border-l border-amber-100 relative">
          
          {/* Header */}
          <div className="p-5 border-b border-amber-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-amber-950">আপনার শপিং কার্ট</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-amber-100 rounded-full text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {!isSubmitSuccess ? (
            <>
              {/* Content body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-80 text-center space-y-4">
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-950">কার্ট খালি আছে</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        আমাদের পণ্যগুলো দেখুন এবং আপনার পছন্দের মধু কার্টে যোগ করুন।
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md cursor-pointer transition-colors"
                    >
                      কেনাকাটা শুরু করুন
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Free shipping banner if total > 2000 */}
                    {itemTotal >= 2000 ? (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm p-3.5 rounded-xl flex items-center gap-2">
                        <Gift className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>অভিনন্দন! আপনি <strong>ফ্রি শিপিং</strong> বোনাস পেয়েছেন!</span>
                      </div>
                    ) : (
                      <div className="bg-amber-100/50 border border-amber-200 text-amber-900 text-xs p-3.5 rounded-xl flex items-center gap-2">
                        <Gift className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>৳২,০০০ বা তার বেশি কিনলেই ঢাকার ভেতর <strong>ফ্রি ডেলিভারি</strong>!</span>
                      </div>
                    )}

                    {/* Cart Items List */}
                    <div className="space-y-3.5">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="bg-white p-3 rounded-2xl border border-amber-100/60 shadow-xs flex items-center gap-3 relative group"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.bengaliName}
                            className="w-16 h-16 object-contain bg-amber-50 rounded-xl"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-amber-950 leading-tight">
                              {item.product.bengaliName}
                            </h4>
                            <p className="text-xs text-gray-400 font-medium mt-0.5">
                              {item.product.weight}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-sm font-extrabold text-amber-900">
                                ৳{(item.product.price * item.quantity).toLocaleString("bn-BD")}
                              </span>
                              
                              {/* Quantity selectors */}
                              <div className="flex items-center border border-amber-100 bg-amber-50 rounded-lg overflow-hidden">
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                  className="px-2 py-1 hover:bg-amber-100 text-amber-950 transition-colors cursor-pointer"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-3 py-0.5 text-xs font-bold text-amber-950">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                  className="px-2 py-1 hover:bg-amber-100 text-amber-950 transition-colors cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Trash button */}
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-all ml-1"
                            aria-label="Remove Item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Order Details Price Summary */}
                    <div className="border-t border-amber-100 pt-4 space-y-2.5">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>আইটেম সমূহের মূল্য:</span>
                        <span className="font-semibold text-amber-950">৳{itemTotal.toLocaleString("bn-BD")}</span>
                      </div>

                      {/* Delivery Selector */}
                      <div className="bg-white p-3 rounded-xl border border-amber-100 text-xs space-y-2">
                        <span className="font-semibold text-amber-950 flex items-center gap-1">
                          <Truck className="w-3.5 h-3.5 text-amber-600" /> ডেলিভারি এলাকা নির্ধারণ করুন:
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all ${
                            deliveryRegion === "inside"
                              ? "bg-amber-500/10 border-amber-500 text-amber-950 font-semibold"
                              : "border-gray-200 text-gray-500 hover:bg-gray-50"
                          }`}>
                            <input
                              type="radio"
                              name="deliveryRegion"
                              checked={deliveryRegion === "inside"}
                              onChange={() => setDeliveryRegion("inside")}
                              className="accent-amber-600 cursor-pointer hidden"
                            />
                            <span>ঢাকার ভিতরে (৳৮০)</span>
                          </label>
                          <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all ${
                            deliveryRegion === "outside"
                              ? "bg-amber-500/10 border-amber-500 text-amber-950 font-semibold"
                              : "border-gray-200 text-gray-400 hover:bg-gray-50"
                          }`}>
                            <input
                              type="radio"
                              name="deliveryRegion"
                              checked={deliveryRegion === "outside"}
                              onChange={() => setDeliveryRegion("outside")}
                              className="accent-amber-600 cursor-pointer hidden"
                            />
                            <span>ঢাকার বাহিরে (৳১৫০)</span>
                          </label>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                        <span>শিপিং খরচ:</span>
                        <span className="font-semibold text-amber-950">
                          {itemTotal >= 2000 && deliveryRegion === "inside" ? (
                            <span className="text-emerald-600">ফ্রি (৳০)</span>
                          ) : (
                            `৳${shippingCharge.toLocaleString("bn-BD")}`
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between text-base font-extrabold text-amber-950 pt-2 border-t border-dashed border-amber-100">
                        <span>সর্বমোট মূল্য:</span>
                        <span>
                          ৳{(itemTotal >= 2000 && deliveryRegion === "inside" ? itemTotal : grandTotal).toLocaleString("bn-BD")}
                        </span>
                      </div>
                    </div>

                    {/* Order Placement Form (CASH ON DELIVERY) */}
                    <form onSubmit={handleCheckoutSubmit} className="bg-amber-100/50 p-4 rounded-2xl border border-amber-200/50 space-y-3">
                      <h3 className="text-sm font-bold text-amber-950 border-b border-amber-200/50 pb-1.5">
                        ক্যাশ অন ডেলিভারি (অর্ডার সম্পন্ন করুন)
                      </h3>

                      {errorMsg && (
                        <div className="text-xs text-red-500 font-semibold bg-red-50 p-2 rounded-lg border border-red-200">
                          {errorMsg}
                        </div>
                      )}

                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs font-semibold text-amber-900 mb-1" htmlFor="clientName">
                            আপনার নাম <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="clientName"
                            required
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="যেমন: সাকিব আলম"
                            className="w-full text-sm bg-white border border-amber-200 rounded-xl px-3 py-2 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-amber-900 mb-1" htmlFor="clientPhone">
                            মোবাইল নম্বর <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="clientPhone"
                            required
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            placeholder="যেমন: ০১৭XXXXXXXX"
                            className="w-full text-sm bg-white border border-amber-200 rounded-xl px-3 py-2 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-amber-900 mb-1" htmlFor="clientAddress">
                            পূর্ণাঙ্গ ডেলিভারি ঠিকানা <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="clientAddress"
                            required
                            rows={2}
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            placeholder="যেমন: বাসা নং ১২, রোড নং ৩, বনানী, ঢাকা।"
                            className="w-full text-sm bg-white border border-amber-200 rounded-xl px-3 py-2 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-transform active:scale-98 cursor-pointer text-center mt-4"
                      >
                        অর্ডার নিশ্চিত করুন (ক্যাশ অন ডেলিভারি)
                      </button>
                    </form>
                  </>
                )}
              </div>
            </>
          ) : (
            /* Successful Checkout Screen overlay */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 animate-pulse">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-amber-950">ধন্যবাদ, আপনার অর্ডারটি গৃহীত হয়েছে!</h3>
                <p className="text-emerald-700 font-semibold text-sm">
                  আমাদের একজন প্রতিনিধি খুব শীঘ্রই কল করে অর্ডারটি নিশ্চিত করবেন।
                </p>
              </div>

              <div className="bg-white border border-amber-100 p-5 rounded-2xl w-full text-left space-y-3.5 shadow-xs">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest border-b pb-1.5 border-amber-50">
                  অর্ডার বিবরনী
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>গ্রাহকের নাম:</span>
                    <strong className="text-amber-950">{customerName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>মোবাইল নং:</span>
                    <strong className="text-amber-950">{customerPhone}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>ডেলিভারি ঠিকানা:</span>
                    <strong className="text-amber-950 text-right max-w-[200px] truncate">{customerAddress}</strong>
                  </div>
                  <div className="flex justify-between border-t border-dashed pt-2">
                    <span>পরিশোধের মাধ্যম:</span>
                    <strong className="text-emerald-700">ক্যাশ অন ডেলিভারি</strong>
                  </div>
                  <div className="flex justify-between text-base font-bold text-amber-900">
                    <span>সর্বমোট চার্জ:</span>
                    <span>৳{(itemTotal >= 2000 && deliveryRegion === "inside" ? itemTotal : grandTotal).toLocaleString("bn-BD")}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseSuccessModal}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-3 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                পেইজে ফিরে যান
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

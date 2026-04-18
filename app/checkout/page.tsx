'use client';

import { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';

const PAYMENT_METHODS = [
  { id: 'cod', name: 'Cash on Delivery', icon: '💳', description: 'Pay when you receive' },
  { id: 'jazzcash', name: 'JazzCash', icon: '📱', description: 'Mobile wallet' },
  { id: 'easypaisa', name: 'EasyPaisa', icon: '📱', description: 'Mobile wallet' },
  { id: 'bank', name: 'Bank Transfer', icon: '🏦', description: 'Direct bank transfer' },
];

const DELIVERY_METHODS = [
  { id: 'standard', name: 'Standard', price: 150, days: '3-5 days' },
  { id: 'express', name: 'Express', price: 300, days: '1-2 days' },
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Mock cart data
  const cartItems = [
    { id: 1, name: 'Casio Edifice', price: 3500, qty: 1, image: '⌚' },
    { id: 2, name: 'Samsung Galaxy Watch', price: 4700, qty: 1, image: '⌚' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryPrice = deliveryMethod === 'standard' ? 150 : 300;
  const total = subtotal + deliveryPrice - discount;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    area: '',
  });

  const [accountNumber, setAccountNumber] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setDiscount(Math.floor(subtotal * 0.1));
    }
  };

  const handlePlaceOrder = () => {
    window.location.href = '/order-confirmed';
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-light text-[#F5F0E8] mb-2"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Checkout
          </h1>
          <p className="text-[#C9A84C]" style={{ fontFamily: 'DM Sans' }}>
            Complete your order in 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Checkout Form (60%) */}
          <div className="lg:col-span-2">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                      stepNum <= step
                        ? 'bg-[#C9A84C] text-[#0A0A0A]'
                        : 'bg-[#1E1E1E] text-[#C9A84C]'
                    }`}
                    style={{ fontFamily: 'Cinzel' }}
                  >
                    {stepNum < step ? <Check size={20} /> : stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        stepNum < step ? 'bg-[#C9A84C]' : 'bg-[#1E1E1E]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* STEP 1: Contact & Delivery */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2
                  className="text-2xl text-[#C9A84C] mb-6"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  Contact & Delivery
                </h2>

                {/* Contact Info */}
                <div className="space-y-4">
                  <h3
                    className="text-lg text-[#E8C96A]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="space-y-4">
                  <h3
                    className="text-lg text-[#E8C96A]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Delivery Address
                  </h3>
                  <input
                    type="text"
                    name="address"
                    placeholder="Full Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                    <input
                      type="text"
                      name="area"
                      placeholder="Area / Sector"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </div>
                </div>

                {/* Delivery Methods */}
                <div className="space-y-4">
                  <h3
                    className="text-lg text-[#E8C96A]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Delivery Method
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {DELIVERY_METHODS.map((method) => (
                      <label
                        key={method.id}
                        className={`p-4 border rounded-sm cursor-pointer transition-all ${
                          deliveryMethod === method.id
                            ? 'border-[#C9A84C] bg-[#0D0D0D]'
                            : 'border-[#1E1E1E] hover:border-[#8B6914]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="delivery"
                          value={method.id}
                          checked={deliveryMethod === method.id}
                          onChange={(e) => setDeliveryMethod(e.target.value)}
                          className="hidden"
                        />
                        <div
                          className={`text-lg font-medium ${
                            deliveryMethod === method.id
                              ? 'text-[#C9A84C]'
                              : 'text-[#F5F0E8]'
                          }`}
                          style={{ fontFamily: 'Cinzel' }}
                        >
                          {method.name}
                        </div>
                        <div
                          className="text-sm text-[#8B6914] mt-1"
                          style={{ fontFamily: 'DM Sans' }}
                        >
                          PKR {method.price} · {method.days}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full mt-8 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                  style={{
                    fontFamily: 'DM Sans',
                    background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
                    color: '#0A0A0A',
                  }}
                >
                  Continue to Payment
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* STEP 2: Payment Method */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2
                  className="text-2xl text-[#C9A84C] mb-6"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  Payment Method
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {PAYMENT_METHODS.map((method) => (
                    <label
                      key={method.id}
                      className={`p-4 border rounded-sm cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? 'border-[#C9A84C] bg-[#0D0D0D]'
                          : 'border-[#1E1E1E] hover:border-[#8B6914]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="hidden"
                      />
                      <div className="text-2xl mb-2">{method.icon}</div>
                      <div
                        className={`font-medium ${
                          paymentMethod === method.id
                            ? 'text-[#C9A84C]'
                            : 'text-[#F5F0E8]'
                        }`}
                        style={{ fontFamily: 'Cinzel' }}
                      >
                        {method.name}
                      </div>
                      <div
                        className="text-xs text-[#8B6914] mt-1"
                        style={{ fontFamily: 'DM Sans' }}
                      >
                        {method.description}
                      </div>
                    </label>
                  ))}
                </div>

                {/* Account Number Field for Mobile Payments */}
                {(paymentMethod === 'jazzcash' || paymentMethod === 'easypaisa') && (
                  <div className="mt-6 space-y-2">
                    <label
                      className="block text-[#E8C96A]"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      Mobile Money Account Number
                    </label>
                    <input
                      type="text"
                      placeholder="0300-1234567"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 rounded-sm font-medium transition-all border border-[#C9A84C] text-[#C9A84C] hover:bg-[#0D0D0D]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 rounded-sm font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                    style={{
                      fontFamily: 'DM Sans',
                      background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
                      color: '#0A0A0A',
                    }}
                  >
                    Review Order
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Review Order */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2
                  className="text-2xl text-[#C9A84C] mb-6"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  Review Order
                </h2>

                {/* Order Summary */}
                <div className="bg-[#0D0D0D] p-6 rounded-sm border border-[#1E1E1E] space-y-4">
                  <h3
                    className="text-lg text-[#E8C96A]"
                    style={{ fontFamily: 'Cinzel' }}
                  >
                    Order Items
                  </h3>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center py-3 border-b border-[#1E1E1E] last:border-b-0"
                    >
                      <div>
                        <p
                          className="text-[#F5F0E8]"
                          style={{ fontFamily: 'DM Sans' }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="text-sm text-[#8B6914]"
                          style={{ fontFamily: 'DM Sans' }}
                        >
                          Qty: {item.qty}
                        </p>
                      </div>
                      <p
                        className="text-[#C9A84C]"
                        style={{ fontFamily: 'DM Sans' }}
                      >
                        PKR {item.price * item.qty}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Coupon Code */}
                <div className="space-y-2">
                  <label
                    className="block text-[#E8C96A]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Coupon Code (Optional)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      className="flex-1 px-4 py-3 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm text-[#F5F0E8] placeholder-[#8B6914] focus:border-[#C9A84C] outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-6 py-3 rounded-sm font-medium transition-all border border-[#C9A84C] text-[#C9A84C] hover:bg-[#0D0D0D]"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <p
                      className="text-sm text-[#E8C96A]"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      Discount applied: PKR {discount}
                    </p>
                  )}
                </div>

                {/* Delivery Info */}
                <div className="bg-[#0D0D0D] p-4 rounded-sm border border-[#1E1E1E]">
                  <p
                    className="text-[#8B6914] text-sm"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Delivery:
                    <span className="text-[#C9A84C] ml-2">
                      {deliveryMethod === 'standard'
                        ? 'Standard (PKR 150)'
                        : 'Express (PKR 300)'}
                    </span>
                  </p>
                  <p
                    className="text-[#8B6914] text-sm mt-2"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Payment:
                    <span className="text-[#C9A84C] ml-2">
                      {PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.name}
                    </span>
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="bg-[#0D0D0D] p-6 rounded-sm border border-[#1E1E1E] space-y-3">
                  <div className="flex justify-between text-[#F5F0E8] border-b border-[#1E1E1E] pb-3">
                    <span style={{ fontFamily: 'DM Sans' }}>Subtotal</span>
                    <span>PKR {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#F5F0E8] border-b border-[#1E1E1E] pb-3">
                    <span style={{ fontFamily: 'DM Sans' }}>Delivery</span>
                    <span>PKR {deliveryPrice}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-[#E8C96A] border-b border-[#1E1E1E] pb-3">
                      <span style={{ fontFamily: 'DM Sans' }}>Discount</span>
                      <span>-PKR {discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#C9A84C] text-lg font-medium pt-3">
                    <span style={{ fontFamily: 'Cinzel' }}>Total</span>
                    <span>PKR {total}</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 rounded-sm font-medium transition-all border border-[#C9A84C] text-[#C9A84C] hover:bg-[#0D0D0D]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 py-3 rounded-sm font-medium transition-all hover:shadow-lg"
                    style={{
                      fontFamily: 'DM Sans',
                      background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
                      color: '#0A0A0A',
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Order Summary Sidebar (40%) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm p-6 space-y-6">
              <h3
                className="text-2xl text-[#C9A84C]"
                style={{ fontFamily: 'Cinzel' }}
              >
                Order Summary
              </h3>

              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 pb-4 border-b border-[#1E1E1E] last:border-b-0"
                  >
                    <div className="w-16 h-16 bg-[#1E1E1E] rounded-sm flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-[#F5F0E8] text-sm line-clamp-2"
                        style={{ fontFamily: 'DM Sans' }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-xs text-[#8B6914] mt-1"
                        style={{ fontFamily: 'DM Sans' }}
                      >
                        Qty: {item.qty}
                      </p>
                      <p
                        className="text-[#C9A84C] font-medium mt-1"
                        style={{ fontFamily: 'DM Sans' }}
                      >
                        PKR {item.price * item.qty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-[#1E1E1E] pt-4">
                <div
                  className="flex justify-between text-sm text-[#F5F0E8]"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  <span>Subtotal</span>
                  <span>PKR {subtotal}</span>
                </div>
                <div
                  className="flex justify-between text-sm text-[#F5F0E8]"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  <span>Shipping</span>
                  <span>PKR {deliveryPrice}</span>
                </div>
                {discount > 0 && (
                  <div
                    className="flex justify-between text-sm text-[#E8C96A]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    <span>Discount</span>
                    <span>-PKR {discount}</span>
                  </div>
                )}
                <div
                  className="flex justify-between text-lg font-medium text-[#C9A84C] pt-3 border-t border-[#1E1E1E]"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  <span>Total</span>
                  <span>PKR {total}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-[#1E1E1E] text-center">
                <p
                  className="text-xs text-[#8B6914] leading-relaxed"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  Secure Checkout · Easy Returns · Cash on Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

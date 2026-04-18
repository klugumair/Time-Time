'use client';

import Link from 'next/link';

export default function OrderConfirmedPage() {
  const orderNumber = `#TZ-2024-${Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, '0')}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8] flex items-center justify-center px-6 pt-20 pb-12">
      <div className="max-w-xl w-full text-center">
        {/* Animated Checkmark */}
        <div className="mb-8 flex justify-center">
          <svg
            className="w-24 h-24 text-[#C9A84C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              animation: 'checkmark 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1
          className="text-5xl md:text-6xl font-light text-[#F5F0E8] mb-4 text-balance"
          style={{ fontFamily: 'Cormorant Garamond' }}
        >
          Order Confirmed!
        </h1>

        {/* Order Number */}
        <div className="mb-6">
          <p
            className="text-sm text-[#8B6914] uppercase tracking-widest mb-2"
            style={{ fontFamily: 'Cinzel' }}
          >
            Order Number
          </p>
          <p
            className="text-3xl md:text-4xl font-light text-[#E8C96A]"
            style={{ fontFamily: 'Cinzel' }}
          >
            {orderNumber}
          </p>
        </div>

        {/* Confirmation Message */}
        <p
          className="text-lg text-[rgba(245,240,232,0.7)] mb-8 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: 'DM Sans' }}
        >
          We&apos;ll contact you on WhatsApp to confirm delivery details and keep you updated on your shipment.
        </p>

        {/* Delivery Info Card */}
        <div className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-sm p-6 mb-8">
          <div
            className="text-sm uppercase tracking-widest text-[#C9A84C] mb-3"
            style={{ fontFamily: 'Cinzel' }}
          >
            What&apos;s Next?
          </div>
          <ul
            className="text-left text-[rgba(245,240,232,0.7)] space-y-2"
            style={{ fontFamily: 'DM Sans' }}
          >
            <li className="flex items-center gap-3">
              <span className="text-[#C9A84C]">✓</span>
              <span>Confirmation on WhatsApp within 1 hour</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C9A84C]">✓</span>
              <span>Order processing & shipment tracking</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C9A84C]">✓</span>
              <span>Free shipping to your location</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C9A84C]">✓</span>
              <span>30-day easy returns if needed</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Link
            href="/products"
            className="py-3 rounded-sm font-medium transition-all border border-[#C9A84C] text-[#C9A84C] hover:bg-[#0D0D0D]"
            style={{ fontFamily: 'DM Sans' }}
          >
            Continue Shopping
          </Link>
          <button
            className="py-3 rounded-sm font-medium transition-all hover:shadow-lg"
            style={{
              fontFamily: 'DM Sans',
              background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
              color: '#0A0A0A',
            }}
          >
            Track Order
          </button>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923365555555"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-sm font-medium transition-all flex items-center justify-center gap-2 hover:shadow-lg"
          style={{
            fontFamily: 'DM Sans',
            backgroundColor: '#25D366',
            color: 'white',
          }}
        >
          <span>💬</span>
          Chat with us on WhatsApp
        </a>

        {/* Additional Info */}
        <p
          className="mt-8 text-sm text-[#8B6914]"
          style={{ fontFamily: 'DM Sans' }}
        >
          Having issues? Contact our support team or call us
        </p>
      </div>

      <style>{`
        @keyframes checkmark {
          0% {
            stroke-dasharray: 66;
            stroke-dashoffset: 66;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 66;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

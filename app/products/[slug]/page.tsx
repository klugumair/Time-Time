'use client';

import { useState } from 'react';
import { Heart, Star, Truck, Shield, RotateCcw, ChevronDown } from 'lucide-react';

const productDetail = {
  id: 1,
  slug: 'rolex-submariner',
  brand: 'Rolex',
  name: 'Rolex Submariner Professional',
  rating: 4.8,
  reviews: 127,
  price: 45000,
  salePrice: 42000,
  image: '⌚',
  description:
    'The Rolex Submariner is a luxury sports watch designed for professional diving. With its iconic design, exceptional durability, and precision timekeeping, it remains the benchmark for underwater watches. This timepiece combines technical mastery with timeless elegance.',
  variants: [
    { id: 1, name: 'Black Dial', color: '#1E1E1E', selected: true },
    { id: 2, name: 'Blue Dial', color: '#1A3A52', selected: false },
    { id: 3, name: 'Gold Dial', color: '#8B6914', selected: false },
  ],
  straps: [
    { id: 1, name: 'Steel Bracelet', selected: true },
    { id: 2, name: 'Rubber Strap', selected: false },
    { id: 3, name: 'Leather Strap', selected: false },
  ],
  details: [
    {
      title: 'Description',
      content:
        'The Rolex Submariner is crafted from Oystersteel and features a 40mm case with a unidirectional bezel. Water-resistant to 300 meters, it features an automatic movement with a 48-hour power reserve. The watch includes a scratch-resistant sapphire crystal and a date window.',
    },
    {
      title: 'Specifications',
      content:
        'Case: Oystersteel, 40mm\nMovement: Automatic, 3135 caliber\nPower Reserve: 48 hours\nWater Resistance: 300 meters\nCrystal: Sapphire\nBezel: Unidirectional rotating\nBand: Oyster bracelet (steel)',
    },
    {
      title: 'Warranty',
      content:
        'This timepiece includes a 5-year international warranty covering all mechanical defects. The warranty does not cover physical damage, battery replacement, or normal wear. Professional servicing recommended every 5-7 years.',
    },
    {
      title: 'Reviews',
      content:
        'Customers praise the Submariner for its reliability and timeless design. The watch maintains accuracy within ±2 seconds per day. Exceptional build quality and prestige make it a worthwhile investment.',
    },
  ],
  relatedProducts: [
    { id: 2, name: 'Rolex Daytona', price: 55000, salePrice: 52000, image: '⌚', brand: 'Rolex' },
    { id: 3, name: 'Rolex GMT-Master II', price: 48000, salePrice: 45000, image: '⌚', brand: 'Rolex' },
    { id: 4, name: 'Seiko Prospex', price: 22000, salePrice: null, image: '⌚', brand: 'Seiko' },
    { id: 5, name: 'Omega Seamaster', price: 38000, salePrice: 35000, image: '⌚', brand: 'Omega' },
  ],
};

export default function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState(productDetail.variants[0]);
  const [selectedStrap, setSelectedStrap] = useState(productDetail.straps[0]);
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div
          style={{ fontFamily: 'DM Sans' }}
          className="text-sm text-[#C9A84C] mb-8 flex items-center gap-2"
        >
          <a href="/" className="hover:text-[#E8C96A]">
            Home
          </a>
          <span>/</span>
          <a href="/products" className="hover:text-[#E8C96A]">
            Watches
          </a>
          <span>/</span>
          <span className="text-[rgba(245,240,232,0.6)]">{productDetail.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-[#1E1E1E] h-96 sm:h-[500px] rounded-sm border border-[rgba(201,168,76,0.3)] flex items-center justify-center mb-4 cursor-pointer hover:border-[#C9A84C] transition-colors">
              <div className="text-9xl">{productDetail.image}</div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((thumb) => (
                <div
                  key={thumb}
                  className="bg-[#1E1E1E] h-24 rounded-sm border border-[rgba(201,168,76,0.3)] flex items-center justify-center cursor-pointer hover:border-[#C9A84C] transition-colors"
                >
                  <div className="text-4xl">{productDetail.image}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div>
            {/* Brand and Name */}
            <p
              style={{ fontFamily: 'Cinzel' }}
              className="text-xs text-[#C9A84C] uppercase tracking-widest mb-2"
            >
              {productDetail.brand}
            </p>
            <h1
              style={{ fontFamily: 'Cormorant Garamond' }}
              className="text-4xl md:text-5xl text-[#F5F0E8] mb-4"
            >
              {productDetail.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(productDetail.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-[rgba(201,168,76,0.3)]'}`}
                  />
                ))}
              </div>
              <span style={{ fontFamily: 'DM Sans' }} className="text-sm text-[#C9A84C]">
                {productDetail.rating} ({productDetail.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span
                  style={{ fontFamily: 'DM Sans' }}
                  className="text-lg line-through text-[rgba(245,240,232,0.4)]"
                >
                  PKR {productDetail.price.toLocaleString()}
                </span>
                <span
                  style={{ fontFamily: 'DM Sans' }}
                  className="text-3xl font-bold text-[#C9A84C]"
                >
                  PKR {productDetail.salePrice.toLocaleString()}
                </span>
                <span
                  style={{ fontFamily: 'Cinzel' }}
                  className="text-sm text-[#E8C96A] bg-[rgba(232,201,106,0.1)] px-2 py-1 rounded-sm"
                >
                  Save PKR {(productDetail.price - productDetail.salePrice).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              style={{ fontFamily: 'DM Sans' }}
              className="text-sm text-[rgba(245,240,232,0.7)] mb-8 leading-relaxed"
            >
              {productDetail.description}
            </p>

            {/* Color Variant */}
            <div className="mb-6">
              <label
                style={{ fontFamily: 'Cinzel' }}
                className="block text-xs text-[#C9A84C] uppercase tracking-wider mb-3"
              >
                Color
              </label>
              <div className="flex gap-3">
                {productDetail.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedColor(variant)}
                    className={`px-4 py-2 rounded-sm border transition-all ${
                      selectedColor.id === variant.id
                        ? 'border-[#E8C96A] bg-[rgba(232,201,106,0.1)]'
                        : 'border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]'
                    }`}
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Strap Variant */}
            <div className="mb-8">
              <label
                style={{ fontFamily: 'Cinzel' }}
                className="block text-xs text-[#C9A84C] uppercase tracking-wider mb-3"
              >
                Strap
              </label>
              <div className="flex gap-3">
                {productDetail.straps.map((strap) => (
                  <button
                    key={strap.id}
                    onClick={() => setSelectedStrap(strap)}
                    className={`px-4 py-2 rounded-sm border transition-all ${
                      selectedStrap.id === strap.id
                        ? 'border-[#E8C96A] bg-[rgba(232,201,106,0.1)]'
                        : 'border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]'
                    }`}
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {strap.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label
                style={{ fontFamily: 'Cinzel' }}
                className="block text-xs text-[#C9A84C] uppercase tracking-wider mb-3"
              >
                Quantity
              </label>
              <div className="flex items-center gap-3 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-[#141414] border border-[rgba(201,168,76,0.15)] rounded-sm hover:border-[#C9A84C] transition-colors"
                >
                  −
                </button>
                <span
                  style={{ fontFamily: 'DM Sans' }}
                  className="w-8 text-center font-medium"
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-[#141414] border border-[rgba(201,168,76,0.15)] rounded-sm hover:border-[#C9A84C] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                style={{ fontFamily: 'DM Sans' }}
                className="flex-1 py-3 rounded-sm font-medium transition-all duration-300 text-[#0A0A0A]"
                style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)' }}
              >
                Add to Cart
              </button>
              <button
                style={{ fontFamily: 'DM Sans' }}
                className="px-6 py-3 rounded-sm border border-[#C9A84C] text-[#C9A84C] hover:bg-[rgba(201,168,76,0.1)] transition-colors font-medium"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery & Warranty Info */}
            <div
              className="bg-[#0D0D0D] p-4 rounded-sm border border-[rgba(201,168,76,0.15)] space-y-3"
              style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}
            >
              <div className="flex gap-3 items-start">
                <Truck className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p style={{ fontFamily: 'Cinzel' }} className="text-xs text-[#C9A84C] uppercase tracking-wider">
                    Free Shipping
                  </p>
                  <p style={{ fontFamily: 'DM Sans' }} className="text-sm text-[rgba(245,240,232,0.6)]">
                    On orders over PKR 10,000
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Shield className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p style={{ fontFamily: 'Cinzel' }} className="text-xs text-[#C9A84C] uppercase tracking-wider">
                    5-Year Warranty
                  </p>
                  <p style={{ fontFamily: 'DM Sans' }} className="text-sm text-[rgba(245,240,232,0.6)]">
                    International coverage
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <RotateCcw className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p style={{ fontFamily: 'Cinzel' }} className="text-xs text-[#C9A84C] uppercase tracking-wider">
                    30-Day Returns
                  </p>
                  <p style={{ fontFamily: 'DM Sans' }} className="text-sm text-[rgba(245,240,232,0.6)]">
                    Money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Accordion */}
        <div className="mb-16">
          <h2 style={{ fontFamily: 'Cinzel' }} className="text-2xl text-[#F5F0E8] mb-6">
            Product Information
          </h2>
          <div className="space-y-2">
            {productDetail.details.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#0D0D0D] rounded-sm border border-[rgba(201,168,76,0.15)] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === idx ? -1 : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#141414] transition-colors"
                >
                  <h3 style={{ fontFamily: 'Cinzel' }} className="text-[#C9A84C] uppercase tracking-wider text-sm">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A84C] transition-transform ${
                      expandedAccordion === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedAccordion === idx && (
                  <div className="px-6 py-4 border-t border-[rgba(201,168,76,0.15)] bg-[#0A0A0A]">
                    <p
                      style={{ fontFamily: 'DM Sans' }}
                      className="text-sm text-[rgba(245,240,232,0.7)] whitespace-pre-line leading-relaxed"
                    >
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 style={{ fontFamily: 'Cinzel' }} className="text-2xl text-[#F5F0E8] mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productDetail.relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#141414] rounded-sm border border-[rgba(201,168,76,0.12)] overflow-hidden group hover:border-[rgba(201,168,76,0.4)] transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="bg-[#1E1E1E] h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="text-5xl">{product.image}</div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p
                    style={{ fontFamily: 'Cinzel' }}
                    className="text-xs text-[#C9A84C] uppercase tracking-wider mb-2"
                  >
                    {product.brand}
                  </p>
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond' }}
                    className="text-base text-[#F5F0E8] mb-3 line-clamp-2"
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.salePrice ? (
                      <>
                        <span
                          style={{ fontFamily: 'DM Sans' }}
                          className="text-xs line-through text-[rgba(245,240,232,0.4)]"
                        >
                          PKR {product.price.toLocaleString()}
                        </span>
                        <span
                          style={{ fontFamily: 'DM Sans' }}
                          className="text-sm font-bold text-[#C9A84C]"
                        >
                          PKR {product.salePrice.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span
                        style={{ fontFamily: 'DM Sans' }}
                        className="text-sm font-bold text-[#C9A84C]"
                      >
                        PKR {product.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

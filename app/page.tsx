'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8]">
      {/* SECTION 1: VIDEO HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="#0A0A0A"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom,rgba(0,0,0,0.45),rgba(10,10,10,0.9))',
          }}
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <p
              className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              Rawalpindi&apos;s Finest
            </p>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 text-[#F5F0E8] text-balance leading-tight"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              Where Time Becomes Art
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-[rgba(245,240,232,0.65)] max-w-2xl mx-auto mb-10"
              style={{ fontFamily: 'DM Sans' }}
            >
              Watches · Smart Watches · Wall Clocks · Repairs &amp; More
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="px-8 py-3 rounded-sm font-medium transition-all duration-300 hover:shadow-lg"
                style={{
                  fontFamily: 'DM Sans',
                  background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
                  color: '#0A0A0A',
                }}
              >
                Explore Collection
              </button>
              <button
                className="px-8 py-3 rounded-sm font-medium transition-all duration-300 hover:border-[#E8C96A] hover:bg-[rgba(232,201,106,0.1)]"
                style={{
                  fontFamily: 'DM Sans',
                  border: '1px solid #C9A84C',
                  color: '#C9A84C',
                }}
              >
                Book a Repair
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform animate-bounce opacity-70">
          <ChevronDown className="w-6 h-6 text-[#C9A84C]" />
        </div>
      </section>

      {/* SECTION 2: CATEGORIES GRID */}
      <section className="py-20 px-6 sm:px-12 md:px-20">
        <h2
          className="text-4xl md:text-5xl font-light text-center mb-16 text-[#F5F0E8]"
          style={{ fontFamily: 'Cinzel' }}
        >
          Our Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { icon: '⌚', name: 'Watches' },
            { icon: '⌚', name: 'Smart Watches' },
            { icon: '🕰️', name: 'Wall Clocks' },
            { icon: '🎧', name: 'Headphones' },
            { icon: '📱', name: 'Electronics' },
            { icon: '🔧', name: 'Services' },
          ].map((category) => (
            <div
              key={category.name}
              className="bg-[#141414] p-8 rounded-sm border border-[rgba(201,168,76,0.15)] transition-all duration-300 hover:border-[rgba(201,168,76,0.6)] hover:shadow-lg hover:shadow-[rgba(201,168,76,0.2)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3
                className="text-xl text-[#C9A84C]"
                style={{ fontFamily: 'Cinzel' }}
              >
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED PRODUCTS */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-[#141414]">
        <h2
          className="text-4xl md:text-5xl font-light text-center mb-16 text-[#F5F0E8]"
          style={{ fontFamily: 'Cinzel' }}
        >
          Featured Timepieces
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            'Casio Edifice',
            'Rolex Submariner',
            'Samsung Galaxy Watch',
            'Apple Watch Ultra',
            'Orient Bambino',
            'Sveston Executive',
          ].map((product, idx) => (
            <div
              key={product}
              className="bg-[#141414] rounded-sm overflow-hidden border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-[#1E1E1E] h-48 sm:h-56 flex items-center justify-center relative overflow-hidden">
                <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-4xl">⌚</div>
                </div>
              </div>
              
              <div className="p-6">
                <p
                  className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  Premium
                </p>
                <h3
                  className="text-lg sm:text-xl text-[#F5F0E8] mb-3 line-clamp-2"
                  style={{ fontFamily: 'Cormorant Garamond' }}
                >
                  {product}
                </h3>
                <p
                  className="text-sm sm:text-base text-[#C9A84C] mb-4"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  PKR {(3500 + idx * 1200).toLocaleString()}
                </p>
                <button
                  className="w-full py-2 px-4 rounded-sm text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    fontFamily: 'DM Sans',
                    background: '#C9A84C',
                    color: '#0A0A0A',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: SERVICES STRIP */}
      <section
        className="py-16 px-6 sm:px-12 md:px-20"
        style={{
          backgroundColor: '#141414',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: '🔧', name: 'Watch Repair', desc: 'Expert maintenance' },
            { icon: '🔋', name: 'Battery Replacement', desc: 'Quick service' },
            { icon: '⌚', name: 'Strap Change', desc: 'Authentic straps' },
            { icon: '💧', name: 'Water Resistance Test', desc: 'Quality assured' },
          ].map((service) => (
            <div key={service.name} className="text-center">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3
                className="text-lg text-[#C9A84C] mb-2"
                style={{ fontFamily: 'Cinzel' }}
              >
                {service.name}
              </h3>
              <p
                className="text-sm text-[rgba(245,240,232,0.6)]"
                style={{ fontFamily: 'DM Sans' }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: BRAND MARQUEE */}
      <section className="py-16 px-6 bg-[#0A0A0A] overflow-hidden">
        <div className="relative flex overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .marquee {
              animation: scroll 30s linear infinite;
              display: flex;
              gap: 3rem;
              white-space: nowrap;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee">
            {['ROLEX', 'CASIO', 'SAMSUNG', 'APPLE', 'SVESTON', 'SEIKO', 'CITIZEN', 'ORIENT', 'TISSOT', 'FOSSIL'].map(
              (brand, idx) => (
                <span
                  key={idx}
                  className="text-2xl md:text-3xl font-light text-[#C9A84C] flex items-center gap-3"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  {brand}
                  <span className="text-[#8B6914]">·</span>
                </span>
              )
            )}
            {['ROLEX', 'CASIO', 'SAMSUNG', 'APPLE', 'SVESTON', 'SEIKO', 'CITIZEN', 'ORIENT', 'TISSOT', 'FOSSIL'].map(
              (brand, idx) => (
                <span
                  key={`dup-${idx}`}
                  className="text-2xl md:text-3xl font-light text-[#C9A84C] flex items-center gap-3"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  {brand}
                  <span className="text-[#8B6914]">·</span>
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

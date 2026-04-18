'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, Grid3x3, List, X } from 'lucide-react';

const mockProducts = [
  { id: 1, name: 'Rolex Submariner', brand: 'Rolex', category: 'Watches', price: 45000, salePrice: 42000, image: '⌚', sale: true },
  { id: 2, name: 'Casio Edifice Chronograph', brand: 'Casio', category: 'Watches', price: 15000, salePrice: 12500, image: '⌚', sale: true },
  { id: 3, name: 'Samsung Galaxy Watch 6', brand: 'Samsung', category: 'Smart Watches', price: 28000, salePrice: null, image: '⌚', sale: false },
  { id: 4, name: 'Apple Watch Ultra', brand: 'Apple', category: 'Smart Watches', price: 85000, salePrice: 79000, image: '⌚', sale: true },
  { id: 5, name: 'Seiko Prospex', brand: 'Seiko', category: 'Watches', price: 22000, salePrice: null, image: '⌚', sale: false },
  { id: 6, name: 'Wall Clock Vintage', brand: 'Sveston', category: 'Wall Clocks', price: 5000, salePrice: 3999, image: '🕰️', sale: true },
  { id: 7, name: 'Sony WH-1000XM5 Headphones', brand: 'Samsung', category: 'Headphones', price: 32000, salePrice: 28000, image: '🎧', sale: true },
  { id: 8, name: 'Orient Bambino', brand: 'Orient', category: 'Watches', price: 18000, salePrice: null, image: '⌚', sale: false },
  { id: 9, name: 'Citizen Promaster', brand: 'Citizen', category: 'Watches', price: 35000, salePrice: 32000, image: '⌚', sale: true },
  { id: 10, name: 'Fossil Gen 6', brand: 'Fossil', category: 'Smart Watches', price: 24000, salePrice: 20000, image: '⌚', sale: true },
  { id: 11, name: 'AA Battery Pack', brand: 'Sveston', category: 'Battery Cells', price: 2500, salePrice: null, image: '🔋', sale: false },
  { id: 12, name: 'Digital Calculator Pro', brand: 'Casio', category: 'Calculators', price: 8000, salePrice: 6500, image: '🧮', sale: true },
];

const categories = ['Watches', 'Smart Watches', 'Wall Clocks', 'Headphones', 'Calculators', 'Battery Cells', 'Electronics'];
const brands = ['Rolex', 'Casio', 'Samsung', 'Apple', 'Sveston', 'Seiko', 'Orient', 'Citizen', 'Fossil', 'Tissot'];

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([500, 500000]);
  const [inStock, setInStock] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [gridView, setGridView] = useState(true);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && brandMatch && priceMatch;
    });
  }, [selectedCategories, selectedBrands, priceRange]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === 'price-low') sorted.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    if (sortBy === 'price-high') sorted.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
    return sorted;
  }, [filteredProducts, sortBy]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([500, 500000]);
    setInStock(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div style={{ fontFamily: 'DM Sans' }} className="text-sm text-[rgba(245,240,232,0.6)]">
            Showing {sortedProducts.length} products
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full sm:w-auto">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ fontFamily: 'DM Sans' }}
                className="appearance-none bg-[#141414] text-[#F5F0E8] px-4 py-2 rounded-sm border border-[rgba(201,168,76,0.15)] pr-10 text-sm cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="featured">Featured</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#C9A84C] pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-[#141414] p-2 rounded-sm border border-[rgba(201,168,76,0.15)]">
              <button
                onClick={() => setGridView(true)}
                className={`p-2 rounded-sm transition-colors ${gridView ? 'bg-[#C9A84C] text-[#0A0A0A]' : 'text-[#C9A84C]'}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridView(false)}
                className={`p-2 rounded-sm transition-colors ${!gridView ? 'bg-[#C9A84C] text-[#0A0A0A]' : 'text-[#C9A84C]'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* SIDEBAR */}
          <aside className="w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 bg-[#0D0D0D] p-6 rounded-sm border border-[rgba(201,168,76,0.15)]">
              <h2 style={{ fontFamily: 'Cinzel' }} className="text-lg text-[#C9A84C] mb-6">
                Filters
              </h2>

              {/* Categories */}
              <div className="mb-8">
                <h3 style={{ fontFamily: 'Cinzel' }} className="text-xs text-[#C9A84C] uppercase tracking-wider mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 accent-[#C9A84C] cursor-pointer"
                      />
                      <span style={{ fontFamily: 'DM Sans' }} className="text-sm">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <h3 style={{ fontFamily: 'Cinzel' }} className="text-xs text-[#C9A84C] uppercase tracking-wider mb-4">
                  Brand
                </h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 accent-[#C9A84C] cursor-pointer"
                      />
                      <span style={{ fontFamily: 'DM Sans' }} className="text-sm">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 style={{ fontFamily: 'Cinzel' }} className="text-xs text-[#C9A84C] uppercase tracking-wider mb-4">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="500"
                    max="500000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="500"
                    max="500000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div style={{ fontFamily: 'DM Sans' }} className="text-xs text-[#C9A84C]">
                    PKR {priceRange[0].toLocaleString()} — PKR {priceRange[1].toLocaleString()}
                  </div>
                </div>
              </div>

              {/* In Stock Toggle */}
              <div className="mb-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={() => setInStock(!inStock)}
                    className="w-4 h-4 accent-[#C9A84C] cursor-pointer"
                  />
                  <span style={{ fontFamily: 'DM Sans' }} className="text-sm">
                    In Stock Only
                  </span>
                </label>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                style={{ fontFamily: 'DM Sans' }}
                className="text-sm text-[#C9A84C] hover:text-[#E8C96A] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <main className="flex-1">
            <div
              className={`grid gap-6 ${
                gridView
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#141414] rounded-sm border border-[rgba(201,168,76,0.12)] overflow-hidden group cursor-pointer hover:border-[rgba(201,168,76,0.4)] transition-all duration-300"
                >
                  {/* Image Area */}
                  <div className="relative bg-[#1E1E1E] h-56 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl">{product.image}</div>

                    {/* Sale Badge */}
                    {product.sale && (
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-bold"
                        style={{
                          fontFamily: 'Cinzel',
                          background: '#E8C96A',
                          color: '#0A0A0A',
                        }}
                      >
                        SALE
                      </div>
                    )}

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        style={{ fontFamily: 'DM Sans' }}
                        className="px-6 py-2 bg-[#C9A84C] text-[#0A0A0A] font-medium rounded-sm"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p
                      style={{ fontFamily: 'Cinzel' }}
                      className="text-xs text-[#C9A84C] uppercase tracking-wider mb-2"
                    >
                      {product.brand}
                    </p>
                    <h3
                      style={{ fontFamily: 'Cormorant Garamond' }}
                      className="text-lg text-[#F5F0E8] mb-3 line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      {product.salePrice ? (
                        <>
                          <span
                            style={{ fontFamily: 'DM Sans' }}
                            className="text-sm line-through text-[rgba(245,240,232,0.4)]"
                          >
                            PKR {product.price.toLocaleString()}
                          </span>
                          <span
                            style={{ fontFamily: 'DM Sans' }}
                            className="text-base font-bold text-[#C9A84C]"
                          >
                            PKR {product.salePrice.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span
                          style={{ fontFamily: 'DM Sans' }}
                          className="text-base font-bold text-[#C9A84C]"
                        >
                          PKR {product.price.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      style={{ fontFamily: 'DM Sans' }}
                      className="w-full py-2 px-4 bg-[#C9A84C] text-[#0A0A0A] font-medium rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p style={{ fontFamily: 'DM Sans' }} className="text-[rgba(245,240,232,0.6)]">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

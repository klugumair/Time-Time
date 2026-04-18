'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  image?: string;
  variant?: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id && item.variant === newItem.variant);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id && item.variant === newItem.variant
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prevItems, newItem];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCart();
  const total = getTotal();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-[#0D0D0D] border-l-2 border-[#C9A84C] flex flex-col transition-transform duration-300 transform z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(201,168,76,0.2)]">
          <h2
            className="text-2xl font-light text-[#F5F0E8]"
            style={{ fontFamily: 'Cinzel' }}
          >
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-[#1E1E1E] rounded transition-colors"
          >
            <X className="w-6 h-6 text-[#C9A84C]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">⌚</div>
              <p
                className="text-lg text-[#F5F0E8] mb-6"
                style={{ fontFamily: 'DM Sans' }}
              >
                Your cart is empty
              </p>
              <button
                onClick={closeCart}
                style={{
                  fontFamily: 'DM Sans',
                  border: '1px solid #C9A84C',
                  color: '#C9A84C',
                }}
                className="px-6 py-2 rounded-sm transition-all duration-300 hover:bg-[rgba(201,168,76,0.1)]"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#141414] rounded-sm p-4 border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-colors"
                >
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="w-20 h-20 bg-[#0D0D0D] rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">⌚</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="text-sm font-medium text-[#F5F0E8] mb-1"
                        style={{ fontFamily: 'Cinzel' }}
                      >
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p
                          className="text-xs text-[#C9A84C] mb-3"
                          style={{ fontFamily: 'DM Sans' }}
                        >
                          {item.variant}
                        </p>
                      )}
                      <p
                        className="text-sm font-semibold text-[#E8C96A]"
                        style={{ fontFamily: 'DM Sans' }}
                      >
                        PKR {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-[#0D0D0D] rounded transition-colors mt-auto"
                    >
                      <Trash2 className="w-4 h-4 text-[#C9A84C]" />
                    </button>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[rgba(201,168,76,0.1)]">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-[#0D0D0D] rounded transition-colors"
                    >
                      <Minus className="w-4 h-4 text-[#C9A84C]" />
                    </button>
                    <span
                      className="flex-1 text-center text-sm text-[#F5F0E8]"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-[#0D0D0D] rounded transition-colors"
                    >
                      <Plus className="w-4 h-4 text-[#C9A84C]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[rgba(201,168,76,0.2)] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span
                className="text-sm text-[rgba(245,240,232,0.65)]"
                style={{ fontFamily: 'DM Sans' }}
              >
                Subtotal:
              </span>
              <span
                className="text-lg font-semibold text-[#E8C96A]"
                style={{ fontFamily: 'DM Sans' }}
              >
                PKR {total.toLocaleString()}
              </span>
            </div>

            <button
              style={{
                fontFamily: 'DM Sans',
                background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
                color: '#0A0A0A',
              }}
              className="w-full py-3 rounded-sm font-medium transition-all duration-300 hover:shadow-lg"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={closeCart}
              style={{
                fontFamily: 'DM Sans',
                border: '1px solid #C9A84C',
                color: '#C9A84C',
              }}
              className="w-full py-3 rounded-sm font-medium transition-all duration-300 hover:bg-[rgba(201,168,76,0.1)]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

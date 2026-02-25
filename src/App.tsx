import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { CartOverlay } from './components/CartOverlay';
import type { CartItem } from './components/CartOverlay';
import type { Product } from './components/ProductCard';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add Item to Cart
  function handleAddToCart(product: Product) {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // If it exists, copy array and increase quantity
      const updatedItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      // If new, add to array with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Open the cart automatically so the user sees the item was added
    setIsCartOpen(true);
  }

  // Remove Item from Cart
  function handleRemoveItem(productId: string) {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedItems);
  }

  // Calculate total items for Header badge
  let totalItemsCount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalItemsCount += cartItems[i].quantity;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* Header */}
      <Header
        cartCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <ProductSection onAddToCart={handleAddToCart} />
      </main>

      {/* Basic Footer */}
      <footer className="bg-gray-800 text-white text-center p-8 mt-auto">
        <h2 className="text-2xl font-bold mb-2">AURA JEWELLERY</h2>
        <p className="text-gray-400">© 2026 Aura Jewellery. All rights reserved.</p>
      </footer>

      {/* Cart Sidebar */}
      <CartOverlay
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />

    </div>
  );
}

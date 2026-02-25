import { X, Trash2 } from 'lucide-react';
import type { Product } from './ProductCard';

export interface CartItem extends Product {
    quantity: number;
}

interface CartOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onRemoveItem: (productId: string) => void;
}

export function CartOverlay({ isOpen, onClose, items, onRemoveItem }: CartOverlayProps) {
    if (!isOpen) {
        return null; // Return nothing if the cart is not open
    }

    // Calculate the total price of all items
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++) {
        totalAmount += items[i].price * items[i].quantity;
    }

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">

            {/* Sidebar background */}
            <div className="w-full max-w-sm bg-white h-full shadow-lg flex flex-col">

                {/* Cart Header */}
                <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                    <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
                    <button onClick={onClose} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                        <X size={20} />
                    </button>
                </div>

                {/* Cart Item List */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                    {items.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="flex gap-4 border p-2 rounded items-center">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />

                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                    <p className="text-yellow-600 font-bold">${item.price}</p>
                                </div>

                                <button
                                    onClick={() => onRemoveItem(item.id)}
                                    className="text-red-500 p-2 hover:bg-red-50 rounded"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Cart Footer */}
                {items.length > 0 && (
                    <div className="p-4 border-t bg-gray-50">
                        <div className="flex justify-between items-center mb-4 text-xl font-bold">
                            <span>Total:</span>
                            <span>${totalAmount}</span>
                        </div>
                        <button className="w-full bg-black text-white py-3 rounded text-lg font-bold hover:bg-gray-800">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

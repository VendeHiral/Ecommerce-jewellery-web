import { Plus } from 'lucide-react';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">

            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md mb-4"
            />

            {/* Product Details */}
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>

            {/* Price and Add Button aligned at bottom */}
            <div className="flex justify-between items-center mt-2 border-t pt-4">
                <span className="text-xl font-bold">${product.price}</span>

                <button
                    onClick={() => onAddToCart(product)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center gap-1 font-bold"
                >
                    <Plus size={18} />
                    Add
                </button>
            </div>

        </div>
    );
}

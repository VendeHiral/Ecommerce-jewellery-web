import { ProductCard } from './ProductCard';
import type { Product } from './ProductCard';

const SAMPLE_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Diamond Ring',
        price: 2499,
        category: 'Rings',
        image: 'https://images.unsplash.com/photo-1605100804763-247f6612d543?auto=format&fit=crop&q=80',
    },
    {
        id: '2',
        name: 'Sapphire Earrings',
        price: 1850,
        category: 'Earrings',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
    },
    {
        id: '3',
        name: 'Gold Chain Bracelet',
        price: 890,
        category: 'Bracelets',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80',
    },
    {
        id: '4',
        name: 'Pearl Necklace',
        price: 1200,
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80',
    },
    {
        id: '5',
        name: 'Emerald Ring',
        price: 3200,
        category: 'Rings',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80',
    },
    {
        id: '6',
        name: 'Gold Hoop Earrings',
        price: 450,
        category: 'Earrings',
        image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80',
    },
];

interface ProductSectionProps {
    onAddToCart: (product: Product) => void;
}

export function ProductSection({ onAddToCart }: ProductSectionProps) {
    return (
        <section id="products" className="py-16 px-4 md:px-8 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">Our Jewellery Collection</h2>
                <p className="text-center text-gray-500 mb-10">
                    Hand-picked items for every occasion.
                </p>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {SAMPLE_PRODUCTS.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

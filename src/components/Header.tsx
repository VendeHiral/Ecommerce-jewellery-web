import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
    cartCount: number;
    onOpenCart: () => void;
}

export function Header({ cartCount, onOpenCart }: HeaderProps) {
    return (
        <header className="bg-white p-4 shadow-md sticky top-0 flex justify-between items-center z-50">

            {/* Brand Name / Logo */}
            <div className="flex items-center gap-2">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                    A
                </div>
                <h1 className="text-2xl font-bold">JEWELLERY HUB</h1>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-6">
                <a href="#home" className="hover:text-yellow-600 font-medium">Home</a>
                <a href="#products" className="hover:text-yellow-600 font-medium">Collections</a>
            </nav>

            {/* Cart Button */}
            <button
                onClick={onOpenCart}
                className="relative flex items-center p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
                <ShoppingBag className="w-6 h-6 text-gray-700" />
                <span className="ml-2 font-bold">Cart</span>

                {/* Show number only if items exist */}
                {cartCount > 0 && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                        {cartCount}
                    </div>
                )}
            </button>

        </header>
    );
}

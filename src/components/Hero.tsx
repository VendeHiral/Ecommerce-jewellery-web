export function Hero() {
    return (
        <section id="home" className="bg-gray-100 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">

            {/* Left Text Box */}
            <div className="md:w-1/2 mt-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
                    Discover <span className="text-yellow-600">Elegance</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Find the perfect piece of jewellery to make your special moments unforgettable. We offer the best quality and designs.
                </p>
                <a href="#products" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600">
                    Shop Now
                </a>
            </div>

            {/* Right Image Box */}
            <div className="md:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1599643478524-fb66f7f6f140?auto=format&fit=crop&q=80"
                    alt="Beautiful Necklace"
                    className="rounded-2xl shadow-lg w-full"
                />
            </div>

        </section>
    );
}

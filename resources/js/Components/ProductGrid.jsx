import { Heart, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

function ProductGrid({ view }) {
    const [wishlist, setWishlist] = useState([]);
    const products = [
        {
            id: "1",
            name: "Style 18K Rose Gold Plated Hand Bracelet",
            description: "European 28cm Limited Edition",
            price: 1099,
            originalPrice: 1499,
            image: "/placeholder.svg",
        },
        {
            id: "2",
            name: "European 28cm Limited Edition 18K Gold Bracelet",
            description: "European Design Collection",
            price: 1099,
            originalPrice: 1499,
            image: "/placeholder.svg",
        },
        {
            id: "3",
            name: "Kundan Designer Piece 24K Yellow Gold Plated Bangles & Bracelet Set",
            description: "Designer Collection",
            price: 2499,
            originalPrice: 2999,
            image: "/placeholder.svg",
        },
        // Add more products as needed
    ];

    const toggleWishlist = (productId) => {
        setWishlist((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };
    return (
        <div
            className={`flex-1 ${
                view === "grid"
                    ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    : "space-y-6"
            }`}
        >
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`group relative ${
                        view === "list" ? "flex gap-6" : ""
                    }`}
                >
                    <div
                        className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                            view === "list" ? "w-48 flex-shrink-0" : "w-full"
                        }`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">
                                {product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {product.description}
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">
                                    Rs. {product.price.toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                    Rs. {product.originalPrice.toFixed(2)}
                                </span>
                                <span className="text-sm text-green-600">
                                    (
                                    {Math.round(
                                        (1 -
                                            product.price /
                                                product.originalPrice) *
                                            100
                                    )}
                                    % OFF)
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => toggleWishlist(product.id)}
                                className="rounded-full p-2 hover:bg-gray-100"
                                aria-label="Add to wishlist"
                            >
                                <Heart
                                    className={`h-5 w-5 ${
                                        wishlist.includes(product.id)
                                            ? "fill-red-500 text-red-500"
                                            : "text-gray-500"
                                    }`}
                                />
                            </button>
                            <button
                                className="rounded-full p-2 hover:bg-gray-100"
                                aria-label="Add to cart"
                            >
                                <ShoppingBag className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;

import { Link } from "@inertiajs/react";
import React from "react";

function Category() {
    const categories = [
        {
            name: "Bangles",
            image: "/images/home/category/bangles.jpg",
            href: "/category/bangles",
        },
        {
            name: "Chains",
            image: "/images/home/category/chains.jpg",
            href: "/category/chains",
        },
        {
            name: "Earrings",
            image: "/images/home/category/earring.jpg",
            href: "/category/earrings",
        },
        {
            name: "Neckwears",
            image: "/images/home/category/necklace.jpg",
            href: "/category/neckwears",
        },
        {
            name: "Pendants",
            image: "/images/home/category/anklet.jpg",
            href: "/category/pendants",
        },
        {
            name: "Rings",
            image: "/images/home/category/ring.jpg",
            href: "/category/rings",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 mt-[50px]">
            {categories.map((category) => (
                <Link
                    key={category.name}
                    href={category.href}
                    className="group relative overflow-hidden rounded-lg w-[200px] h-[350px]"
                >
                    <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-semibold text-white">
                            {category.name}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Category;

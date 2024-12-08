import FilterSidebar from "@/Components/FilterSidebar";
import ProductGrid from "@/Components/ProductGrid";
import ViewToggle from "@/Components/ViewToggle";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

function Browse() {
    const [view, setView] = useState("grid");
    const [sortBy, setSortBy] = useState("trending");
    return (
        <MainLayout>
            <Head title="Browse Products" />
            <div>
                {/* Hero Section */}
                <div className="relative h-[300px] overflow-hidden">
                    <img
                        src="/placeholder.svg"
                        alt="Gold bracelet"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-2xl text-center text-white">
                            <p className="mb-4 text-sm">
                                Our latest collection of elegant bracelets,
                                where artistry meets elegance. Each bracelet is
                                a testament to exquisite craftsmanship,
                                featuring unique designs that elevate any look.
                                From bold statement pieces to delicate chains,
                                our curations speak to every style and occasion.
                            </p>
                            <button className="flex items-center text-sm font-medium hover:underline">
                                Shop Now{" "}
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Browse Section */}
                <div className="max-w-screen-xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-4">
                            <button className="text-sm font-medium">
                                Filter
                            </button>
                            <ViewToggle view={view} onChange={setView} />
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">
                                657 products
                            </span>
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-8 text-sm focus:border-blue-500 focus:outline-none"
                                >
                                    <option value="trending">
                                        Trending Now
                                    </option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">
                                        Price: Low to High
                                    </option>
                                    <option value="price-high">
                                        Price: High to Low
                                    </option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-8">
                        <FilterSidebar />
                        <ProductGrid view={view} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Browse;

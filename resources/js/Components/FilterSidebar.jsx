import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

function FilterSidebar() {
    const categories = [
        { id: "ankle-wear", label: "Ankle Wear" },
        { id: "bangles", label: "Bangles" },
        { id: "bracelets", label: "Bracelets" },
        { id: "brooches", label: "Brooches" },
        { id: "chains", label: "Chains" },
        { id: "ear-cuffs", label: "Ear Cuffs" },
        { id: "earrings", label: "Earrings" },
        { id: "finger-rings", label: "Finger Rings" },
        { id: "neckwear", label: "Neckwear" },
        { id: "nose-pins", label: "Nose Pins" },
        { id: "pendants", label: "Pendants" },
        { id: "watch-jewelry", label: "Watch Jewelry" },
    ];

    const metals = [
        { id: "rose-gold", label: "Rose Gold" },
        { id: "yellow-gold", label: "Yellow Gold" },
        { id: "white-gold", label: "White Gold" },
        { id: "platinum", label: "Platinum" },
        { id: "sterling-silver", label: "Sterling Silver" },
    ];
    const [filters, setFilters] = useState({
        availability: ["in-stock"],
        categories: [],
        metals: ["rose-gold", "yellow-gold"],
    });

    const toggleFilter = (type, value) => {
        setFilters((prev) => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter((item) => item !== value)
                : [...prev[type], value],
        }));
    };
    return (
        <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
                {/* Availability Filter */}
                <div>
                    <h3 className="mb-4 flex items-center justify-between text-sm font-medium">
                        Availability
                        <ChevronDown className="h-4 w-4" />
                    </h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.availability.includes(
                                    "in-stock"
                                )}
                                onChange={() =>
                                    toggleFilter("availability", "in-stock")
                                }
                                className="rounded border-gray-300"
                            />
                            <span className="text-sm">In Stock</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.availability.includes(
                                    "out-of-stock"
                                )}
                                onChange={() =>
                                    toggleFilter("availability", "out-of-stock")
                                }
                                className="rounded border-gray-300"
                            />
                            <span className="text-sm">Out of Stock</span>
                        </label>
                    </div>
                </div>

                {/* Category Filter */}
                <div>
                    <h3 className="mb-4 flex items-center justify-between text-sm font-medium">
                        Category
                        <ChevronDown className="h-4 w-4" />
                    </h3>
                    <div className="space-y-2">
                        {categories.map((category) => (
                            <label
                                key={category.id}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={filters.categories.includes(
                                        category.id
                                    )}
                                    onChange={() =>
                                        toggleFilter("categories", category.id)
                                    }
                                    className="rounded border-gray-300"
                                />
                                <span className="text-sm">
                                    {category.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Metals Filter */}
                <div>
                    <h3 className="mb-4 flex items-center justify-between text-sm font-medium">
                        Metals
                        <ChevronDown className="h-4 w-4" />
                    </h3>
                    <div className="space-y-2">
                        {metals.map((metal) => (
                            <label
                                key={metal.id}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={filters.metals.includes(metal.id)}
                                    onChange={() =>
                                        toggleFilter("metals", metal.id)
                                    }
                                    className="rounded border-gray-300"
                                />
                                <span className="text-sm">{metal.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSidebar;

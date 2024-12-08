import { Grid2X2, List } from "lucide-react";
import React from "react";

function ViewToggle({ view, onChange }) {
    return (
        <div className="flex gap-2">
            <button
                onClick={() => onChange("grid")}
                className={`rounded-md p-1 ${
                    view === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                aria-label="Grid view"
            >
                <Grid2X2 className="h-5 w-5" />
            </button>
            <button
                onClick={() => onChange("list")}
                className={`rounded-md p-1 ${
                    view === "list" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                aria-label="List view"
            >
                <List className="h-5 w-5" />
            </button>
        </div>
    );
}

export default ViewToggle;

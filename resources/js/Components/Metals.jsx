import { Description } from "@headlessui/react";
import React from "react";

function Metals() {
    const MetalsData = [
        {
            name: "Gold",
            Description: "Valued for its durability and aesthetic appeal.",
        },
        {
            name: "Silver",
            Description:
                "Lustrous and conductive, often used in jewelry and electronics.",
        },
        {
            name: "Bronze",
            Description:
                "Strong and corrosion-resistant, with a rich history in art and architecture.",
        },
        {
            name: "Copper",
            Description:
                "Reddish-orange metal with excellent electrical conductivity.",
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 bg-white p-10">
            <div className="grid grid-cols-2 gap-4">
                {MetalsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center gap-2"
                    >
                        <div className="text-[30px] font-bold">{item.name}</div>
                        <div className="text-[20px]">{item.Description}</div>
                    </div>
                ))}
            </div>
            <div className="bg-[url('/images/home/bangles.png')] h-[466px] bg-cover bg-center"></div>
        </div>
    );
}

export default Metals;

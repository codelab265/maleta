import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

function Hero() {
    return (
        <div className="w-full h-[655px] relative">
            <img
                src="/images/home/hero.png"
                alt="hero"
                className="absolute w-full h-full object-cover"
            />
            <div className="max-w-screen-xl mx-auto  h-full bg-red-200 z-10">
                <div className="w-full h-full flex flex-col justify-center items-end gap-12">
                    <div className="z-10 flex items-center pr-48 gap-6">
                        <div className="font-bold text-[90px] font-greatvibes text-white">
                            Beauty
                        </div>
                        <div className="font-bold text-2xl text-white">
                            With
                        </div>
                    </div>
                    <div className="font-bold text-[90px] font-greatvibes text-white z-10 ">
                        Brilliance
                    </div>
                    <div className="font-bold text-[60px] text-white z-10 mb-8 m-4">
                        New Collection
                    </div>
                    <div className="z-10">
                        <div className="py-4 px-10 border-[3px] border-white text-white cursor-pointer text-lg font-semibold inline-flex items-center">
                            Explore more
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

import { ChevronRight } from "lucide-react";
import React from "react";

function OurStory() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white h-[538px] relative overflow-hidden mt-[50px]">
            <img
                src="/images/home/about.png"
                className="w-full h-full object-cover absolute left-0 top-0 z-10"
            />
            <div className="w-full h-full bg-gradient-to-l from-white to-transparent absolute left-0 top-0 z-20 flex flex-col items-end">
                <div className="w-1/2 h-full p-10 inline-flex flex-col gap-12 justify-center ">
                    <div className="text-[30px] font-bold">About us</div>
                    <div className="text-[60px] font-bold">Our story</div>
                    <div className="line-clamp-3 text-2xl text-black">
                        Lorem ipsum dolor sit amet consectetur. Sed commodo
                        pellentesque arcu tristique et morbi. Lorem ipsum dolor
                        sit amet consectetur. Sed commodo pellentesque arcu
                        tristique et morbi. Lorem ipsum dolor sit amet
                        consectetur. Sed commodo pellentesque arcu tristique et
                        morbi.
                    </div>
                    <div className="">
                        <div className="py-4 px-10 border-[3px] border-black text-black cursor-pointer text-lg font-semibold inline-flex items-center">
                            Read more
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;

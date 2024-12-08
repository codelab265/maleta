import {
    ArrowRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";
import React from "react";

function Footer() {
    const SocialLinks = [
        {
            name: "facebook",
            description: "Facebook",
            url: "https://facebook.com",
            icon: <Facebook />,
        },
        {
            name: "Instagram",
            description: "Instagram",
            url: "https://instagram.com",
            icon: <Instagram />,
        },
        {
            name: "Twitter",
            description: "Twitter",
            url: "https://twitter.com",
            icon: <Twitter />,
        },
        {
            name: "Linkedin",
            description: "Linkedin",
            url: "https://linkedin.com",
            icon: <Linkedin />,
        },
    ];
    return (
        <footer className="grid grid-cols-12 gap-2.5 container max-w-screen-xl mx-auto mt-[50px]">
            <div className="col-span-4 grid grid-cols-2 gap-2.5">
                {SocialLinks.map((link) => (
                    <div
                        key={link.name}
                        className=" bg-white rounded-[10px] p-7 h-[220px] flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-[50px] h-[50px]  rounded-[10px] border border-gray-100 bg-gray-200 flex items-center justify-center">
                                {link.icon}
                            </div>
                            <div className="p-2.5 rounded-full bg-gray-200">
                                <ArrowRight className="-rotate-45" />
                            </div>
                        </div>
                        <div className="">
                            <div className="text-2xl font-medium text-gray-900">
                                {link.name}
                            </div>
                            <div className="text-base font-normal text-gray-500">
                                {link.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-span-8 bg-gray-500"></div>
        </footer>
    );
}

export default Footer;

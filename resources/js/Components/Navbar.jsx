import { Link } from "@inertiajs/react";
import { Search, ShoppingBag, User } from "lucide-react";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/Components/ui/navigation-menu";
import { Badge } from "./ui/badge";
import Cart from "./Cart";

function Navbar() {
    const components = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
                "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
                "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ];
    return (
        <header className="bg-white">
            <div className="border-b">
                <div className="flex items-center justify-end gap-4 py-3 text-sm max-w-screen-xl mx-auto">
                    <Link href="/track">About Us</Link>
                    <Link href="/stores">Request Assistance</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-6">
                <Link href="/" className="text-3xl font-bold">
                    MALETA
                </Link>
                <nav className="hidden space-x-6 md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <span className="text-base">Home</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/browse">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <span className="text-base">
                                            Browse
                                        </span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <span className="text-base">
                                        Collection
                                    </span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed
                                                        components that you can
                                                        copy and paste into your
                                                        apps. Accessible.
                                                        Customizable. Open
                                                        Source.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <span className="text-base">
                                            Jewelry Services
                                        </span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <span className="text-base">
                                            Book Appointment
                                        </span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
                <div className="flex items-center gap-4">
                    <button aria-label="Search">
                        <Search className="h-5 w-5" />
                    </button>
                    <Cart />
                    <button aria-label="User account">
                        <User className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

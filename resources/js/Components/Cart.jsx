import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
function Cart() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button aria-label="Shopping bag" className="relative">
                    <ShoppingBag className="h-5 w-5" />
                    <div
                        className={
                            "absolute -right-4 -top-4 rounded-full bg-green-500 w-[25px] h-[25px] flex items-center justify-center text-white text-xs"
                        }
                    >
                        2
                    </div>
                </button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </SheetDescription>
                </SheetHeader>

                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

export default Cart;

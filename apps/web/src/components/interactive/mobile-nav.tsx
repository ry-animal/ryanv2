"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { smoothScrollTo } from "@/utils/smooth-scroll";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

export function MobileNav() {
    const [open, setOpen] = useState(false);

    const handleNavLinkClick = (href: string) => {
        setOpen(false);
        if (href.startsWith('#')) {
            smoothScrollTo(href);
        }
    };

    return (
        <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle mobile menu"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="top"
                    className="w-48 bg-white dark:bg-black/90 border-l border-b border-gray-200 dark:border-gray-800 p-0 gap-0 h-auto ml-auto rounded-bl-lg"
                >
                    <SheetHeader>
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-6 p-6 pt-12 pb-8 text-center">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavLinkClick(item.href)}
                                className="block text-lg font-medium hover:text-primary transition-colors py-3 text-center w-full"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
} 
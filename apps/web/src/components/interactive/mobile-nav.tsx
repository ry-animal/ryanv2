"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { smoothScrollTo } from "@/utils/smooth-scroll";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    const handleNavLinkClick = (href: string) => {
        setIsOpen(false);
        if (href.startsWith('#')) {
            smoothScrollTo(href);
        }
    };

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
            >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                            onClick={handleNavClick}
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                            }}
                            className="fixed top-0 right-0 h-full w-72 bg-background border-l shadow-xl z-50 p-6"
                        >
                            <div className="flex justify-end mb-8">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleNavClick}
                                    aria-label="Close menu"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <nav className="space-y-6">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <button
                                            onClick={() => handleNavLinkClick(item.href)}
                                            className="block text-lg font-medium hover:text-primary transition-colors py-2 text-left w-full"
                                        >
                                            {item.label}
                                        </button>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
} 
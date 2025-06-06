"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/interactive/mobile-nav";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { smoothScrollTo } from "@/utils/smooth-scroll";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.replace('#', ''));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(`#${currentSection}`);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            smoothScrollTo(href);
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
                : "bg-transparent"
                }`}
        >
            <ResponsiveContainer>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                        >
                            Ryan Van Valkenburg
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`text-sm font-medium transition-colors relative group ${activeSection === item.href
                                    ? "text-primary"
                                    : "hover:text-primary"
                                    }`}
                            >
                                {item.label}
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: activeSection === item.href ? "100%" : 0
                                    }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.2 }}
                                />
                            </button>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        <ModeToggle />
                        <MobileNav />
                    </div>
                </div>
            </ResponsiveContainer>
        </motion.header>
    );
} 
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/interactive/mobile-nav";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { smoothScrollTo } from "@/utils/smooth-scroll";
import { Download, Terminal } from "lucide-react";
import { glitchEffect } from "@/lib/animations";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
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
            const sectionId = href.replace('#', '');
            const element = document.getElementById(sectionId);

            if (element) {
                // Section exists on current page, scroll to it
                smoothScrollTo(href);
            } else {
                // Section doesn't exist, navigate to home page with hash
                window.location.href = `/${href}`;
            }
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-background/95 backdrop-blur-md border-b border-primary/30 shadow-lg"
                : "bg-background/80 backdrop-blur-sm border-b border-primary/10"
                }`}
        >
            <ResponsiveContainer>
                <div className="flex items-center justify-between h-16">
                    {/* Logo with retro terminal styling */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <motion.div
                            className="flex items-center gap-2 font-mono text-lg font-bold"
                            variants={glitchEffect}
                            whileHover="animate"
                        >
                            <Terminal className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                [HOME]
                            </span>
                        </motion.div>
                    </Link>

                    {/* Navigation with cleaner hover effects */}
                    <nav className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`relative px-4 py-2 text-sm font-mono font-medium transition-all duration-300 rounded-md group cursor-pointer ${activeSection === item.href
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">{"> "}{item.label}</span>

                                {/* Active indicator */}
                                {activeSection === item.href && (
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20 rounded-md"
                                        layoutId="activeNav"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}

                                {/* Hover effect */}
                                <motion.div
                                    className="absolute inset-0 bg-accent/10 rounded-md opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.2 }}
                                />

                                {/* Bottom border animation */}
                                <motion.div
                                    className="absolute bottom-0 left-1/2 h-0.5 bg-primary rounded-full"
                                    initial={{ width: 0, x: "-50%" }}
                                    animate={{
                                        width: activeSection === item.href ? "80%" : 0,
                                    }}
                                    whileHover={{
                                        width: "80%",
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </motion.button>
                        ))}
                    </nav>

                    {/* Action buttons with improved styling */}
                    <div className="flex items-center space-x-3">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="hidden sm:flex retro-glow border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white font-mono transition-all duration-300 hover:border-orange-500 cursor-pointer"
                            >
                                <a
                                    href="/resume.pdf"
                                    download="Ryan_Van_Valkenburg_Resume.pdf"
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <Download className="h-4 w-4" />
                                    {"> RESUME"}
                                </a>
                            </Button>
                        </motion.div>

                        {/* Mode toggle with better spacing */}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ModeToggle />
                        </motion.div>

                        {/* Mobile nav */}
                        <MobileNav />
                    </div>
                </div>
            </ResponsiveContainer>

            {/* Subtle scanning line across header */}
            <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ width: "30%" }}
            />
        </motion.header>
    );
} 
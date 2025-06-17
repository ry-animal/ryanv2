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
            smoothScrollTo(href);
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
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.div
                            className="flex items-center gap-2 font-mono text-lg font-bold"
                            variants={glitchEffect}
                            whileHover="animate"
                        >
                            <Terminal className="w-5 h-5 text-primary" />
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                [HOME]
                            </span>
                        </motion.div>
                    </Link>

                    {/* Navigation with improved hover effects */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`text-sm font-mono font-medium transition-all duration-300 relative group cursor-pointer px-3 py-2 rounded ${activeSection === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{
                                    scale: 0.95,
                                    transition: { duration: 0.1 }
                                }}
                            >
                                <span>{"> "}{item.label}</span>

                                {/* Retro underline animation */}
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{
                                        width: activeSection === item.href ? "100%" : 0,
                                        opacity: activeSection === item.href ? 1 : 0,
                                    }}
                                    whileHover={{
                                        width: "100%",
                                        opacity: 1,
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />

                                {/* Scanning line effect on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded"
                                    initial={{ x: "-100%", opacity: 0 }}
                                    whileHover={{
                                        x: "100%",
                                        opacity: 1,
                                        transition: { duration: 0.6, ease: "easeInOut" }
                                    }}
                                />

                                {/* Background glow on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-primary/5 rounded -z-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: { duration: 0.3 }
                                    }}
                                />
                            </motion.button>
                        ))}
                    </nav>

                    {/* Action buttons with improved retro styling */}
                    <div className="flex items-center space-x-4">
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="hidden sm:flex retro-glow border-accent text-accent hover:bg-accent hover:text-accent-foreground font-mono transition-all duration-300"
                            >
                                <a
                                    href="/resume.pdf"
                                    download="Ryan_Van_Valkenburg_Resume.pdf"
                                    className="flex items-center gap-2"
                                >
                                    <Download className="h-4 w-4" />
                                    {"> RESUME"}
                                </a>
                            </Button>
                        </motion.div>

                        {/* Mode toggle with retro styling */}
                        <div className="relative">
                            <ModeToggle />
                        </div>

                        {/* Mobile nav */}
                        <MobileNav />
                    </div>
                </div>
            </ResponsiveContainer>

            {/* Subtle scanning line across header */}
            <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ width: "30%" }}
            />
        </motion.header>
    );
} 
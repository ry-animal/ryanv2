"use client";

import { Button } from "@/components/ui/button";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { smoothScrollTo } from "@/utils/smooth-scroll";
import {
    retroGlow,
    terminalType,
    staggerContainer,
    staggerItem,
    retroHoverGlow,
    parallaxFloat,
    neonPulse,
    hologramFlicker
} from "@/lib/animations";

export default function HeroSection() {
    const phrases = [
        "Ryan Van Valkenburg",
        "Senior Software Engineer",
        "Web3 Specialist",
        "AI Connoisseur"
    ];

    const [currentText, setCurrentText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < currentPhrase.length) {
                    setCurrentText(currentPhrase.substring(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentPhrase.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, isDeleting ? 50 : currentText.length === currentPhrase.length ? 0 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, currentPhraseIndex, isDeleting, phrases]);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-18">
            {/* Retro grid background */}
            <div className="absolute inset-0 retro-grid opacity-20" />

            {/* Floating data streams - theme-aware */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-30"
                    style={{
                        left: `${20 + i * 15}%`,
                        height: "200px",
                    }}
                    animate={{
                        y: ["100vh", "-200px"],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear",
                    }}
                />
            ))}

            <ResponsiveContainer className="text-center relative z-40">
                <motion.div
                    className="space-y-8 md:space-y-12"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* Main title with terminal effect */}
                    <motion.div
                        className="space-y-4"
                        variants={staggerItem}
                    >
                        <motion.div className="flex justify-center">
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight relative h-[1.2em] flex items-center justify-center font-sans"
                                style={{ minWidth: "20ch" }}
                                variants={hologramFlicker}
                            >
                                <span
                                    className="relative inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent terminal-cursor"
                                    style={{
                                        backgroundSize: "200% 200%",
                                        animation: "gradient 4s ease infinite, retro-glow 3s ease-in-out infinite alternate"
                                    }}
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl z-[-1]" />
                                    {currentText}
                                </span>
                            </motion.h1>
                        </motion.div>
                    </motion.div>

                    {/* Description with retro styling */}
                    <motion.div variants={staggerItem}>
                        <motion.div
                            className="md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono border border-primary/20 rounded-lg p-6 bg-card/50 backdrop-blur-sm transition-all duration-300"
                            whileHover={{
                                borderColor: "rgb(var(--primary) / 0.4)",
                                boxShadow: "0 0 20px rgb(var(--primary) / 0.1)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <span className="text-accent">$</span> cat bio.txt
                            <br />
                            <span className="text-muted-foreground">
                                Experienced software engineer with 9 years building scalable applications at Microsoft, GameStop, Boeing, AI, and DeFi/web3 startups.
                                Specializing in Fullstack with React, Next.js, TypeScript, Golang, AI and blockchain technologies with a proven track record of leading teams and delivering high-impact solutions.
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Action buttons with improved hover effects */}
                    <motion.div variants={staggerItem}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                                    size="lg"
                                    asChild
                                    className="min-w-[140px] retro-glow bg-primary text-primary-foreground hover:bg-primary/90 border border-primary font-mono transition-all duration-300"
                                >
                                    <Link href="/projects">
                                        {"> View Projects"}
                                    </Link>
                                </Button>
                            </motion.div>
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
                                    size="lg"
                                    asChild
                                    className="min-w-[140px] retro-glow border-orange-500/70 text-orange-500 hover:border-orange-500 hover:text-orange-500 font-mono transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <Link href="#contact">
                                        {"> Contact Me"}
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Social links with improved retro icons */}
                    <motion.div variants={staggerItem}>
                        <div className="flex justify-center gap-6 pt-4 md:pt-8">
                            {[
                                { href: "https://github.com/ry-animal", icon: Github, label: "GitHub", color: "primary" },
                                { href: "https://www.linkedin.com/in/ryanlvv/", icon: Linkedin, label: "LinkedIn", color: "accent" },
                                { href: "https://x.com/ryanlvv", icon: Twitter, label: "X", color: "primary" },
                                { href: "mailto:ryanlvv@gmail.com", icon: Mail, label: "Email", color: "accent" }
                            ].map((social, index) => (
                                <motion.div
                                    key={social.label}
                                    className="relative"
                                    variants={parallaxFloat}
                                    custom={index}
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{
                                            scale: 0.9,
                                            transition: { duration: 0.1 }
                                        }}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            asChild
                                            className={`border border-${social.color}/30 hover:border-${social.color} hover:bg-${social.color}/10 text-${social.color} transition-all duration-300`}
                                        >
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="h-5 w-5" />
                                            </a>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Scroll indicator with improved animation */}
                    <motion.div
                        variants={staggerItem}
                        className="pb-4 md:pb-8"
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{
                                    scale: 0.9,
                                    transition: { duration: 0.1 }
                                }}
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => smoothScrollTo('#about')}
                                    aria-label="Scroll to about section"
                                    className="border border-accent/30 hover:border-accent text-accent hover:bg-accent/10 transition-all duration-300"
                                >
                                    <ArrowDown className="h-5 w-5" />
                                </Button>
                            </motion.div>

                            {/* Pulsing glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-accent/20 rounded-full -z-10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.1, 0.2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </ResponsiveContainer>
        </section>
    );
} 
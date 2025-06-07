"use client";

import { Button } from "@/components/ui/button";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ArrowDown, Github, Linkedin, Mail, Twitter, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { smoothScrollTo } from "@/utils/smooth-scroll";

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
                // Typing
                if (currentText.length < currentPhrase.length) {
                    setCurrentText(currentPhrase.substring(0, currentText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
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
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-20">
            <ResponsiveContainer className="text-center">
                <div className="space-y-6 md:space-y-8 relative z-10">
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight relative h-[1.2em] flex items-center justify-center"
                                style={{ minWidth: "20ch" }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span
                                    className="relative inline-block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent cursor-default"
                                    style={{
                                        backgroundSize: "200% 200%",
                                        animation: "gradient 3s ease infinite, glow 2s ease-in-out infinite alternate"
                                    }}
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10" />
                                    {currentText}
                                </span>
                            </motion.h1>
                        </div>
                    </div>

                    <ScrollReveal delay={0.1}>
                        <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Experienced software engineer with 10+ years building scalable applications at Microsoft, GameStop, Boeing, AI, and DeFi/web3 startups.
                            Specializing in React, Next.js, TypeScript, and blockchain technologies with a proven track record of leading teams and delivering high-impact solutions.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" asChild className="min-w-[140px]">
                                <Link href="/projects">
                                    View My Work
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="min-w-[140px]">
                                <Link href="#contact">
                                    Get In Touch
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <div className="flex justify-center gap-6 pt-4 md:pt-8">
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://github.com/ry-animal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://www.linkedin.com/in/ryanlvv/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://x.com/ryanlvv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="mailto:ryanlvv@gmail.com"
                                    aria-label="Email"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.8}>
                        <div className="pt-8 md:pt-16">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="animate-bounce hover:animate-none"
                                onClick={() => smoothScrollTo('#about')}
                                aria-label="Scroll to about section"
                            >
                                <ArrowDown className="h-5 w-5" />
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </ResponsiveContainer>
        </section>
    );
} 
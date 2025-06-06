"use client";

import { Button } from "@/components/ui/button";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <ResponsiveContainer className="text-center">
                <ScrollReveal>
                    <div className="space-y-8">
                        {/* Main heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                    Ryan Van Valkenburg
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                                Full-Stack Developer & UI/UX Enthusiast
                            </p>
                        </div>

                        {/* Description */}
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Senior Full-Stack Developer specializing in React, Next.js, and TypeScript.
                                I build scalable web applications with exceptional user experiences and clean, maintainable code.
                            </p>
                        </ScrollReveal>

                        {/* CTA Buttons */}
                        <ScrollReveal delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button size="lg" asChild className="min-w-[140px]">
                                    <Link href="/projects">
                                        View My Work
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="min-w-[140px]">
                                    <Link href="/contact">
                                        Get In Touch
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Social Links */}
                        <ScrollReveal delay={0.6}>
                            <div className="flex justify-center gap-6 pt-8">
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
                                        href="mailto:ryan@ryanvv.com"
                                        aria-label="Email"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Scroll indicator */}
                        <ScrollReveal delay={0.8}>
                            <div className="pt-16">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="animate-bounce"
                                    onClick={() => {
                                        const nextSection = document.querySelector('#about');
                                        nextSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    aria-label="Scroll to about section"
                                >
                                    <ArrowDown className="h-5 w-5" />
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </ScrollReveal>
            </ResponsiveContainer>
        </section>
    );
} 
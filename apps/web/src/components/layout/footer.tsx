"use client";

import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import { smoothScrollToTop } from "@/utils/smooth-scroll";

const navigation = {
    main: [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ],
    projects: [
        { name: "All Projects", href: "/projects" },
        { name: "Modern Portfolio", href: "/projects/better-t-stack-portfolio" },
        { name: "SaaS Dashboard", href: "/projects/saas-dashboard" },
    ],
    social: [
        {
            name: "GitHub",
            href: "https://github.com/ry-animal",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/ryanlvv/",
            icon: Linkedin,
        },
        {
            name: "Email",
            href: "mailto:ryanlvv@gmail.com",
            icon: Mail,
        },
        {
            name: "Telegram",
            href: "https://t.me/ryan_v2",
            icon: MessageCircle,
        },
        {
            name: "X",
            href: "https://x.com/ryanlvv",
            icon: Twitter,
        },
    ],
};

const scrollToTop = () => {
    smoothScrollToTop();
};

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <ResponsiveContainer>
                <div className="py-8 md:py-16">
                    <div className="space-y-8 md:hidden">
                        <div className="text-center">
                            <h3 className="font-bold text-lg mb-3">Ryan Van Valkenburg</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Senior Software Engineer & Web3 Specialist
                            </p>
                            <div className="flex justify-center gap-2">
                                {navigation.social.map((item) => (
                                    <Button
                                        key={item.name}
                                        variant="ghost"
                                        size="icon"
                                        asChild
                                    >
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.name}
                                        >
                                            <item.icon className="h-4 w-4" />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
                                <ul className="space-y-1">
                                    {navigation.main.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-primary transition-colors text-xs"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold mb-3 text-sm">Featured Work</h4>
                                <ul className="space-y-1">
                                    {navigation.projects.slice(0, 3).map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-primary transition-colors text-xs"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button asChild className="flex-1">
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                            <Button
                                variant="outline"
                                onClick={scrollToTop}
                                className="flex items-center gap-1 px-4"
                            >
                                <ArrowUp className="size-4" />
                                Top
                            </Button>
                        </div>
                    </div>

                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="md:col-span-2 lg:col-span-1">
                            <h3 className="font-bold text-lg mb-4">Ryan Van Valkenburg</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Senior Software Engineer specializing in React, Next.js, TypeScript, and blockchain technologies.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {navigation.social.map((item) => (
                                    <Button
                                        key={item.name}
                                        variant="ghost"
                                        size="icon"
                                        asChild
                                    >
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.name}
                                        >
                                            <item.icon className="h-4 w-4" />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Navigation</h4>
                            <ul className="space-y-2">
                                {navigation.main.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Featured Work</h4>
                            <ul className="space-y-2">
                                {navigation.projects.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-2 lg:col-span-1">
                            <h4 className="font-semibold mb-4">Get in Touch</h4>
                            <p className="text-muted-foreground text-sm mb-4">
                                Ready to start a project or just want to chat?
                            </p>
                            <div className="flex flex-col md:flex-row lg:flex-col gap-3">
                                <Button asChild className="w-full md:w-auto lg:w-full">
                                    <Link href="#contact">Contact Me</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={scrollToTop}
                                    className="w-full md:w-auto lg:w-full flex items-center justify-center gap-1"
                                >
                                    <ArrowUp className="size-4" />
                                    Back to Top
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t mt-12 pt-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                            <p className="text-muted-foreground text-sm">
                                © {new Date().getFullYear()} Ryan Van Valkenburg. All rights reserved.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                                <span>Built with Next.js & TypeScript</span>
                                <span className="hidden sm:inline">•</span>
                                <span>Deployed on Vercel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ResponsiveContainer>
        </footer>
    );
} 
"use client";

import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

const navigation = {
    main: [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
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
            href: "mailto:ryan@ryanvv.com",
            icon: Mail,
        },
    ],
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <ResponsiveContainer>
                <div className="py-16">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <div className="md:col-span-1">
                            <h3 className="font-bold text-lg mb-4">Ryan Van Valkenburg</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Full-stack developer passionate about creating beautiful,
                                functional, and user-centered digital experiences.
                            </p>
                            <div className="flex space-x-4">
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

                        {/* Navigation */}
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

                        {/* Projects */}
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

                        {/* Contact & Back to Top */}
                        <div>
                            <h4 className="font-semibold mb-4">Get in Touch</h4>
                            <p className="text-muted-foreground text-sm mb-4">
                                Ready to start a project or just want to chat?
                            </p>
                            <Button asChild className="mb-6">
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={scrollToTop}
                                className="block"
                            >
                                <ArrowUp className="mr-2 h-4 w-4" />
                                Back to Top
                            </Button>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-muted-foreground text-sm">
                            © {new Date().getFullYear()} Ryan Van Valkenburg. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>Built with Next.js & TypeScript</span>
                            <span>•</span>
                            <span>Deployed on Vercel</span>
                        </div>
                    </div>
                </div>
            </ResponsiveContainer>
        </footer>
    );
} 
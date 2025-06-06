"use client";

import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ProjectCard } from "@/components/interactive/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock data for now - we'll replace this with actual tRPC data fetching
const mockProjects = [
    {
        id: 1,
        slug: "better-t-stack-portfolio",
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with Better-T-Stack, featuring smooth animations and optimal performance.",
        technologies: JSON.stringify(["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "tRPC"]),
        githubUrl: "https://github.com/username/portfolio",
        liveUrl: "https://portfolio.example.com",
        imageUrl: "/images/portfolio-preview.jpg",
        featured: true,
    },
    {
        id: 2,
        slug: "ecommerce-platform",
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: JSON.stringify(["React", "Node.js", "PostgreSQL", "Stripe", "Redis"]),
        githubUrl: "https://github.com/username/ecommerce",
        liveUrl: "https://shop.example.com",
        imageUrl: "/images/ecommerce-preview.jpg",
        featured: true,
    },
    {
        id: 3,
        slug: "task-management-app",
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
        technologies: JSON.stringify(["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"]),
        githubUrl: "https://github.com/username/task-app",
        liveUrl: null,
        imageUrl: "/images/tasks-preview.jpg",
        featured: false,
    },
];

export default function ProjectsSection() {
    // In the future, we'll fetch from tRPC:
    // const projects = await trpc.portfolio.getProjects.query({ featured: true });
    const projects = mockProjects.filter(p => p.featured);

    return (
        <section id="projects" className="py-20 lg:py-32">
            <ResponsiveContainer>
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 0.1}>
                            <ProjectCard project={project} />
                        </ScrollReveal>
                    ))}
                </div>

                {/* View All Projects Button */}
                <ScrollReveal delay={0.4}>
                    <div className="text-center">
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/projects">
                                View All Projects
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </ResponsiveContainer>
        </section>
    );
} 
"use client";

import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ProjectCard } from "@/components/interactive/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockProjects = [
    {
        id: 1,
        slug: "better-t-stack-portfolio",
        title: "Modern Portfolio Website",
        description: "A performant portfolio built with Next.js 15, featuring Server Components, Framer Motion animations, and 95+ Lighthouse scores.",
        technologies: JSON.stringify(["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]),
        githubUrl: "https://github.com/ry-animal/ryanv2",
        liveUrl: "https://web-1ea6shdgl-ryanimals-projects.vercel.app",
        imageUrl: "/images/portfolio-preview.jpg",
        featured: true,
    },
    {
        id: 2,
        slug: "saas-dashboard",
        title: "SaaS Analytics Dashboard",
        description: "Real-time analytics dashboard with interactive charts, user management, and subscription billing integration.",
        technologies: JSON.stringify(["React", "Node.js", "PostgreSQL", "Chart.js", "Stripe"]),
        githubUrl: "https://github.com/ry-animal/dashboard-analytics",
        liveUrl: "https://analytics-dashboard-demo.vercel.app",
        imageUrl: "/images/ecommerce-preview.jpg",
        featured: true,
    },
    {
        id: 3,
        slug: "ai-content-generator",
        title: "AI Content Generator",
        description: "AI-powered content creation tool with GPT integration, template management, and collaborative editing features.",
        technologies: JSON.stringify(["Next.js", "OpenAI API", "PostgreSQL", "tRPC", "Prisma"]),
        githubUrl: "https://github.com/ry-animal/ai-content-gen",
        liveUrl: null,
        imageUrl: "/images/tasks-preview.jpg",
        featured: false,
    },
];

export default function ProjectsSection() {
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 0.1}>
                            <ProjectCard project={project} />
                        </ScrollReveal>
                    ))}
                </div>

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
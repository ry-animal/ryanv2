"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ProjectCard } from "@/components/interactive/project-card";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ProjectFilter } from "@/components/interactive/project-filter";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
const allProjects = [
    {
        id: "1",
        slug: "better-t-stack-portfolio",
        title: "Modern Portfolio Website",
        description: "A performant portfolio built with Next.js 15, featuring Server Components, Framer Motion animations, and 95+ Lighthouse scores.",
        technologies: JSON.stringify(["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]),
        githubUrl: "https://github.com/ry-animal/ryanv2",
        liveUrl: "https://web-1ea6shdgl-ryanimals-projects.vercel.app",
        imageUrl: "/images/portfolio-preview.svg",
        featured: true,
        category: "Full-Stack",
        status: "Completed",
    },
    {
        id: "2",
        slug: "saas-dashboard",
        title: "SaaS Analytics Dashboard",
        description: "Real-time analytics dashboard with interactive charts, user management, and subscription billing integration.",
        technologies: JSON.stringify(["React", "Node.js", "PostgreSQL", "Chart.js", "Stripe"]),
        githubUrl: "https://github.com/ry-animal/dashboard-analytics",
        liveUrl: "https://analytics-dashboard-demo.vercel.app",
        imageUrl: "/images/ecommerce-preview.svg",
        featured: true,
        category: "Full-Stack",
        status: "Completed",
    },
    {
        id: "3",
        slug: "ai-content-generator",
        title: "AI Content Generator",
        description: "AI-powered content creation tool with GPT integration, template management, and collaborative editing features.",
        technologies: JSON.stringify(["Next.js", "OpenAI API", "PostgreSQL", "tRPC", "Prisma"]),
        githubUrl: "https://github.com/ry-animal/ai-content-gen",
        liveUrl: undefined,
        imageUrl: "/images/tasks-preview.jpg",
        featured: false,
        category: "Full-Stack",
        status: "In Progress",
    },
    {
        id: "4",
        slug: "real-estate-platform",
        title: "Real Estate Platform",
        description: "Property listing platform with advanced search, virtual tours, and lead management system.",
        technologies: JSON.stringify(["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"]),
        githubUrl: "https://github.com/ry-animal/real-estate-app",
        liveUrl: "https://realestate-demo.vercel.app",
        imageUrl: "/images/weather-preview.jpg",
        featured: false,
        category: "Full-Stack",
        status: "Completed",
    },
    {
        id: "5",
        slug: "developer-tools-suite",
        title: "Developer Tools Suite",
        description: "Collection of developer productivity tools including code formatters, API testing, and performance monitoring.",
        technologies: JSON.stringify(["Node.js", "Electron", "TypeScript", "MongoDB", "Docker"]),
        githubUrl: "https://github.com/ry-animal/dev-tools",
        liveUrl: undefined,
        imageUrl: "/images/monitoring-preview.jpg",
        featured: false,
        category: "Backend",
        status: "In Progress",
    },
    {
        id: "6",
        slug: "component-library",
        title: "React Component Library",
        description: "Production-ready React component library with TypeScript, Storybook documentation, and automated testing.",
        technologies: JSON.stringify(["React", "TypeScript", "Storybook", "Jest", "Rollup"]),
        githubUrl: "https://github.com/ry-animal/react-components",
        liveUrl: "https://components.ryanvv.com",
        imageUrl: "/images/design-system-preview.jpg",
        featured: false,
        category: "Frontend",
        status: "Completed",
    },
];



export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTech, setSelectedTech] = useState<string[]>([]);

    const allTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        allProjects.forEach(project => {
            const techs = JSON.parse(project.technologies) as string[];
            techs.forEach(tech => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, []);

    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => {
            const matchesSearch = searchQuery === "" ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());

            const projectTechs = JSON.parse(project.technologies) as string[];
            const matchesTech = selectedTech.length === 0 ||
                selectedTech.some(tech => projectTechs.includes(tech));

            return matchesSearch && matchesTech;
        });
    }, [searchQuery, selectedTech]);

    const handleClearFilters = () => {
        setSearchQuery("");
        setSelectedTech([]);
    };

    return (
        <main className="py-20">
            <ResponsiveContainer>
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            All Projects
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore my complete portfolio of web development projects,
                            featuring modern technologies and innovative solutions.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.2}>
                    <div className="mb-12">
                        <ProjectFilter
                            technologies={allTechnologies}
                            selectedTech={selectedTech}
                            searchQuery={searchQuery}
                            onTechChange={setSelectedTech}
                            onSearchChange={setSearchQuery}
                            onClear={handleClearFilters}
                        />

                        <div className="text-center text-sm text-muted-foreground mt-6">
                            {filteredProjects.length === allProjects.length
                                ? `Showing all ${allProjects.length} projects`
                                : `Showing ${filteredProjects.length} of ${allProjects.length} projects`
                            }
                        </div>
                    </div>
                </ScrollReveal>

                {filteredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ScrollReveal key={project.id} delay={index * 0.1}>
                                <ProjectCard project={project} />
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <ScrollReveal>
                        <motion.div
                            className="text-center py-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search terms or filters to find what you're looking for.
                            </p>
                        </motion.div>
                    </ScrollReveal>
                )}
            </ResponsiveContainer>
        </main>
    );
} 
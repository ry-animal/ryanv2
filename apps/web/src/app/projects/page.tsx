"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ProjectCard } from "@/components/interactive/project-card";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

// Mock projects data - in production, this would come from your database/CMS
const allProjects = [
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
        category: "Full-Stack",
        status: "Completed",
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
        category: "Full-Stack",
        status: "Completed",
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
        category: "Full-Stack",
        status: "In Progress",
    },
    {
        id: 4,
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
        id: 5,
        slug: "developer-tools-suite",
        title: "Developer Tools Suite",
        description: "Collection of developer productivity tools including code formatters, API testing, and performance monitoring.",
        technologies: JSON.stringify(["Node.js", "Electron", "TypeScript", "MongoDB", "Docker"]),
        githubUrl: "https://github.com/ry-animal/dev-tools",
        liveUrl: null,
        imageUrl: "/images/monitoring-preview.jpg",
        featured: false,
        category: "Backend",
        status: "In Progress",
    },
    {
        id: 6,
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

const categories = ["All", "Full-Stack", "Frontend", "Backend"];
const statuses = ["All", "Completed", "In Progress"];

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");

    // Filter projects based on search and filters
    const filteredProjects = allProjects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            JSON.parse(project.technologies).some((tech: string) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
        const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;

        return matchesSearch && matchesCategory && matchesStatus;
    });

    return (
        <main className="py-20">
            <ResponsiveContainer>
                {/* Page Header */}
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

                {/* Filters and Search */}
                <ScrollReveal delay={0.2}>
                    <div className="mb-12 space-y-6">
                        {/* Search */}
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-medium">Filters:</span>
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>

                            {/* Status Filter */}
                            <div className="flex flex-wrap gap-2">
                                {statuses.map((status) => (
                                    <Button
                                        key={status}
                                        variant={selectedStatus === status ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedStatus(status)}
                                    >
                                        {status}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="text-center text-sm text-muted-foreground">
                            {filteredProjects.length === allProjects.length
                                ? `Showing all ${allProjects.length} projects`
                                : `Showing ${filteredProjects.length} of ${allProjects.length} projects`
                            }
                        </div>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
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
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search terms or filters to find what you're looking for.
                            </p>
                            <Button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("All");
                                    setSelectedStatus("All");
                                }}
                                variant="outline"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    </ScrollReveal>
                )}
            </ResponsiveContainer>
        </main>
    );
} 
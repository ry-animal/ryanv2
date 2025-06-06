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
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with Better-T-Stack, featuring smooth animations and optimal performance.",
        technologies: JSON.stringify(["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "tRPC"]),
        githubUrl: "https://github.com/username/portfolio",
        liveUrl: "https://portfolio.example.com",
        imageUrl: "/images/portfolio-preview.jpg",
        featured: true,
        category: "Full-Stack",
        status: "Completed",
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
        category: "Full-Stack",
        status: "Completed",
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
        category: "Full-Stack",
        status: "Completed",
    },
    {
        id: 4,
        slug: "weather-dashboard",
        title: "Weather Dashboard",
        description: "Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
        technologies: JSON.stringify(["React", "Chart.js", "OpenWeather API", "Leaflet"]),
        githubUrl: "https://github.com/username/weather-dashboard",
        liveUrl: "https://weather.example.com",
        imageUrl: "/images/weather-preview.jpg",
        featured: false,
        category: "Frontend",
        status: "Completed",
    },
    {
        id: 5,
        slug: "api-monitoring-tool",
        title: "API Monitoring Tool",
        description: "Comprehensive API monitoring and analytics platform with real-time alerts and performance tracking.",
        technologies: JSON.stringify(["Node.js", "InfluxDB", "Grafana", "Docker", "Kubernetes"]),
        githubUrl: "https://github.com/username/api-monitor",
        liveUrl: null,
        imageUrl: "/images/monitoring-preview.jpg",
        featured: false,
        category: "Backend",
        status: "In Progress",
    },
    {
        id: 6,
        slug: "design-system",
        title: "Component Design System",
        description: "Comprehensive design system and component library with documentation and interactive examples.",
        technologies: JSON.stringify(["React", "Storybook", "Tailwind CSS", "TypeScript"]),
        githubUrl: "https://github.com/username/design-system",
        liveUrl: "https://design-system.example.com",
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
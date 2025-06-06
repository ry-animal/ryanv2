import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import Link from "next/link";
import { generateMetadata as generateSEOMetadata } from "@/components/seo/meta-tags";

// Mock project data - in production, this would come from your database/CMS
const getProjectBySlug = async (slug: string) => {
    const projects = [
        {
            id: 1,
            slug: "better-t-stack-portfolio",
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with Better-T-Stack, featuring smooth animations and optimal performance.",
            longDescription: `This portfolio website represents the culmination of modern web development practices, built using the Better-T-Stack architecture. The project showcases advanced React patterns, server-side rendering with Next.js 15, and a comprehensive design system.

Key technical achievements include implementing a mobile-first responsive design that scales seamlessly from 320px to 1536px+ viewports, utilizing Framer Motion for smooth scroll-triggered animations, and maintaining excellent performance scores through optimized image loading and code splitting.

The development process emphasized accessibility compliance, following WCAG 2.1 AA guidelines, and implementing proper semantic HTML structure. The codebase maintains type safety throughout with TypeScript and follows modern React patterns including Server Components for optimal performance.`,
            technologies: JSON.stringify(["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "tRPC", "Drizzle ORM", "PostgreSQL"]),
            githubUrl: "https://github.com/username/portfolio",
            liveUrl: "https://portfolio.example.com",
            imageUrl: "/images/portfolio-preview.jpg",
            featured: true,
            createdAt: "2024-01-15",
            updatedAt: "2024-01-20",
            category: "Full-Stack",
            status: "Completed",
            gallery: [
                "/images/portfolio-gallery-1.jpg",
                "/images/portfolio-gallery-2.jpg",
                "/images/portfolio-gallery-3.jpg",
            ],
        },
        {
            id: 2,
            slug: "ecommerce-platform",
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
            longDescription: `A comprehensive e-commerce platform built to handle high-traffic scenarios with real-time inventory management and seamless payment processing. The architecture leverages modern microservices patterns for scalability and maintainability.

The platform features a customer-facing storefront with advanced filtering and search capabilities, a comprehensive admin dashboard for inventory and order management, and real-time notifications for stock updates and order processing.

Security was a primary concern, implementing proper authentication flows, payment card industry (PCI) compliance for payment processing, and comprehensive input validation to prevent common web vulnerabilities.`,
            technologies: JSON.stringify(["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS"]),
            githubUrl: "https://github.com/username/ecommerce",
            liveUrl: "https://shop.example.com",
            imageUrl: "/images/ecommerce-preview.jpg",
            featured: true,
            createdAt: "2023-08-10",
            updatedAt: "2023-12-15",
            category: "Full-Stack",
            status: "Completed",
            gallery: [
                "/images/ecommerce-gallery-1.jpg",
                "/images/ecommerce-gallery-2.jpg",
                "/images/ecommerce-gallery-3.jpg",
            ],
        },
    ];

    return projects.find(p => p.slug === slug) || null;
};

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return generateSEOMetadata({
        title: project.title,
        description: project.description,
        type: "article",
        publishedTime: project.createdAt,
        modifiedTime: project.updatedAt,
        ogImage: project.imageUrl || undefined,
        keywords: [
            ...JSON.parse(project.technologies),
            project.category,
            "Portfolio Project",
            "Web Development",
        ],
    });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const technologies = JSON.parse(project.technologies);

    return (
        <main className="py-20">
            <ResponsiveContainer>
                {/* Back Button */}
                <div className="mb-8">
                    <Button variant="ghost" asChild>
                        <Link href="/#projects">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                    </Button>
                </div>

                {/* Project Header */}
                <div className="mb-12">
                    <div className="mb-6">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <Badge variant="secondary">{project.category}</Badge>
                            <Badge variant="outline">{project.status}</Badge>
                            {project.featured && (
                                <Badge variant="default">Featured</Badge>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    {/* Project Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Completed {new Date(project.updatedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>Ryan Van Valkenburg</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                            <Button size="lg" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View Live Site
                                </a>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button variant="outline" size="lg" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    View Source
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Hero Image */}
                {project.imageUrl && (
                    <div className="relative aspect-video mb-12 overflow-hidden rounded-lg">
                        <OptimizedImage
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                        />
                    </div>
                )}

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                                {project.longDescription.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Project Gallery</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {project.gallery.map((image, index) => (
                                            <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                                                <OptimizedImage
                                                    src={image}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Technologies Used</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech: string) => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Project Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Links</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {project.liveUrl && (
                                    <Button variant="outline" className="w-full justify-start" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button variant="outline" className="w-full justify-start" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Source Code
                                        </a>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </ResponsiveContainer>
        </main>
    );
} 
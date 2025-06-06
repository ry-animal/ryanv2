"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { hoverLift, motionSafe, staggerItem, projectCardHover, magneticHover } from "@/lib/animations";

interface ProjectCardProps {
    project: {
        id: number;
        slug: string;
        title: string;
        description: string;
        technologies?: string | null;
        githubUrl?: string | null;
        liveUrl?: string | null;
        imageUrl?: string | null;
        featured?: boolean;
    };
}

export function ProjectCard({ project }: ProjectCardProps) {
    // Parse technologies JSON string
    const technologies = project.technologies
        ? JSON.parse(project.technologies)
        : [];

    return (
        <motion.div
            variants={motionSafe(staggerItem)}
            {...projectCardHover}
            className="h-full"
        >
            <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-0 hover:border-primary/20">
                {project.imageUrl && (
                    <div className="relative aspect-video overflow-hidden">
                        <OptimizedImage
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {project.featured && (
                            <Badge
                                variant="secondary"
                                className="absolute right-2 top-2"
                            >
                                Featured
                            </Badge>
                        )}
                    </div>
                )}

                <CardHeader>
                    <CardTitle className="line-clamp-2">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="hover:text-primary transition-colors"
                        >
                            {project.title}
                        </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                        {project.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Technologies */}
                    {technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {technologies.slice(0, 4).map((tech: string) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                            {technologies.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                    +{technologies.length - 4} more
                                </Badge>
                            )}
                        </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <motion.div {...magneticHover} className="flex-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="w-full transition-colors hover:bg-primary hover:text-primary-foreground"
                                >
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                        {project.liveUrl && (
                            <motion.div {...magneticHover} className="flex-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="w-full transition-colors hover:bg-primary hover:text-primary-foreground"
                                >
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
} 
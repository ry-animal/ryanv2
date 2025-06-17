"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RetroCard, RetroGlowBox } from "@/components/ui/retro-card";

interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl: string;
    featured: boolean;
}

interface ProjectCardProps {
    project: Project;
}

const retroCardHover = {
    rest: {
        scale: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        transition: {
            duration: 0.3,
            type: "tween",
            ease: [0.25, 0.1, 0.25, 1]
        }
    },
    hover: {
        scale: 1.02,
        y: -5,
        rotateX: 5,
        rotateY: 5,
        transition: {
            duration: 0.3,
            type: "tween",
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

const imageOverlay = {
    rest: { opacity: 0, scale: 0.8 },
    hover: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export function ProjectCard({ project }: ProjectCardProps) {
    const technologyColors = [
        "teal",
        "orange",
        "indigo",
        "cyan"
    ];

    return (
        <motion.div
            className="group perspective-1000"
            variants={retroCardHover}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <RetroCard
                variant="default"
                className="h-full border-2 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
                {/* Featured badge */}
                {project.featured && (
                    <motion.div
                        className="absolute top-4 right-4 z-20"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <RetroGlowBox
                            glowColor="orange"
                            intensity="medium"
                            className="px-3 py-1 text-xs font-mono font-bold"
                        >
                            FEATURED
                        </RetroGlowBox>
                    </motion.div>
                )}

                <CardHeader className="p-0 relative">
                    {/* Project image with CRT overlay */}
                    <div className="relative h-48 overflow-hidden bg-muted/20">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 z-10" />

                        {/* CRT scanline overlay - theme aware */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent bg-[length:100%_3px] z-10 dark:via-primary/10" />

                        <OptimizedImage
                            src={project.imageUrl}
                            alt={project.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Terminal overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center z-20"
                            variants={imageOverlay}
                        >
                            <div className="text-center font-mono">
                                <div className="text-primary text-lg font-bold mb-2">
                                    {"> VIEW_PROJECT"}
                                </div>
                                <div className="text-muted-foreground text-sm">
                                    $ cat project_details.json
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-6 pb-4">
                        <CardTitle className="text-xl font-bold mb-2 font-sans text-foreground group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </CardTitle>

                        {/* Terminal-style description */}
                        <div className="font-mono text-sm">
                            <span className="text-accent">$</span>{" "}
                            <span className="text-muted-foreground">cat description.txt</span>
                            <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                                {project.description}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                    {/* Technology stack */}
                    <div className="mb-6">
                        <div className="text-sm font-mono text-accent mb-3">
                            $ ls technologies/
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <RetroGlowBox
                                    key={tech}
                                    glowColor={technologyColors[index % technologyColors.length] as any}
                                    intensity="low"
                                    className="px-3 py-1 text-xs font-mono"
                                >
                                    {tech}
                                </RetroGlowBox>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                        {project.githubUrl && (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1"
                            >
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="w-full retro-glow font-mono border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                >
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Github className="h-4 w-4" />
                                        {"> CODE"}
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                        {project.liveUrl && (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1"
                            >
                                <Button
                                    size="sm"
                                    asChild
                                    className="w-full retro-glow font-mono bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                                >
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        {"> DEMO"}
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </CardContent>
            </RetroCard>
        </motion.div>
    );
} 
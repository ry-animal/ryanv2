"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { Github, Star, GitFork, ExternalLink, Calendar } from "lucide-react";

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
}

interface GitHubStats {
    public_repos: number;
    followers: number;
    following: number;
}

const GITHUB_USERNAME = "ry-animal";

export function GitHubStats() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
                const userData = await userResponse.json();
                setStats({
                    public_repos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following,
                });

                const reposResponse = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
                );
                const reposData = await reposResponse.json();
                setRepos(reposData);
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-20 lg:py-32">
            <ResponsiveContainer>
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            GitHub Activity
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            My latest open source contributions and projects.
                        </p>
                    </ScrollReveal>
                </div>

                {stats && (
                    <ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <div className="text-2xl font-bold text-primary">
                                        {stats.public_repos}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Public Repositories</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <div className="text-2xl font-bold text-primary">
                                        {stats.followers}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Followers</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <div className="text-2xl font-bold text-primary">
                                        {stats.following}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Following</p>
                                </CardContent>
                            </Card>
                        </div>
                    </ScrollReveal>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="h-6 bg-muted rounded animate-pulse" />
                                        <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="h-3 bg-muted rounded animate-pulse" />
                                            <div className="h-3 bg-muted rounded animate-pulse w-2/3" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        repos.map((repo) => (
                            <motion.div key={repo.id} variants={itemVariants}>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-lg flex items-center gap-2">
                                                    <Github className="h-5 w-5" />
                                                    {repo.name}
                                                </CardTitle>
                                                <CardDescription className="mt-2">
                                                    {repo.description || "No description provided"}
                                                </CardDescription>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                asChild
                                            >
                                                <a
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {repo.topics && repo.topics.length > 0 && (
                                                <div className="flex flex-wrap gap-1">
                                                    {repo.topics.slice(0, 3).map((topic) => (
                                                        <Badge
                                                            key={topic}
                                                            variant="secondary"
                                                            className="text-xs"
                                                        >
                                                            {topic}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <div className="flex items-center gap-4">
                                                    {repo.language && (
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-3 h-3 bg-primary rounded-full" />
                                                            {repo.language}
                                                        </div>
                                                    )}
                                                    <div className="flex items-center gap-1">
                                                        <Star className="h-3 w-3" />
                                                        {repo.stargazers_count}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <GitFork className="h-3 w-3" />
                                                        {repo.forks_count}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Calendar className="h-3 w-3" />
                                                Updated {formatDate(repo.updated_at)}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))
                    )}
                </motion.div>

                <div className="text-center mt-12">
                    <ScrollReveal>
                        <Button variant="outline" size="lg" asChild>
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Github className="h-5 w-5" />
                                View All Repositories
                            </a>
                        </Button>
                    </ScrollReveal>
                </div>
            </ResponsiveContainer>
        </section>
    );
} 
"use client";

import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

// Mock experience data - will be replaced with tRPC data later
const experienceData = [
    {
        id: 1,
        company: "Tech Innovations Inc.",
        position: "Senior Full-Stack Developer",
        location: "San Francisco, CA",
        startDate: "Jan 2022",
        endDate: "Present",
        current: true,
        description: "Lead developer for high-traffic web applications serving 100k+ users. Architected and implemented microservices using Node.js, React, and PostgreSQL. Mentored junior developers and established best practices for code quality and testing.",
        technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
        logoUrl: "/images/company-1.jpg"
    },
    {
        id: 2,
        company: "StartupLab",
        position: "Full-Stack Developer",
        location: "Remote",
        startDate: "Mar 2020",
        endDate: "Dec 2021",
        current: false,
        description: "Built and maintained multiple client applications from concept to deployment. Developed responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UI components.",
        technologies: ["React", "TypeScript", "Express", "MongoDB", "Tailwind CSS"],
        logoUrl: "/images/company-2.jpg"
    },
    {
        id: 3,
        company: "WebCraft Solutions",
        position: "Frontend Developer",
        location: "Austin, TX",
        startDate: "Jun 2019",
        endDate: "Feb 2020",
        current: false,
        description: "Specialized in creating engaging user interfaces and improving user experience. Converted design mockups into responsive, interactive web applications. Optimized application performance and implemented accessibility standards.",
        technologies: ["JavaScript", "React", "CSS3", "Sass", "Webpack"],
        logoUrl: "/images/company-3.jpg"
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 lg:py-32">
            <ResponsiveContainer>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Professional Experience
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            My journey through various roles and companies, building expertise in modern web development.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-px"></div>

                    {/* Experience items */}
                    <div className="space-y-12">
                        {experienceData.map((experience, index) => (
                            <ScrollReveal key={experience.id} delay={index * 0.1}>
                                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1/2 z-10"></div>

                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'
                                        }`}>
                                        <Card className="hover:shadow-lg transition-shadow duration-300">
                                            <CardHeader>
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <div>
                                                        <CardTitle className="text-xl">
                                                            {experience.position}
                                                        </CardTitle>
                                                        <CardDescription className="text-lg font-medium text-primary">
                                                            {experience.company}
                                                        </CardDescription>
                                                    </div>
                                                    {experience.current && (
                                                        <Badge variant="secondary" className="w-fit">
                                                            Current
                                                        </Badge>
                                                    )}
                                                </div>

                                                {/* Date and Location */}
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>
                                                            {experience.startDate} - {experience.endDate}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>{experience.location}</span>
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {experience.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {experience.technologies.map((tech) => (
                                                        <Badge key={tech} variant="outline" className="text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </ResponsiveContainer>
        </section>
    );
} 
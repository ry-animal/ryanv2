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
        company: "Freelance & Contract Work",
        position: "Senior Full-Stack Developer",
        location: "Remote",
        startDate: "Jan 2022",
        endDate: "Present",
        current: true,
        description: "Lead developer for multiple high-impact projects serving 50k+ users. Specialized in building scalable web applications using modern React ecosystem. Delivered end-to-end solutions from architecture design to deployment, working directly with clients to exceed expectations.",
        technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Vercel", "tRPC"],
        logoUrl: "/images/freelance.jpg"
    },
    {
        id: 2,
        company: "Digital Agency",
        position: "Full-Stack Developer",
        location: "Remote",
        startDate: "Mar 2019",
        endDate: "Dec 2021",
        current: false,
        description: "Built responsive web applications for enterprise clients across various industries. Collaborated with cross-functional teams to deliver pixel-perfect implementations. Optimized application performance and established development workflows that improved team productivity by 40%.",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "AWS"],
        logoUrl: "/images/agency.jpg"
    },
    {
        id: 3,
        company: "Tech Startup",
        position: "Frontend Developer",
        location: "San Francisco, CA",
        startDate: "Jun 2016",
        endDate: "Feb 2019",
        current: false,
        description: "Developed user-facing features for a fast-growing SaaS platform. Focused on creating intuitive user interfaces and smooth user experiences. Implemented comprehensive testing strategies and accessibility standards that improved user engagement by 25%.",
        technologies: ["JavaScript", "React", "Redux", "CSS3", "Webpack", "Jest"],
        logoUrl: "/images/startup.jpg"
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
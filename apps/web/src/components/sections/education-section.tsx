"use client";

import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationData = [
    {
        degree: "BA in Management Information Systems",
        school: "Washington State University",
        location: "Pullman, WA",
        years: "2010 – 2015",
        description: "Focused on business technology integration, systems analysis, and enterprise software development.",
    },
    {
        degree: "BA in Social Sciences",
        school: "Washington State University",
        location: "Pullman, WA",
        years: "2010 – 2015",
        description: "Dual degree providing comprehensive understanding of human behavior and social systems.",
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="py-20 lg:py-32">
            <ResponsiveContainer>
                <div className="text-center space-y-4 mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Education
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Academic foundation in technology and social sciences from Washington State University
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {educationData.map((education, index) => (
                        <ScrollReveal key={education.degree} delay={index * 0.2}>
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                <GraduationCap className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <div>
                                                <h3 className="text-xl font-semibold leading-tight">
                                                    {education.degree}
                                                </h3>
                                                <h4 className="text-lg text-primary font-medium">
                                                    {education.school}
                                                </h4>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="outline" className="text-xs">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {education.location}
                                                </Badge>
                                                <Badge variant="outline" className="text-xs">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    {education.years}
                                                </Badge>
                                            </div>

                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {education.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </ResponsiveContainer>
        </section>
    );
} 
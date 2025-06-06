"use client";

import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock skills data - will be replaced with tRPC data later
const skillsData = {
    frontend: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
    ],
    backend: [
        { name: "Node.js", level: 90 },
        { name: "tRPC", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Drizzle ORM", level: 85 },
    ],
    tools: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "Figma", level: 80 },
        { name: "VS Code", level: 95 },
    ],
};

const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Happy Clients", value: "30+" },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 lg:py-32 bg-muted/30">
            <ResponsiveContainer>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Bio and Stats */}
                    <div className="space-y-8">
                        <ScrollReveal>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                    About Me
                                </h2>
                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        I'm a passionate full-stack developer with over 5 years of experience
                                        creating beautiful, functional, and user-centered digital experiences.
                                        My journey started with curiosity about how websites work, and it has
                                        evolved into a love for crafting efficient, scalable solutions.
                                    </p>
                                    <p>
                                        I specialize in modern web technologies, with expertise in React,
                                        Next.js, TypeScript, and Node.js. I'm passionate about creating
                                        seamless user experiences, writing clean code, and staying up-to-date
                                        with the latest industry trends and best practices.
                                    </p>
                                    <p>
                                        When I'm not coding, you can find me exploring new technologies,
                                        contributing to open-source projects, or sharing knowledge with the
                                        developer community.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Stats */}
                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right side - Skills */}
                    <div className="space-y-8">
                        <ScrollReveal delay={0.1}>
                            <h3 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                                Skills & Technologies
                            </h3>
                        </ScrollReveal>

                        {/* Frontend Skills */}
                        <ScrollReveal delay={0.2}>
                            <Card>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Frontend Development
                                    </h4>
                                    <div className="space-y-4">
                                        {skillsData.frontend.map((skill) => (
                                            <div key={skill.name} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>{skill.name}</span>
                                                    <span className="text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <Progress value={skill.level} className="h-2" />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Backend Skills */}
                        <ScrollReveal delay={0.3}>
                            <Card>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                        Backend Development
                                    </h4>
                                    <div className="space-y-4">
                                        {skillsData.backend.map((skill) => (
                                            <div key={skill.name} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>{skill.name}</span>
                                                    <span className="text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <Progress value={skill.level} className="h-2" />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Tools & Technologies */}
                        <ScrollReveal delay={0.4}>
                            <Card>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                                        Tools & Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillsData.tools.map((skill) => (
                                            <Badge key={skill.name} variant="secondary">
                                                {skill.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </ResponsiveContainer>
        </section>
    );
} 
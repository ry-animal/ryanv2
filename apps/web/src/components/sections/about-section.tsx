"use client";

import { motion } from "framer-motion";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { AnimatedCounter } from "@/components/interactive/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillsData = {
    languages: [
        { name: "TypeScript/JavaScript", level: 95 },
        { name: "Go", level: 85 },
        { name: "Java/Kotlin", level: 80 },
        { name: "Solidity", level: 75 },
    ],
    frameworks: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "Express/Fastify", level: 90 },
        { name: "Gin", level: 85 },
        { name: "Spring", level: 80 },
        { name: "Foundry/Hardhat", level: 75 },
    ],
    platforms: [
        { name: "AWS", level: 90 },
        { name: "Azure", level: 85 },
        { name: "PCF", level: 75 },
        { name: "EVM", level: 80 },
    ],
    aiTooling: [
        "Prompt Engineering",
        "Langchain",
        "HuggingFace",
        "Cursor",
        "Windsurf",
        "deAI"
    ],
};

const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Companies", value: "7" },
    { label: "Technologies", value: "20+" },
    { label: "Team Leadership", value: "12+" },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 lg:py-32 bg-muted/30">
            <ResponsiveContainer>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <ScrollReveal>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                    About Me
                                </h2>
                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        I'm a senior software engineer with 10+ years of experience building
                                        high-performance applications at industry leaders like Microsoft, GameStop, and Boeing,
                                        plus innovative startups in the DeFi and web3 space. I've led development teams of 12+,
                                        architected complex systems, and delivered products serving millions of users.
                                    </p>
                                    <p>
                                        My expertise spans full-stack development, blockchain technologies, and cloud infrastructure.
                                        From developing Minecraft.net at Microsoft to building DeFi protocols with $110M+ TVL,
                                        I specialize in React, Next.js, TypeScript, and emerging web3 technologies like wagmi, viem, and smart contracts.
                                    </p>
                                    <p>
                                        I thrive in fast-paced environments, leading technical migrations, implementing modern architectures,
                                        and mentoring teams. My experience ranges from enterprise applications to cutting-edge blockchain solutions,
                                        always focusing on scalability, performance, and exceptional user experiences.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <AnimatedCounter
                                    key={stat.label}
                                    value={stat.value}
                                    label={stat.label}
                                    duration={2 + index * 0.2}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <ScrollReveal delay={0.1}>
                            <h3 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                                Skills & Technologies
                            </h3>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <Card>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Languages
                                    </h4>
                                    <div className="space-y-4">
                                        {skillsData.languages.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                className="space-y-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex justify-between text-sm">
                                                    <span>{skill.name}</span>
                                                    <span className="text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <Progress value={skill.level} className="h-2" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <Card>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                        Frameworks/Libraries
                                    </h4>
                                    <div className="space-y-4">
                                        {skillsData.frameworks.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                className="space-y-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex justify-between text-sm">
                                                    <span>{skill.name}</span>
                                                    <span className="text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <Progress value={skill.level} className="h-2" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <Card>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                                        Platforms
                                    </h4>
                                    <div className="space-y-4">
                                        {skillsData.platforms.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                className="space-y-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex justify-between text-sm">
                                                    <span>{skill.name}</span>
                                                    <span className="text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <Progress value={skill.level} className="h-2" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5}>
                            <Card>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                                        AI Tooling
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillsData.aiTooling.map((tool) => (
                                            <Badge key={tool} variant="secondary">
                                                {tool}
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
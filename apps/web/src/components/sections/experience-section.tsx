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
        company: "Spectral Labs",
        position: "Software Engineer - Contract",
        location: "Remote",
        startDate: "Jun 2024",
        endDate: "Jan 2025",
        current: true,
        description: "Developed complex type-safe Next.js applications with SSR and React components using TypeScript. Designed WebSocket communication system for real-time LLM chat interface. Implemented blockchain functionality using wagmi and viem libraries, including wallet connections and smart contract interactions. Integrated Elixir APIs via microservices with web channels and HuggingFace SDK.",
        technologies: ["Next.js", "TypeScript", "WebSocket", "wagmi", "viem", "Elixir", "HuggingFace", "Blockchain"],
        logoUrl: "/images/spectral.jpg"
    },
    {
        id: 2,
        company: "Seashell / Seamless Protocol",
        position: "Senior Software Engineer - Full Time",
        location: "Remote",
        startDate: "Mar 2023",
        endDate: "Mar 2024",
        current: false,
        description: "Developed and deployed a decentralized finance (DeFi) application on Next.js 13 App Directory within the Arbitrum blockchain. Utilized wagmi hooks, viem, and rainbow-kit for web3 interactions. Founding engineer of Seamless Protocol on Base. Created protocols on Arbitrum L2 and Coinbase's Base chain with TVL over $110 million. Contributed to open-source by forking Aave, Ampleforth Geysers and ENS Claims.",
        technologies: ["Next.js 13", "wagmi", "viem", "rainbow-kit", "Arbitrum", "Base", "DeFi", "PostgreSQL"],
        logoUrl: "/images/seamless.jpg"
    },
    {
        id: 3,
        company: "Snowcrash",
        position: "Lead Front End Engineer - Contract",
        location: "Remote",
        startDate: "Dec 2022",
        endDate: "Feb 2023",
        current: false,
        description: "Spearheaded Next.js adoption with Styled-Components for improved performance and maintainability. Developed gRPC microservices integration with PostgresDB. Implemented Magic.Link authorization patterns. Drove Polygon blockchain adoption for multichain NFT marketplace. Designed monorepo architecture using Turborepo with Storybook component library. Onboarded National Geographic's first web3 NFT collaboration.",
        technologies: ["Next.js", "Styled-Components", "gRPC", "PostgreSQL", "Magic.Link", "Polygon", "Turborepo", "Storybook"],
        logoUrl: "/images/snowcrash.jpg"
    },
    {
        id: 4,
        company: "GameStop NFT",
        position: "Software Engineer - Full Time",
        location: "Seattle, WA",
        startDate: "Dec 2021",
        endDate: "Dec 2022",
        current: false,
        description: "Developed user-friendly frontend interface for GameStop NFT's web3 application using Ethereum blockchain. Implemented React and web3.js for user profiles, NFTs, collections management. Utilized Storybook component library and Redux Toolkit for state management. Contributed to backend microservices using Node.js, Express, Go, and Postgres. Configured AWS Cloudfront, S3, and Lambda functions. Onboarded Loopring and IMX L2 blockchains.",
        technologies: ["React", "web3.js", "Ethereum", "Redux Toolkit", "Node.js", "Go", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
        logoUrl: "/images/gamestop.jpg"
    },
    {
        id: 5,
        company: "Nota",
        position: "Senior Software Engineer - Full Time",
        location: "Remote",
        startDate: "Apr 2021",
        endDate: "Dec 2021",
        current: false,
        description: "Collaborated with cross-functional teams developing React, Redux Sagas, Java, and Spring Boot microservices for M&T Bank financial integrations. Led transition to micro-frontend architecture using Module Federation and Webpack. Advocated for Storybook, Fullstory, and Component Libraries adoption. Implemented mobile-first responsive development, accessibility, and i18n. Maintained DevOps with Docker, Terraform, GitLab CI/CD, AWS, and Argo CD.",
        technologies: ["React", "Redux Sagas", "Java", "Spring Boot", "Module Federation", "Webpack", "Docker", "Terraform", "AWS"],
        logoUrl: "/images/nota.jpg"
    },
    {
        id: 6,
        company: "Microsoft Game Studios",
        position: "Software Development Lead - Contract",
        location: "Redmond, WA",
        startDate: "May 2020",
        endDate: "Apr 2021",
        current: false,
        description: "Consulted for Microsoft on Minecraft.net, leading and mentoring 12 developers with focus on React, TypeScript, Webpack, NX Monorepo, and Python with Django. Implemented modern web development strategies for data privacy, accessibility, and performance. Successfully managed migration from Mojang to Microsoft Accounts after acquisition. Spearheaded Java CMS setup in Docker and Kubernetes cluster deployment on Azure.",
        technologies: ["React", "TypeScript", "Webpack", "NX Monorepo", "Python", "Django", "Java", "Docker", "Kubernetes", "Azure"],
        logoUrl: "/images/microsoft.jpg"
    },
    {
        id: 7,
        company: "Boeing",
        position: "Senior Software Engineer - Full Time",
        location: "Seattle, WA",
        startDate: "Jun 2015",
        endDate: "May 2020",
        current: false,
        description: "Developed robust React and TypeScript UI for building tooling, visualizations, and user management using modern hooks and context patterns. Created charting and data visualizations using D3.js and react-charts for C-suite reporting. Leveraged Node with Serverless architecture via Azure Functions. Designed REST microservices for Teradata integration. Architected scalable micro front-end platform solution for global teams. Conducted GraphQL PoC for multiple data source integration.",
        technologies: ["React", "TypeScript", "D3.js", "Node.js", "Azure Functions", "Teradata", "GraphQL", "MongoDB", "GitLab"],
        logoUrl: "/images/boeing.jpg"
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 lg:py-32">
            <ResponsiveContainer>
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

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-px"></div>

                    <div className="space-y-12">
                        {experienceData.map((experience, index) => (
                            <ScrollReveal key={experience.id} delay={index * 0.1}>
                                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1/2 z-10"></div>

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
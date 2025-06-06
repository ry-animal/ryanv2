import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/interactive/scroll-progress";
import { WebVitals } from "@/components/analytics/web-vitals";
import Providers from "@/components/providers";
import { generateMetadata, generatePersonStructuredData, generateWebsiteStructuredData } from "@/components/seo/meta-tags";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata({
	title: "Ryan Van Valkenburg - Full-Stack Developer",
	description: "Full-stack developer specializing in React, Next.js, and modern web technologies. Creating beautiful, scalable applications with exceptional user experiences.",
	keywords: [
		"Full-Stack Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript Developer",
		"Web Developer",
		"JavaScript",
		"Node.js",
		"PostgreSQL",
		"UI/UX Design",
		"Portfolio",
		"San Francisco",
	],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							generatePersonStructuredData(),
							generateWebsiteStructuredData(),
						]),
					}}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<WebVitals />
					<ScrollProgress />
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

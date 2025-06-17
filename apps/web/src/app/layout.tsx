import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "../index.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/interactive/scroll-progress";
import { WebVitals } from "@/components/analytics/web-vitals";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner";
import Providers from "@/components/providers";
import { generateMetadata, generatePersonStructuredData, generateWebsiteStructuredData } from "@/components/seo/meta-tags";

const ibmPlexMono = IBM_Plex_Mono({
	variable: "--font-ibm-plex-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
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
				className={`${ibmPlexMono.variable} ${spaceGrotesk.variable} antialiased font-mono`}
			>
				<Providers>
					<WebVitals />
					<Analytics />
					<ScrollProgress />
					<Header />
					{children}
					<Footer />
					<Toaster position="bottom-right" richColors />
				</Providers>
			</body>
		</html>
	);
}

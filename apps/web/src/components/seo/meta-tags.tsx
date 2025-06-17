import type { Metadata } from "next";

interface MetaTagsProps {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    canonicalUrl?: string;
    type?: "website" | "article" | "profile";
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
}

export function generateMetadata({
    title,
    description,
    keywords = [],
    ogImage,
    canonicalUrl,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Ryan Van Valkenburg",
}: MetaTagsProps): Metadata {
    const siteName = "Ryan Van Valkenburg - Full-Stack Developer";
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rv2.run";

    // Generate dynamic OG image if not provided
    let imageUrl: string;
    if (!ogImage) {
        const ogParams = new URLSearchParams({
            title: title,
            subtitle: type === "article" ? "Project Showcase" : "Full-Stack Developer",
            type: type === "article" ? "project" : "default",
        });
        imageUrl = `${baseUrl}/api/og?${ogParams.toString()}`;
    } else {
        imageUrl = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
    }

    return {
        title: fullTitle,
        description,
        keywords: keywords.join(", "),
        authors: [{ name: author }],
        creator: author,
        publisher: author,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonicalUrl || baseUrl,
            siteName,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            type,
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [imageUrl],
            creator: "@ry-animal",
            site: "@ryan7vv",
        },
        alternates: {
            canonical: canonicalUrl || baseUrl,
        },
        other: {
            "theme-color": "#000000",
            "color-scheme": "dark light",
        },
    };
}

// Structured Data for Person/Professional
export function generatePersonStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ryan Van Valkenburg",
        jobTitle: "Full-Stack Developer",
        description: "Full-stack developer specializing in React, Next.js, and modern web technologies",
        url: "https://rv2.dev",
        image: "https://rv2.dev/images/retro-prompt.svg",
        sameAs: [
            "https://github.com/ry-animal",
            "https://www.linkedin.com/in/ryanlvv/",
            "https://twitter.com/ryan7vv",
        ],
        knowsAbout: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Web Development",
            "UI/UX Design",
        ],
        worksFor: {
            "@type": "Organization",
            name: "Freelance Developer",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US",
        },
    };
}

// Structured Data for Website
export function generateWebsiteStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Ryan Van Valkenburg - Full-Stack Developer",
        description: "Portfolio website showcasing full-stack development projects and skills",
        url: "https://rv2.dev",
        author: {
            "@type": "Person",
            name: "Ryan Van Valkenburg",
        },
        potentialAction: {
            "@type": "SearchAction",
            target: "https://rv2.dev/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };
} 
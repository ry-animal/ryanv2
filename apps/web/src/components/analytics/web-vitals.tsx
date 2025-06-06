"use client";

import { useEffect } from "react";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";

interface Metric {
    name: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
    delta: number;
    id: string;
}

function sendToAnalytics(metric: Metric) {
    // In production, you would send this to your analytics service
    // Examples: Google Analytics, Vercel Analytics, etc.

    if (process.env.NODE_ENV === "development") {
        console.log("Web Vitals:", metric);
    }

    // Example: Send to Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", metric.name, {
            value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
            event_category: "Web Vitals",
            event_label: metric.id,
            non_interaction: true,
        });
    }

    // Example: Send to Vercel Analytics
    if (typeof window !== "undefined" && (window as any).va) {
        (window as any).va("track", "Web Vitals", {
            metric: metric.name,
            value: metric.value,
            rating: metric.rating,
        });
    }
}

export function WebVitals() {
    useEffect(() => {
        // Measure Core Web Vitals
        onCLS(sendToAnalytics);
        onINP(sendToAnalytics); // INP replaced FID in 5.0
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
    }, []);

    return null; // This component doesn't render anything
}

// Hook for manual performance tracking
export function usePerformanceMetrics() {
    const trackCustomMetric = (name: string, value: number) => {
        const metric: Metric = {
            name,
            value,
            rating: "good", // You can implement rating logic based on your needs
            delta: value,
            id: `${name}-${Date.now()}`,
        };
        sendToAnalytics(metric);
    };

    const trackPageView = (page: string) => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("config", "GA_MEASUREMENT_ID", {
                page_title: document.title,
                page_location: window.location.href,
                page_path: page,
            });
        }
    };

    return { trackCustomMetric, trackPageView };
} 
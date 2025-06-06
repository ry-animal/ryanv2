"use client";

import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface LazyLoadProps {
    children: ReactNode;
    height?: number;
    className?: string;
    fallback?: ReactNode;
    rootMargin?: string;
    threshold?: number;
}

export function LazyLoad({
    children,
    height = 200,
    className = "",
    fallback,
    rootMargin = "100px",
    threshold = 0.1,
}: LazyLoadProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoaded) {
                    setIsVisible(true);
                    setHasLoaded(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin,
                threshold,
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [rootMargin, threshold, hasLoaded]);

    const defaultFallback = (
        <div
            className="flex items-center justify-center bg-muted/30 animate-pulse"
            style={{ height }}
        >
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
    );

    return (
        <div ref={elementRef} className={className}>
            {isVisible ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {children}
                </motion.div>
            ) : (
                fallback || defaultFallback
            )}
        </div>
    );
}

// Higher-order component for lazy loading
export function withLazyLoad<P extends object>(
    Component: React.ComponentType<P>,
    lazyLoadProps?: Partial<LazyLoadProps>
) {
    return function LazyLoadedComponent(props: P) {
        return (
            <LazyLoad {...lazyLoadProps}>
                <Component {...props} />
            </LazyLoad>
        );
    };
} 
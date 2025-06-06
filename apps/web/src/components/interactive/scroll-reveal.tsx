"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import { fadeInUp, motionSafe } from "@/lib/animations";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    variants?: Variants;
    threshold?: number;
    triggerOnce?: boolean;
    delay?: number;
}

export function ScrollReveal({
    children,
    className = "",
    variants = fadeInUp,
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
}: ScrollRevealProps) {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce,
    });

    // Apply motion-safe variants that respect accessibility preferences
    const safeVariants = motionSafe(variants);

    return (
        <motion.div
            ref={ref}
            variants={safeVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 
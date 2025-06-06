"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: string;
    label: string;
    duration?: number;
}

export function AnimatedCounter({ value, label, duration = 2 }: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);

    // Extract numeric value and suffix (like "+" or "k")
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const suffix = value.replace(/\d/g, '');

    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, {
                duration,
                ease: "easeOut",
            });

            return controls.stop;
        }
    }, [count, numericValue, duration, isInView]);

    return (
        <motion.div
            ref={ref}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <motion.div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                <motion.span>{rounded}</motion.span>
                <span>{suffix}</span>
            </motion.div>
            <div className="text-sm text-muted-foreground">
                {label}
            </div>
        </motion.div>
    );
} 
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { retroCardHover, neonPulse } from "@/lib/animations";
import type { ReactNode } from "react";

interface RetroCardProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "terminal" | "hologram" | "neon";
    animated?: boolean;
    glowColor?: "teal" | "orange" | "indigo" | "magenta" | "cyan" | "amber";
}

export function RetroCard({
    children,
    className,
    variant = "default",
    animated = true,
    glowColor = "teal"
}: RetroCardProps) {
    const glowColorVar = `var(--retro-${glowColor})`;

    const variantStyles = {
        default: "bg-card/50 border-[var(--retro-teal)]/30 backdrop-blur-sm",
        terminal: "bg-black/80 border-[var(--retro-cyan)]/50 font-mono relative overflow-hidden",
        hologram: "bg-gradient-to-br from-card/30 to-card/10 border-[var(--retro-magenta)]/40 backdrop-blur-md",
        neon: `border-2 bg-card/20 backdrop-blur-sm`,
    };

    const baseCard = (
        <div
            className={cn(
                "rounded-lg border p-6 transition-all duration-300",
                variantStyles[variant],
                variant === "neon" && `border-[${glowColorVar}]/40`,
                className
            )}
            style={variant === "neon" ? {
                borderColor: `${glowColorVar}40`,
                boxShadow: `0 0 20px ${glowColorVar}20`
            } : undefined}
        >
            {variant === "terminal" && (
                <>
                    {/* Terminal header */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-[var(--retro-dark)] border-b border-[var(--retro-cyan)]/30 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                        <span className="text-xs text-[var(--retro-cyan)] ml-4 font-mono">
                            portfolio.terminal
                        </span>
                    </div>
                    {/* Terminal scanlines */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--retro-cyan)]/5 to-transparent bg-[length:100%_4px] animate-pulse"></div>
                    </div>
                    <div className="mt-8">
                        {children}
                    </div>
                </>
            )}
            {variant !== "terminal" && children}
        </div>
    );

    if (!animated) {
        return baseCard;
    }

    return (
        <motion.div
            className="relative"
            {...retroCardHover}
            whileHover={{
                ...retroCardHover.whileHover,
                boxShadow: [
                    "0 25px 50px rgba(0,0,0,0.15)",
                    `0 0 60px ${glowColorVar}25`,
                ],
            }}
        >
            {baseCard}
            {variant === "neon" && (
                <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none -z-10"
                    variants={neonPulse}
                    animate="animate"
                    style={{
                        borderColor: glowColorVar,
                        boxShadow: `0 0 30px ${glowColorVar}40`,
                    }}
                />
            )}
        </motion.div>
    );
}

export function RetroTerminal({
    children,
    className,
    prompt = "$",
    title = "terminal"
}: {
    children: ReactNode;
    className?: string;
    prompt?: string;
    title?: string;
}) {
    return (
        <RetroCard variant="terminal" className={className}>
            <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-[var(--retro-orange)]">{prompt}</span>
                    <span className="text-[var(--retro-cyan)]">{title}</span>
                </div>
                <div className="text-muted-foreground pl-4">
                    {children}
                </div>
            </div>
        </RetroCard>
    );
}

export function RetroGlowBox({
    children,
    className,
    glowColor = "teal",
    intensity = "medium"
}: {
    children: ReactNode;
    className?: string;
    glowColor?: "teal" | "orange" | "indigo" | "magenta" | "cyan" | "amber";
    intensity?: "low" | "medium" | "high";
}) {
    const glowColorVar = `var(--retro-${glowColor})`;
    const intensityValues = {
        low: "10px",
        medium: "20px",
        high: "30px"
    };

    return (
        <motion.div
            className={cn(
                "relative rounded-lg border p-4",
                className
            )}
            style={{
                borderColor: `${glowColorVar}60`,
                backgroundColor: `${glowColorVar}10`,
                boxShadow: `0 0 ${intensityValues[intensity]} ${glowColorVar}40`,
            }}
            whileHover={{
                boxShadow: `0 0 ${intensityValues[intensity]} ${glowColorVar}60`,
                borderColor: `${glowColorVar}80`,
            }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
} 
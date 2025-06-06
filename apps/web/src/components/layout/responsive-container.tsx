import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ResponsiveContainerProps {
    children: ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function ResponsiveContainer({
    children,
    className = "",
    size = "2xl"
}: ResponsiveContainerProps) {
    const sizeClasses = {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
    };

    return (
        <div
            className={cn(
                "container mx-auto",
                "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
                sizeClasses[size],
                className,
            )}
        >
            {children}
        </div>
    );
} 
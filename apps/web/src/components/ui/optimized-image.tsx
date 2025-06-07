"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    fill?: boolean;
    sizes?: string;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
}

export function OptimizedImage({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    fill = false,
    sizes,
    placeholder = "blur",
    blurDataURL,
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    // Default blur placeholder (1x1 transparent pixel base64)
    const defaultBlurDataURL =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8A0XqoVQFEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEcwKjEQYDFSswAAAAAAA//9k=";

    if (error) {
        return (
            <div
                className={cn(
                    "flex flex-col items-center justify-center bg-muted text-muted-foreground border border-dashed border-muted-foreground/30",
                    fill ? "absolute inset-0" : "",
                    className
                )}
                style={fill ? undefined : { width, height }}
            >
                <ImageOff className="h-8 w-8 mb-2 opacity-50" />
                <span className="text-sm opacity-70">Image not available</span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            sizes={sizes}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={blurDataURL || defaultBlurDataURL}
            className={cn(
                "transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100",
                className
            )}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
            {...props}
        />
    );
} 
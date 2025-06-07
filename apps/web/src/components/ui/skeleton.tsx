"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { skeletonPulse } from "@/lib/animations";

interface SkeletonProps {
	className?: string;
	children?: React.ReactNode;
}

export function Skeleton({ className, children, ...props }: SkeletonProps) {
	return (
		<motion.div
			variants={skeletonPulse}
			initial="initial"
			animate="animate"
			className={cn(
				"bg-muted rounded-md",
				className
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
	return (
		<div className="h-full">
			<div className="group h-full overflow-hidden rounded-lg border bg-card">
				<div className="relative aspect-video overflow-hidden">
					<Skeleton className="w-full h-full" />
				</div>

				<div className="p-6 space-y-4">
					<Skeleton className="h-6 w-3/4" />

					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
						<Skeleton className="h-4 w-4/6" />
					</div>

					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-6 w-16" />
						<Skeleton className="h-6 w-20" />
						<Skeleton className="h-6 w-14" />
						<Skeleton className="h-6 w-18" />
					</div>

					<div className="flex gap-2">
						<Skeleton className="h-9 w-20" />
						<Skeleton className="h-9 w-16" />
					</div>
				</div>
			</div>
		</div>
	);
}

// Experience Card Skeleton
export function ExperienceCardSkeleton() {
	return (
		<div className="relative flex items-center">
			<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-muted rounded-full md:transform md:-translate-x-1/2 z-10" />

			<div className="w-full md:w-1/2 md:pr-8 pl-12 md:pl-0">
				<div className="rounded-lg border bg-card p-6">
					<div className="mb-4">
						<Skeleton className="h-6 w-3/4 mb-2" />
						<Skeleton className="h-5 w-1/2 mb-3" />
						<div className="flex gap-4">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-4 w-20" />
						</div>
					</div>

					<div className="space-y-2 mb-4">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
						<Skeleton className="h-4 w-4/6" />
					</div>

					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-6 w-16" />
						<Skeleton className="h-6 w-20" />
						<Skeleton className="h-6 w-14" />
					</div>
				</div>
			</div>
		</div>
	);
}

// Skills Section Skeleton
export function SkillsSkeleton() {
	return (
		<div className="space-y-8">
			{[1, 2, 3].map((section) => (
				<div key={section} className="rounded-lg border bg-card p-6">
					<div className="flex items-center gap-2 mb-4">
						<Skeleton className="w-3 h-3 rounded-full" />
						<Skeleton className="h-5 w-40" />
					</div>

					<div className="space-y-4">
						{[1, 2, 3, 4].map((skill) => (
							<div key={skill} className="space-y-2">
								<div className="flex justify-between">
									<Skeleton className="h-4 w-24" />
									<Skeleton className="h-4 w-10" />
								</div>
								<Skeleton className="h-2 w-full rounded-full" />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

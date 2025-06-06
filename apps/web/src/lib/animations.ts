import type { Variants } from "framer-motion";

// Basic animation variants
export const fadeInUp: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

export const fadeInDown: Variants = {
	initial: { opacity: 0, y: -20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 },
};

export const fadeInLeft: Variants = {
	initial: { opacity: 0, x: -20 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -20 },
};

export const fadeInRight: Variants = {
	initial: { opacity: 0, x: 20 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 20 },
};

export const scaleIn: Variants = {
	initial: { opacity: 0, scale: 0.9 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.9 },
};

// Container variants for staggered animations
export const staggerContainer: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

export const staggerItem: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { 
		opacity: 0, 
		y: -20,
		transition: {
			duration: 0.3,
		},
	},
};

// Page transition variants
export const pageVariants: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { 
		opacity: 0, 
		y: -20,
		transition: {
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// Optimized transition settings
export const defaultTransition = {
	duration: 0.5,
	ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const fastTransition = {
	duration: 0.3,
	ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const slowTransition = {
	duration: 0.8,
	ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

// Hover animations
export const hoverScale = {
	whileHover: { scale: 1.05 },
	whileTap: { scale: 0.95 },
	transition: fastTransition,
};

export const hoverLift = {
	whileHover: { y: -5 },
	transition: fastTransition,
};

// Accessibility: Check for reduced motion preference
export const getReducedMotionSettings = () => {
	if (typeof window !== "undefined") {
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}
	return false;
};

// Motion-safe variants that respect accessibility preferences
export const motionSafe = (variants: Variants): Variants => {
	if (getReducedMotionSettings()) {
		return {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
		};
	}
	return variants;
};

// Micro-interaction variants
export const magneticHover = {
	whileHover: {
		scale: 1.02,
		transition: { duration: 0.2, ease: "easeOut" },
	},
	whileTap: {
		scale: 0.98,
		transition: { duration: 0.1 },
	},
};

export const subtleFloat = {
	animate: {
		y: [0, -5, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

export const shimmer = {
	animate: {
		backgroundPosition: ["200% 0", "-200% 0"],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "linear",
		},
	},
};

// Enhanced project card animations
export const projectCardHover = {
	whileHover: {
		y: -8,
		scale: 1.02,
		boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
		transition: {
			duration: 0.3,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	whileTap: {
		scale: 0.98,
		transition: { duration: 0.1 },
	},
};

// Loading skeleton animations
export const skeletonPulse: Variants = {
	initial: { opacity: 0.6 },
	animate: {
		opacity: [0.6, 1, 0.6],
		transition: {
			duration: 1.5,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

// Staggered fade-in for lists
export const staggeredFadeIn: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1,
		},
	},
};

// Enhanced button interactions
export const buttonPress = {
	whileTap: {
		scale: 0.95,
		transition: { duration: 0.1 },
	},
	whileHover: {
		scale: 1.05,
		transition: { duration: 0.2 },
	},
};

// Reveal animations for scroll
export const slideInFromBottom: Variants = {
	initial: { 
		opacity: 0, 
		y: 60,
		scale: 0.95,
	},
	animate: { 
		opacity: 1, 
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const slideInFromLeft: Variants = {
	initial: { 
		opacity: 0, 
		x: -60,
	},
	animate: { 
		opacity: 1, 
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const slideInFromRight: Variants = {
	initial: { 
		opacity: 0, 
		x: 60,
	},
	animate: { 
		opacity: 1, 
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// Counter animation
export const countUp = (target: number, duration: number = 2) => ({
	initial: { value: 0 },
	animate: { 
		value: target,
		transition: {
			duration,
			ease: "easeOut",
		},
	},
}); 
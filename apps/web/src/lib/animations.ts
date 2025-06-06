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
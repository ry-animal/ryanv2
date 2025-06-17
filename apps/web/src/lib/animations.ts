import type { Variants } from "framer-motion";

// Basic animation variants with retro styling
export const fadeInUp: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { opacity: 0, y: -20 },
};

export const fadeInDown: Variants = {
	initial: { opacity: 0, y: -20 },
	animate: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { opacity: 0, y: 20 },
};

export const fadeInLeft: Variants = {
	initial: { opacity: 0, x: -20 },
	animate: { 
		opacity: 1, 
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { opacity: 0, x: -20 },
};

export const fadeInRight: Variants = {
	initial: { opacity: 0, x: 20 },
	animate: { 
		opacity: 1, 
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { opacity: 0, x: 20 },
};

export const scaleIn: Variants = {
	initial: { opacity: 0, scale: 0.9 },
	animate: { 
		opacity: 1, 
		scale: 1,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { opacity: 0, scale: 0.9 },
};

// Retro-futuristic variants
export const retroGlow: Variants = {
	initial: { 
		opacity: 0,
		filter: "blur(4px)",
		textShadow: "0 0 0px currentColor",
	},
	animate: { 
		opacity: 1,
		filter: "blur(0px)",
		textShadow: [
			"0 0 5px currentColor",
			"0 0 15px currentColor",
			"0 0 5px currentColor",
		],
		transition: {
			duration: 1,
			textShadow: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			},
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { 
		opacity: 0,
		filter: "blur(4px)",
		textShadow: "0 0 0px currentColor",
	},
};

export const terminalType: Variants = {
	initial: { width: 0 },
	animate: { 
		width: "auto",
		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
};

export const hologramFlicker: Variants = {
	initial: { 
		opacity: 0,
		scale: 0.95,
		filter: "hue-rotate(0deg)",
	},
	animate: { 
		opacity: [0, 1, 0.9, 1],
		scale: [0.95, 1, 0.99, 1],
		filter: [
			"hue-rotate(0deg)",
			"hue-rotate(90deg)",
			"hue-rotate(0deg)",
		],
		transition: {
			duration: 1.5,
			times: [0, 0.3, 0.7, 1],
			ease: "easeInOut",
		},
	},
};

export const dataStream: Variants = {
	initial: { 
		y: "100vh",
		opacity: 0,
	},
	animate: { 
		y: "-10vh",
		opacity: [0, 1, 1, 0],
		transition: {
			duration: 3,
			times: [0, 0.1, 0.9, 1],
			ease: "linear",
			repeat: Infinity,
		},
	},
};

// Parallax variants
export const parallaxFloat: Variants = {
	animate: {
		y: [0, -20, 0],
		rotate: [0, 1, -1, 0],
		transition: {
			y: {
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
			},
			rotate: {
				duration: 8,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	},
};

export const depthLayer: Variants = {
	initial: { 
		z: 0,
		scale: 1,
	},
	animate: (depth: number) => ({
		z: depth * 10,
		scale: 1 + (depth * 0.02),
		transition: {
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	}),
};

// Container variants for staggered animations
export const staggerContainer: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.15,
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
	initial: { 
		opacity: 0, 
		y: 30,
		filter: "blur(2px)",
	},
	animate: { 
		opacity: 1, 
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { 
		opacity: 0, 
		y: -20,
		filter: "blur(2px)",
		transition: {
			duration: 0.4,
		},
	},
};

// Page transition variants
export const pageVariants: Variants = {
	initial: { 
		opacity: 0, 
		y: 20,
		filter: "blur(4px)",
	},
	animate: { 
		opacity: 1, 
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	exit: { 
		opacity: 0, 
		y: -20,
		filter: "blur(4px)",
		transition: {
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// Optimized transition settings
export const defaultTransition = {
	duration: 0.6,
	ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const fastTransition = {
	duration: 0.3,
	ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const slowTransition = {
	duration: 1.2,
	ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

// Enhanced hover animations with retro effects
export const retroHoverScale = {
	whileHover: { 
		scale: 1.05,
		filter: "brightness(1.1)",
		boxShadow: "0 0 30px rgba(0, 255, 200, 0.3)",
		transition: { duration: 0.3 },
	},
	whileTap: { 
		scale: 0.95,
		filter: "brightness(0.9)",
		transition: { duration: 0.1 },
	},
};

export const retroHoverGlow = {
	whileHover: {
		textShadow: [
			"0 0 5px currentColor",
			"0 0 15px currentColor",
			"0 0 25px currentColor",
		],
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
};

export const retroCardHover = {
	whileHover: {
		y: -8,
		scale: 1.02,
		rotateX: 5,
		rotateY: 5,
		boxShadow: [
			"0 20px 40px rgba(0,0,0,0.1)",
			"0 0 50px rgba(0, 255, 200, 0.2)",
		],
		borderColor: "rgba(0, 255, 200, 0.5)",
		transition: {
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	whileTap: {
		scale: 0.98,
		transition: { duration: 0.1 },
	},
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

// Micro-interaction variants with retro styling
export const magneticHover = {
	whileHover: {
		scale: 1.02,
		filter: "brightness(1.05)",
		transition: { duration: 0.2, ease: "easeOut" },
	},
	whileTap: {
		scale: 0.98,
		filter: "brightness(0.95)",
		transition: { duration: 0.1 },
	},
};

export const subtleFloat = {
	animate: {
		y: [0, -8, 0],
		rotate: [0, 1, -1, 0],
		transition: {
			y: {
				duration: 4,
				repeat: Infinity,
				ease: "easeInOut",
			},
			rotate: {
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	},
};

export const retroShimmer = {
	animate: {
		backgroundPosition: ["200% 0", "-200% 0"],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "linear",
		},
	},
};

// Enhanced project card animations
export const projectCardHover = {
	whileHover: {
		y: -12,
		scale: 1.03,
		rotateX: 8,
		rotateY: 8,
		boxShadow: [
			"0 25px 50px rgba(0,0,0,0.15)",
			"0 0 60px rgba(0, 255, 200, 0.25)",
		],
		borderColor: "rgba(0, 255, 200, 0.6)",
		filter: "brightness(1.05)",
		transition: {
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
	whileTap: {
		scale: 0.97,
		transition: { duration: 0.1 },
	},
};

// Loading skeleton animations with retro pulse
export const retroSkeletonPulse: Variants = {
	initial: { opacity: 0.4 },
	animate: {
		opacity: [0.4, 0.8, 0.4],
		filter: [
			"brightness(0.8)",
			"brightness(1.2)",
			"brightness(0.8)",
		],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

// Terminal-style typing animation
export const typewriterCursor: Variants = {
	animate: {
		opacity: [1, 0, 1],
		transition: {
			duration: 1,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

// Matrix-style data rain effect
export const matrixRain: Variants = {
	animate: {
		y: ["0vh", "100vh"],
		opacity: [0, 1, 0],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "linear",
			delay: Math.random() * 2,
		},
	},
};

// Count-up animation with retro styling
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

// Glitch effect for dramatic emphasis
export const glitchEffect: Variants = {
	initial: { 
		x: 0,
		filter: "hue-rotate(0deg)",
	},
	animate: {
		x: [0, -2, 2, 0],
		filter: [
			"hue-rotate(0deg)",
			"hue-rotate(90deg)",
			"hue-rotate(270deg)",
			"hue-rotate(0deg)",
		],
		transition: {
			duration: 0.2,
			times: [0, 0.25, 0.75, 1],
			ease: "easeInOut",
		},
	},
};

// Neon border pulse
export const neonPulse: Variants = {
	animate: {
		borderColor: [
			"rgba(0, 255, 200, 0.2)",
			"rgba(0, 255, 200, 0.8)",
			"rgba(0, 255, 200, 0.2)",
		],
		boxShadow: [
			"0 0 5px rgba(0, 255, 200, 0.2)",
			"0 0 20px rgba(0, 255, 200, 0.6)",
			"0 0 5px rgba(0, 255, 200, 0.2)",
		],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
}; 
/**
 * Animation Utilities - Reusable animation patterns across the application
 * 
 * This file exports consistent animation variants used throughout all sections
 * to maintain design consistency and reduce code duplication.
 */

/**
 * Container animation for parent elements
 * Staggers children animations for visual flow
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

/**
 * Item animation for child elements within containers
 * Fade-in with upward slide effect
 */
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

/**
 * Scroll reveal animation
 * Triggers when element enters viewport
 */
export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

/**
 * Hover effect for cards
 * Lifts card up and adds scale
 */
export const cardHoverVariants = {
  initial: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3 } },
};

/**
 * Button hover effect
 * Scale up and slight translate
 */
export const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, x: 5, transition: { duration: 0.2 } },
};

/**
 * Icon hover effect
 * Rotate and scale
 */
export const iconHoverVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { rotate: 10, scale: 1.1, transition: { duration: 0.3 } },
};

/**
 * Staggered list animation
 * For lists of items
 */
export const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * List item animation
 * Individual item in a list
 */
export const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * Fade in animation
 * Simple opacity transition
 */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

/**
 * Slide up animation
 * Vertical slide with fade
 */
export const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

/**
 * Slide down animation
 * Vertical slide down with fade
 */
export const slideDownVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

/**
 * Slide left animation
 * Horizontal slide from right
 */
export const slideLeftVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

/**
 * Slide right animation
 * Horizontal slide from left
 */
export const slideRightVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

/**
 * Scale animation
 * Grows from small to normal
 */
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

/**
 * Rotate animation
 * Rotates into view
 */
export const rotateInVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.8 },
  },
};

/**
 * Floating animation
 * For floating badges or elements
 * @param duration - Duration of animation in seconds (default: 3)
 */
export const floatingVariants = (duration: number = 3) => ({
  animate: { y: [0, -15, 0] },
  transition: { duration, repeat: Infinity },
});

/**
 * Pulse animation
 * For attention-grabbing elements
 */
export const pulseVariants = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 2, repeat: Infinity },
};

/**
 * Bounce animation
 * For interactive feedback
 */
export const bounceVariants = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 0.6, repeat: Infinity },
};

/**
 * Shimmer animation (loading state)
 */
export const shimmerVariants = {
  animate: { opacity: [0.5, 1, 0.5] },
  transition: { duration: 1.5, repeat: Infinity },
};

/**
 * Configuration object for common animation durations
 */
export const animationDurations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.2,
};

/**
 * Configuration object for common easing functions
 */
export const easingFunctions = {
  easeIn: 'easeIn',
  easeOut: 'easeOut',
  easeInOut: 'easeInOut',
  linear: 'linear',
  circIn: 'circIn',
  circOut: 'circOut',
  circInOut: 'circInOut',
  backIn: 'backIn',
  backOut: 'backOut',
  backInOut: 'backInOut',
  anticipate: 'anticipate',
};

/**
 * Viewport configuration for scroll reveal animations
 */
export const viewportConfig = {
  once: true,
  margin: '-100px',
};

/**
 * Common animation transition config
 */
export const transitionConfig = {
  duration: 0.8,
  ease: 'easeOut',
};

export default {
  containerVariants,
  itemVariants,
  scrollRevealVariants,
  cardHoverVariants,
  buttonHoverVariants,
  iconHoverVariants,
  listVariants,
  listItemVariants,
  fadeInVariants,
  slideUpVariants,
  slideDownVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleInVariants,
  rotateInVariants,
  floatingVariants,
  pulseVariants,
  bounceVariants,
  shimmerVariants,
  animationDurations,
  easingFunctions,
  viewportConfig,
  transitionConfig,
};

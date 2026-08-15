import React from 'react'
import { motion } from 'framer-motion'

// 1. Animated GitHub Icon (itshover.com style: bounce, tilt, & arm wiggle on hover)
export function AnimatedGithub({ className = "w-4 h-4", ...props }) {
  return (
    <motion.div
      className="inline-flex items-center justify-center cursor-pointer"
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { 
            rotate: [0, -12, 12, -6, 0],
            scale: 1.15,
            transition: { duration: 0.5, ease: "easeInOut" }
          }
        }}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <motion.path
          d="M9 18c-4.51 2-5-2-7-2"
          variants={{
            initial: { pathLength: 1, opacity: 1 },
            hover: {
              pathLength: [1, 0.4, 1],
              transition: { duration: 0.4, repeat: 1 }
            }
          }}
        />
      </motion.svg>
    </motion.div>
  )
}

// 2. Animated Arrow Down Icon (itshover.com style: drop, stretch, & spring rebound)
export function AnimatedArrowDown({ className = "w-4 h-4", ...props }) {
  return (
    <motion.div
      className="inline-flex items-center justify-center cursor-pointer"
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        variants={{
          initial: { y: 0 },
          hover: {
            y: [0, 6, -2, 0],
            transition: { duration: 0.6, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }
          }
        }}
      >
        <motion.path
          d="M12 5v14"
          variants={{
            initial: { pathLength: 1 },
            hover: {
              pathLength: [0.2, 1],
              transition: { duration: 0.4 }
            }
          }}
        />
        <motion.path
          d="m19 12-7 7-7-7"
          variants={{
            initial: { y: 0 },
            hover: {
              y: [0, 2, 0],
              transition: { duration: 0.3, repeat: 2 }
            }
          }}
        />
      </motion.svg>
    </motion.div>
  )
}

// 3. Animated Sparkles Icon (itshover.com style: multi-star twinkle & rotational burst)
export function AnimatedSparkles({ className = "w-4 h-4", ...props }) {
  return (
    <motion.div
      className="inline-flex items-center justify-center cursor-pointer"
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {/* Main Sparkle */}
        <motion.path
          d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
          variants={{
            initial: { scale: 1, rotate: 0 },
            hover: {
              scale: [1, 1.25, 0.9, 1.1, 1],
              rotate: [0, 45, 90, 180],
              transition: { duration: 0.7, ease: "easeOut" }
            }
          }}
        />
        {/* Top-Right Mini Star */}
        <motion.path
          d="M5 3v4"
          variants={{
            initial: { opacity: 0.7, scale: 1 },
            hover: {
              opacity: [0.3, 1, 0.5, 1],
              scale: [1, 1.4, 0.8, 1],
              transition: { duration: 0.5, delay: 0.1 }
            }
          }}
        />
        <motion.path
          d="M19 17v4"
          variants={{
            initial: { opacity: 0.7, scale: 1 },
            hover: {
              opacity: [0.3, 1, 0.5, 1],
              scale: [1, 1.4, 0.8, 1],
              transition: { duration: 0.5, delay: 0.2 }
            }
          }}
        />
      </svg>
    </motion.div>
  )
}

// 4. Animated Layers / Genesis Stack Icon (itshover.com style: layers separate and float)
export function AnimatedLayers({ className = "w-4 h-4", ...props }) {
  return (
    <motion.div
      className="inline-flex items-center justify-center cursor-pointer"
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {/* Top Layer */}
        <motion.path
          d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
          variants={{
            initial: { y: 0 },
            hover: {
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }
          }}
        />
        {/* Middle Layer */}
        <motion.path
          d="m2 12 8.58 3.91a2 2 0 0 0 1.66 0L22 12"
          variants={{
            initial: { y: 0, opacity: 0.8 },
            hover: {
              y: -1,
              opacity: 1,
              transition: { type: "spring", stiffness: 400, damping: 15, delay: 0.05 }
            }
          }}
        />
        {/* Bottom Layer */}
        <motion.path
          d="m2 17 8.58 3.91a2 2 0 0 0 1.66 0L22 17"
          variants={{
            initial: { y: 0, opacity: 0.6 },
            hover: {
              y: 2,
              opacity: 1,
              transition: { type: "spring", stiffness: 400, damping: 15, delay: 0.1 }
            }
          }}
        />
      </svg>
    </motion.div>
  )
}

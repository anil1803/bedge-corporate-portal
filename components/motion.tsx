"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionBlockProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "fade" | "slide" | "scale" | "blur";
};

export function MotionBlock({ 
  children, 
  className, 
  delay = 0,
  direction = "up",
  type = "fade"
}: MotionBlockProps) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 }
    },
    slide: {
      initial: { 
        opacity: 0,
        x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0
      },
      whileInView: { 
        opacity: 1,
        x: 0,
        y: 0
      }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 }
    },
    blur: {
      initial: { opacity: 0, filter: "blur(10px)" },
      whileInView: { opacity: 1, filter: "blur(0px)" }
    }
  };

  return (
    <motion.div
      initial={variants[type].initial}
      whileInView={variants[type].whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";

interface SectionDividerProps {
  variant?: "primary" | "secondary" | "gradient";
}

export default function SectionDivider({ variant = "primary" }: SectionDividerProps) {
  const getGradient = () => {
    switch (variant) {
      case "primary":
        return "from-transparent via-primary to-transparent";
      case "secondary":
        return "from-transparent via-secondary to-transparent";
      case "gradient":
        return "from-primary via-secondary to-primary";
      default:
        return "from-transparent via-primary to-transparent";
    }
  };

  return (
    <div className="relative py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`mx-auto h-px w-full max-w-4xl bg-gradient-to-r ${getGradient()}`}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary"
      />
    </div>
  );
}

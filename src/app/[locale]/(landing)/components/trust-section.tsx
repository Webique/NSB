"use client";

import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useRef } from "react";

const logos = [
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-101.png",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-104.png",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-111.png",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-113.png",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-115.png",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-119.png"
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-muted/20 border-y py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="text-muted-foreground text-2xl font-bold md:text-3xl">
            Trusted by Leading Organizations
          </h3>
        </motion.div>

        <div ref={ref} className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="from-background bg-linear-to-r pointer-events-none absolute left-0 top-0 z-10 h-full w-32 to-transparent" />
          <div className="from-background bg-linear-to-l pointer-events-none absolute right-0 top-0 z-10 h-full w-32 to-transparent" />

          {/* Scrolling Logos */}
          <motion.div
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            className="flex gap-12"
          >
            {/* First set */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="relative h-20 w-40 shrink-0 grayscale transition-all duration-300 hover:grayscale-0"
              >
                <ExportedImage
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="relative h-20 w-40 shrink-0 grayscale transition-all duration-300 hover:grayscale-0"
              >
                <ExportedImage
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

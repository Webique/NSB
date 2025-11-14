"use client";

import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useRef } from "react";

const images = [
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-006.jpg",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-009.jpg",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-061.jpg",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-063.jpg",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-064.jpg",
  "/images/الملف التعريفي-نسب العقارية(1).pdf-image-065.jpg"
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-background py-20">
      <div className="container px-4">
        <div ref={ref} className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 cursor-pointer overflow-hidden rounded-xl md:h-80"
            >
              <ExportedImage
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

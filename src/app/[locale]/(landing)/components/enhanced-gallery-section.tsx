"use client";

import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

const galleryImages = [
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-069.jpg",
    span: "col-span-2 row-span-2"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-070.jpg",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-071.jpg",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-072.jpg",
    span: "col-span-1 row-span-2"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-074.jpg",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-075.jpg",
    span: "col-span-2 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-076.jpg",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-077.jpg",
    span: "col-span-1 row-span-2"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-078.jpg",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-079.jpg",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-080.jpg",
    span: "col-span-2 row-span-1"
  },
  {
    src: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-081.jpg",
    span: "col-span-1 row-span-1"
  }
];

export default function EnhancedGallerySection() {
  const t = useTranslations("IndexPage.Portfolio");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Gallery</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Explore our stunning collection of properties
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ExportedImage
                src={image.src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`bg-linear-to-t absolute inset-0 from-black/60 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  hoveredIndex === index
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 right-4 text-white"
              >
                <p className="text-lg font-semibold">Property {index + 1}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const services = [
  {
    key: "buying",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-089.png"
  },
  {
    key: "selling",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-091.png"
  },
  {
    key: "consulting",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-093.png"
  },
  {
    key: "management",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-095.png"
  },
  {
    key: "investment",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-006.jpg"
  }
];

export default function ServicesSection() {
  const t = useTranslations("IndexPage.Services");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 text-6xl font-bold text-gray-200">05</div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            {t("subtitle")}
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-96">
                <ExportedImage
                  src={service.image}
                  alt={t(`${service.key}.title` as any)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="mb-3 text-2xl font-bold">
                    {t(`${service.key}.title` as any)}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    {t(`${service.key}.description` as any)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

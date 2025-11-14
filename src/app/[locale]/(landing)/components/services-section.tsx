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
    <section
      id="services"
      className="bg-linear-to-b relative overflow-hidden from-white to-gray-50 py-32"
    >
      {/* Decorative Background */}
      <div className="bg-primary/5 absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="bg-secondary/5 absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          {/* Section Number */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="to-primary/50 bg-linear-to-r h-px w-16 from-transparent" />
            <div className="text-primary/10 text-8xl font-bold">04</div>
            <div className="to-primary/50 bg-linear-to-l h-px w-16 from-transparent" />
          </div>

          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            {t("title")}
          </h2>
          <div className="via-primary bg-linear-to-r mx-auto mb-6 h-1 w-24 from-transparent to-transparent" />
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
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
              className={`group relative overflow-hidden rounded-3xl ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-[500px]">
                <ExportedImage
                  src={service.image}
                  alt={t(`${service.key}.title` as any)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* linear Overlay */}
                <div className="bg-linear-to-t absolute inset-0 from-black via-black/60 to-transparent" />

                {/* Decorative Corner */}
                <div className="bg-primary/20 absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  {/* Number Badge */}
                  <div className="bg-primary/90 absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold backdrop-blur-sm">
                    {index + 1}
                  </div>

                  {/* Title with Decorative Line */}
                  <div className="mb-4">
                    <div className="bg-primary mb-3 h-1 w-16 transition-all duration-500 group-hover:w-24" />
                    <h3 className="mb-3 text-3xl font-bold transition-colors">
                      {t(`${service.key}.title` as any)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-200 transition-all duration-500 group-hover:text-white">
                    {t(`${service.key}.description` as any)}
                  </p>

                  {/* Hover Arrow */}
                  <div className="text-primary mt-4 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="text-sm font-semibold">اكتشف المزيد</span>
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="from-primary via-secondary to-primary bg-linear-to-r absolute bottom-0 left-0 right-0 h-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

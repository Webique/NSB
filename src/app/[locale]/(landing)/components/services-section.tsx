"use client";

import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.Services");

  const services = [
    {
      title: t("buying.title"),
      description: t("buying.description"),
      image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-089.png"
    },
    {
      title: t("selling.title"),
      description: t("selling.description"),
      image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-091.png"
    },
    {
      title: t("consulting.title"),
      description: t("consulting.description"),
      image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-093.png"
    },
    {
      title: t("management.title"),
      description: t("management.description"),
      image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-095.png"
    },
    {
      title: t("investment.title"),
      description: t("investment.description"),
      image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-006.jpg"
    }
  ];

  return (
    <section
      id="services"
      className="bg-linear-to-b relative overflow-hidden from-white to-gray-50 py-32"
    >
      {/* Decorative Background */}
      <div className="bg-primary/5 absolute start-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="bg-secondary/5 absolute bottom-0 end-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-[500px]">
                <ExportedImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* linear Overlay */}
                <div className="bg-linear-to-t absolute inset-0 from-black via-black/60 to-transparent" />

                {/* Decorative Corner */}
                <div className="bg-primary/20 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  {/* Number Badge */}
                  <div className="bg-primary/90 absolute end-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold backdrop-blur-sm">
                    {index + 1}
                  </div>

                  {/* Title with Decorative Line */}
                  <div className="mb-4">
                    <div className="bg-primary mb-3 h-1 w-16 transition-all duration-500 group-hover:w-24" />
                    <h3 className="mb-3 text-3xl font-bold transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-200 transition-all duration-500 group-hover:text-white">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="from-primary via-secondary to-primary bg-linear-to-r absolute inset-x-0 bottom-0 h-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

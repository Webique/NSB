"use client";

import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.About");

  return (
    <section id="about" className="relative overflow-hidden bg-white py-32">
      {/* Decorative Background Elements */}
      <div className="bg-primary/5 absolute end-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
      <div className="bg-secondary/5 absolute bottom-0 start-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

      <div className="container relative px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Section Number */}
            <div className="mb-8 flex items-center gap-4">
              <div className="text-primary/10 text-8xl font-bold">01</div>
              <div className="from-primary/50 bg-linear-to-r h-px flex-1 to-transparent" />
            </div>

            <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
              {t("title")}
            </h2>

            <div className="mb-6 flex items-center gap-3">
              <div className="bg-primary h-1 w-12" />
              <p className="text-primary text-2xl font-semibold">
                {t("subtitle")}
              </p>
            </div>

            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              {t("description")}
            </p>

            {/* Values with Enhanced Design */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-linear-to-br group relative overflow-hidden rounded-2xl border border-gray-100 from-gray-50 to-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-primary/5 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary h-1 w-8" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {t("vision")}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {t("visionText")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-linear-to-br group relative overflow-hidden rounded-2xl border border-gray-100 from-gray-50 to-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-secondary/5 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-secondary h-1 w-8" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {t("mission")}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {t("missionText")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="border-primary/20 absolute -end-6 -top-6 h-full w-full rounded-2xl border-4" />
            <div className="border-secondary/20 absolute -bottom-6 -start-6 h-full w-full rounded-2xl border-4" />

            {/* Main Image */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <ExportedImage
                src="/images/about.jpg"
                alt="About NSB"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* linear Overlay */}
              <div className="bg-linear-to-t absolute inset-0 from-black/20 to-transparent" />
            </div>

            {/* Floating Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-primary absolute -bottom-8 -start-2 rounded-2xl p-8 shadow-xl sm:-start-8"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-white/90">
                  {t("yearsOfExperience")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

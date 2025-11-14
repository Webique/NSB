"use client";

import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function AboutSection() {
  const t = useTranslations("IndexPage.About");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="bg-white py-24">
      <div className="container px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 text-6xl font-bold text-gray-200">01</div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              {t("title")}
            </h2>
            <p className="mb-4 text-xl font-semibold text-primary">
              {t("subtitle")}
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {t("description")}
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {t("vision")}
                </h3>
                <p className="text-gray-600">{t("visionText")}</p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {t("mission")}
                </h3>
                <p className="text-gray-600">{t("missionText")}</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <ExportedImage
              src="/images/الملف التعريفي-نسب العقارية(1).pdf-image-004.jpg"
              alt="About NSB"
              fill
              className="rounded-lg object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

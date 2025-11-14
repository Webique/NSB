"use client";

import { Award, Building, Shield, TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const features = [
  { key: "feature1", icon: Award, image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-012.png" },
  { key: "feature2", icon: Building, image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-060.png" },
  { key: "feature3", icon: Shield, image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-068.png" },
  { key: "feature4", icon: TrendingUp, image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-073.png" }
];

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.Features");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{t("title")}</h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <ExportedImage
                    src={feature.image}
                    alt={t(`${feature.key}.title` as any)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/90 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">
                    {t(`${feature.key}.title` as any)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`${feature.key}.description` as any)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

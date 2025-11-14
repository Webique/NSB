"use client";

import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const values = [
  {
    key: "feature1",
    title: "الإتقان",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-012.png"
  },
  {
    key: "feature2",
    title: "الابتكار",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-060.png"
  },
  {
    key: "feature3",
    title: "الشمولية",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-068.png"
  }
];

export default function ValuesSection() {
  const t = useTranslations("IndexPage.Features");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-gray-50 to-white py-32">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots h-full w-full" />
      </div>

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
            <div className="text-primary/10 text-8xl font-bold">02</div>
            <div className="to-primary/50 bg-linear-to-l h-px w-16 from-transparent" />
          </div>

          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            {t("title")}
          </h2>
          <div className="via-primary bg-linear-to-r mx-auto h-1 w-24 from-transparent to-transparent" />
        </motion.div>

        <div ref={ref} className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Decorative Corner */}
                <div className="bg-primary/10 absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all duration-500 group-hover:scale-150" />

                {/* Icon/Image */}
                <div className="relative mb-6 flex justify-center">
                  <div className="from-primary/10 to-secondary/10 bg-linear-to-br relative h-32 w-32 overflow-hidden rounded-2xl p-4">
                    <ExportedImage
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="relative mb-4 text-center">
                  <h3 className="text-primary group-hover:text-secondary mb-2 text-4xl font-bold transition-colors">
                    {value.title}
                  </h3>
                  <div className="via-primary bg-linear-to-r mx-auto h-1 w-16 from-transparent to-transparent transition-all group-hover:w-24" />
                </div>

                {/* Description */}
                <p className="relative text-center text-lg leading-relaxed text-gray-600">
                  {t(`${value.key}.description` as any)}
                </p>

                {/* Decorative Bottom Line */}
                <div className="via-primary/50 bg-linear-to-r absolute bottom-0 left-0 right-0 h-1 from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Floating Number */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="bg-primary absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="from-primary via-secondary to-primary bg-linear-to-r mx-auto mt-16 h-2 w-32 rounded-full"
        />
      </div>
    </section>
  );
}

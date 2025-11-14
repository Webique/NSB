"use client";

import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const values = ["الإتقان", "الابتكار", "الشمولية"];

export default function ValuesSection() {
  const t = useTranslations("IndexPage.Features");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-gray-50 py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 text-6xl font-bold text-gray-200">02</div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
        </motion.div>

        <div ref={ref} className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-4 text-7xl font-bold text-primary">
                {value}
              </div>
              <p className="text-lg text-gray-600">
                {t(`feature${index + 1}.description` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

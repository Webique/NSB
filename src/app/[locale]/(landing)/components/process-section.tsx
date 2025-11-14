"use client";

import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const steps = [
  { key: "step1", number: "01" },
  { key: "step2", number: "02" },
  { key: "step3", number: "03" },
  { key: "step4", number: "04" },
  { key: "step5", number: "05" },
  { key: "step6", number: "06" }
];

export default function ProcessSection() {
  const t = useTranslations("IndexPage.Process");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 text-6xl font-bold text-gray-200">07</div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-semibold text-primary">
            {t("subtitle")}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            {t("description")}
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"}`}>
                    <div className="rounded-lg bg-gray-50 p-8">
                      <div className="mb-4 text-5xl font-bold text-primary">
                        {step.number}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-gray-900">
                        {t(`${step.key}.title` as any)}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {t(`${step.key}.description` as any)}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-lg lg:block" />

                  {/* Spacer */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

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

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-white to-gray-50 py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots h-full w-full" />
      </div>

      <div className="container relative px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          {/* Section Number */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="to-primary/50 bg-linear-to-r h-px w-16 from-transparent" />
            <div className="text-primary/10 text-8xl font-bold">06</div>
            <div className="to-primary/50 bg-linear-to-l h-px w-16 from-transparent" />
          </div>

          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            {t("title")}
          </h2>
          <div className="via-primary bg-linear-to-r mx-auto mb-6 h-1 w-24 from-transparent to-transparent" />
          <p className="text-primary mx-auto max-w-2xl text-2xl font-semibold">
            {t("subtitle")}
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            {t("description")}
          </p>
        </m.div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <m.div
                  key={step.key}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${isLeft ? "lg:pe-16 lg:text-right" : "lg:ps-16 lg:text-left"}`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      {/* Decorative Corner */}
                      <div className="bg-primary/5 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all duration-500 group-hover:scale-150" />

                      <div className="relative">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="from-primary to-secondary bg-linear-to-br flex h-16 w-16 items-center justify-center rounded-xl text-3xl font-bold text-white shadow-lg">
                            {step.number}
                          </div>
                          <div className="from-primary bg-linear-to-r h-1 w-12 to-transparent" />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                          {t(`${step.key}.title` as any)}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                          {t(`${step.key}.description` as any)}
                        </p>
                      </div>

                      {/* Bottom Accent */}
                      <div className="from-primary to-secondary bg-linear-to-r absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="from-primary to-secondary bg-linear-to-br absolute left-1/2 hidden h-8 w-8 -translate-x-1/2 rounded-full border-4 border-white shadow-lg lg:block" />

                  {/* Spacer */}
                  <div className="hidden flex-1 lg:block" />
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

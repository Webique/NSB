"use client";

import { Award, Layers, Lightbulb } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function ValuesSection() {
  const t = useTranslations("IndexPage.Features");

  const values = [
    {
      key: "feature1",
      title: t("feature1.title"),
      description: t("feature1.description"),
      icon: Award
    },
    {
      key: "feature2",
      title: t("feature2.title"),
      description: t("feature2.description"),
      icon: Lightbulb
    },
    {
      key: "feature3",
      title: t("feature3.title"),
      description: t("feature3.description"),
      icon: Layers
    }
  ];

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-gray-50 to-white py-24">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots h-full w-full" />
      </div>

      <div className="container relative px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <m.div
              key={value.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Decorative Corner */}
                <div className="bg-primary/10 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className="from-primary/10 to-secondary/10 bg-linear-to-br flex size-24 items-center justify-center rounded-2xl shadow-inner transition-all duration-500 group-hover:scale-110">
                    <value.icon className="text-primary group-hover:text-secondary size-14 transition-colors duration-500" />
                  </div>
                </div>

                {/* Title */}
                <div className="relative mb-4 text-center">
                  <h3 className="text-primary group-hover:text-secondary mb-2 text-3xl font-bold transition-colors">
                    {value.title}
                  </h3>
                  <div className="via-primary bg-linear-to-r mx-auto h-1 w-16 from-transparent to-transparent transition-all duration-500 group-hover:w-24" />
                </div>

                {/* Description */}
                <p className="relative text-center text-base leading-relaxed text-gray-600">
                  {value.description}
                </p>

                {/* Decorative Bottom Line */}
                <div className="via-primary/50 bg-linear-to-r absolute inset-x-0 bottom-0 h-1 from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </m.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <m.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="from-primary via-secondary to-primary bg-linear-to-r mx-auto mt-16 h-2 w-32 rounded-full"
        />
      </div>
    </section>
  );
}

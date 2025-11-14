"use client";

import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

type Project = {
  title: string;
  subtitle: string;
  image: string;
};

export default function PortfolioSection() {
  const t = useTranslations("IndexPage.Portfolio");
  const projects: Project[] = t.raw("projects");

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-gray-50 to-white py-24">
      {/* Decorative Background */}
      <div className="bg-primary/5 absolute start-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="bg-secondary/5 absolute bottom-0 end-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          {/* Section Number */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="to-primary/50 bg-linear-to-r h-px w-16 from-transparent" />
            <div className="text-primary/10 text-8xl font-bold">07</div>
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="relative h-[450px]">
                <ExportedImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black via-black/60 to-transparent" />

                {/* Decorative Corner */}
                <div className="bg-primary/20 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  {/* Number Badge */}
                  <div className="bg-primary/90 absolute end-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold backdrop-blur-sm">
                    {index + 1}
                  </div>

                  <div className="mb-4">
                    <div className="bg-primary mb-3 h-1 w-16 transition-all duration-500 group-hover:w-24" />
                    <h3 className="mb-3 text-3xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-gray-200 transition-all duration-500 group-hover:text-white">
                    {project.subtitle}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="from-primary via-secondary to-primary bg-linear-to-r absolute inset-x-0 bottom-0 h-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

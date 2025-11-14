"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CTASection() {
  const t = useTranslations("IndexPage.CTA");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden bg-black py-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ExportedImage
          src="/images/الملف التعريفي-نسب العقارية(1).pdf-image-009.jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-20"
        />
        {/* linear Overlays */}
        <div className="bg-linear-to-b absolute inset-0 from-black via-black/80 to-black" />
        <div className="from-primary/10 to-secondary/10 bg-linear-to-r absolute inset-0 via-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="bg-primary absolute -start-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="bg-secondary absolute -end-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div ref={ref} className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Decorative Top Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="via-primary bg-linear-to-r mx-auto mb-8 h-1 w-32 from-transparent to-transparent"
          />

          <h2 className="bg-linear-to-b mb-6 from-white to-gray-300 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            ابدأ رحلتك معنا
          </h2>

          <p className="mb-12 text-2xl font-light text-gray-300 md:text-3xl">
            وتعرف على أفضل الفرص الاستثمارية
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Button
              size="lg"
              className="bg-primary shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 group px-12 py-8 text-xl font-semibold text-black shadow-2xl transition-all hover:scale-105"
              asChild
            >
              <Link href={siteConfig.links.whatsapp} target="_blank">
                {t("button")}
                <ArrowRight className="ms-3 h-6 w-6 transition-transform group-hover:translate-x-2 rtl:rotate-180" />
              </Link>
            </Button>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* Phone */}
            <a
              href={`tel:${siteConfig.support.phone}`}
              className="hover:border-primary/50 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="bg-primary/20 rounded-full p-3">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div className="text-lg font-semibold text-white">
                  {siteConfig.support.phone}
                </div>
              </div>
            </a>

            {/* Website */}
            <a
              href={siteConfig.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-primary/50 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="bg-primary/20 rounded-full p-3">
                  <svg
                    className="text-primary h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div className="text-lg font-semibold text-white">
                  www.NSB.sa
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.support.email}`}
              className="hover:border-primary/50 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="bg-primary/20 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div className="text-lg font-semibold text-white">
                  {siteConfig.support.email}
                </div>
              </div>
            </a>
          </motion.div>

          {/* Decorative Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="via-primary bg-linear-to-r mx-auto mt-12 h-1 w-32 from-transparent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

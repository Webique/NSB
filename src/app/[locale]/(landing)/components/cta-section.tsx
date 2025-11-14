"use client";

import { ArrowRight } from "lucide-react";
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
    <section className="relative overflow-hidden bg-black py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ExportedImage
          src="/images/الملف التعريفي-نسب العقارية(1).pdf-image-097.jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div ref={ref} className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            ابدأ رحلتك معنا
          </h2>
          <p className="mb-8 text-xl text-gray-200">
            وتعرف على أفضل الفرص الاستثمارية
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="group bg-white px-8 py-6 text-lg text-black hover:bg-gray-100"
              asChild
            >
              <Link href={siteConfig.links.whatsapp} target="_blank">
                {t("button")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4 text-white md:flex-row md:justify-center md:gap-8"
          >
            <a
              href={`tel:${siteConfig.support.phone}`}
              className="text-lg transition-colors hover:text-primary"
            >
              {siteConfig.support.phone}
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href={siteConfig.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-colors hover:text-primary"
            >
              www.NSB.sa
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href={`mailto:${siteConfig.support.email}`}
              className="text-lg transition-colors hover:text-primary"
            >
              {siteConfig.support.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("IndexPage.Hero");

  const scrollToSection = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-screen relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-black/70 py-5 sm:py-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ExportedImage
          src="/images/hero.png"
          alt="NSB Real Estate"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Gradient Overlay - Lighter for better visibility */}
        <div className="bg-linear-to-b absolute inset-0 from-black/70 via-black/40 to-black/70" />

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="bg-grid-pattern h-full w-full" />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-primary absolute end-0 top-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="bg-secondary absolute bottom-1/4 start-0 h-[700px] w-[700px] rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          {/* Logo/Brand Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <div className="via-primary bg-linear-to-r mx-auto mb-4 h-1 w-24 from-transparent to-transparent md:mb-6 md:w-32" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white drop-shadow-2xl md:mb-6 md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary mb-4 text-lg font-semibold [text-shadow:0_2px_8px_rgb(0_0_0/60%)] md:mb-6 md:text-xl lg:text-2xl"
          >
            {t("subtitle")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="via-primary bg-linear-to-r mx-auto mb-4 h-px w-32 from-transparent to-transparent md:mb-6 md:w-40"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-200 [text-shadow:0_2px_8px_rgb(0_0_0/60%)] md:mb-12 md:text-lg lg:text-xl"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center md:gap-5"
          >
            <Button
              size="lg"
              className="bg-primary shadow-primary/40 hover:shadow-primary/50 hover:bg-primary texxtbase hover:sale-105 d:px-12 group px-8 py-6 font-bold text-black shadow-2xl transition-all md:py-7 md:text-lg"
              asChild
            >
              <Link href="#contact">
                {t("cta")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary hover:border-primary hover:bg-primary/20 hover:shadow-primary/30 border-2 bg-white/10 px-8 py-6 text-base font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl md:px-12 md:py-7 md:text-lg"
              asChild
            >
              <Link href={siteConfig.links.whatsapp} target="_blank">
                {t("ctaSecondary")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToSection}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer sm:bottom-10"
        aria-label="Scroll to content"
      >
        <motion.a
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
          href="#about"
        >
          <div className="border-primary/50 flex h-12 w-8 items-start justify-center rounded-full border-2 p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-primary h-2 w-2 rounded-full"
            />
          </div>
        </motion.a>
      </motion.button>
    </section>
  );
}

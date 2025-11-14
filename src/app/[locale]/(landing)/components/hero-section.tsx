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
    <section className="relative flex min-h-screen items-center justify-center bg-black pt-20 lg:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ExportedImage
          src="/images/الملف التعريفي-نسب العقارية(1).pdf-image-061.jpg"
          alt="NSB Real Estate"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient Overlay */}
        <div className="bg-linear-to-b absolute inset-0 from-black/85 via-black/70 to-black/85" />

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="bg-grid-pattern h-full w-full" />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-primary absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="bg-secondary absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          {/* Logo/Brand Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="via-primary bg-linear-to-r mx-auto mb-8 h-1 w-32 from-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="bg-linear-to-b mb-10 from-white via-white to-gray-400 bg-clip-text text-6xl font-bold leading-tight text-transparent md:text-7xl lg:text-8xl xl:text-9xl">
              {t("title")}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary mb-8 text-2xl font-light md:text-3xl lg:text-4xl"
          >
            {t("subtitle")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="via-primary bg-linear-to-r mx-auto mb-8 h-px w-40 from-transparent to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-14 max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-5 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="bg-primary shadow-primary/30 hover:shadow-primary/40 hover:bg-primary/90 group px-12 py-8 text-xl font-bold text-black shadow-2xl transition-all hover:scale-105"
              asChild
            >
              <Link href="#contact">
                {t("cta")}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/60 hover:border-primary hover:bg-primary/10 hover:shadow-primary/20 border-2 bg-transparent px-12 py-8 text-xl font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg"
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
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            استكشف
          </span>
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
        </motion.div>
      </motion.button>
    </section>
  );
}

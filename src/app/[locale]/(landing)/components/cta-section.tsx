"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CTASection() {
  const t = useTranslations("IndexPage.CTA");
  const tFooter = useTranslations("Footer");

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-gray-50 via-white to-gray-50 py-40">
      {/* Decorative Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 0.15, scale: 1 }
          }}
          transition={{ duration: 1.5 }}
          className="bg-primary absolute -start-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 0.15, scale: 1 }
          }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="bg-secondary absolute -end-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Decorative Top Line */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1 }
            }}
            transition={{ duration: 1, delay: 0.2 }}
            className="via-primary bg-linear-to-r mx-auto mb-8 h-1 w-32 from-transparent to-transparent"
          />

          <h2 className="bg-linear-to-b mb-6 from-gray-900 to-gray-700 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            {t("title")}
          </h2>

          <p className="mb-12 text-2xl font-light text-gray-700 md:text-3xl">
            {t("description")}
          </p>

          {/* CTA Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
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
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* Phone */}
            <a
              href={`tel:${siteConfig.support.phone}`}
              className="hover:border-primary/50 group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 backdrop-blur-sm transition-all hover:bg-gray-100"
            >
              <div className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="bg-primary/20 rounded-full p-3">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div dir="ltr" className="text-lg font-semibold text-gray-900">
                  {siteConfig.support.phone}
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="hover:border-primary/50 group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 backdrop-blur-sm transition-all hover:bg-gray-100">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {tFooter("saudiArabia")}
                </div>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.support.email}`}
              className="hover:border-primary/50 group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 backdrop-blur-sm transition-all hover:bg-gray-100"
            >
              <div className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="bg-primary/20 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {siteConfig.support.email}
                </div>
              </div>
            </a>
          </motion.div>

          {/* Decorative Bottom Line */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1 }
            }}
            transition={{ duration: 1, delay: 0.8 }}
            className="via-primary bg-linear-to-r mx-auto mt-12 h-1 w-32 from-transparent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

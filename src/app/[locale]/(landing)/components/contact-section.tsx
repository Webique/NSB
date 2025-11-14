"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";

import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-grid h-full w-full" />
      </div>
      <div className="bg-primary/10 absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          {/* Section Number */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="to-primary/50 bg-linear-to-r h-px w-16 from-transparent" />
            <div className="text-primary/10 text-8xl font-bold">10</div>
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

        <div ref={ref} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={`tel:${siteConfig.support.phone}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-primary/5 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="from-primary/10 to-secondary/10 group-hover:from-primary group-hover:to-secondary bg-linear-to-br mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all group-hover:scale-110">
                    <Phone className="text-primary h-10 w-10 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {t("phone")}
                  </h3>
                  <p className="group-hover:text-primary text-lg text-gray-600 transition-colors">
                    {siteConfig.support.phone}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={`mailto:${siteConfig.support.email}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-primary/5 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="from-primary/10 to-secondary/10 group-hover:from-primary group-hover:to-secondary bg-linear-to-br mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all group-hover:scale-110">
                    <Mail className="text-primary h-10 w-10 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {t("email")}
                  </h3>
                  <p className="group-hover:text-primary text-lg text-gray-600 transition-colors">
                    {siteConfig.support.email}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={siteConfig.links.googleMap}
              target="_blank"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-primary/5 absolute end-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full transition-all duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="from-primary/10 to-secondary/10 group-hover:from-primary group-hover:to-secondary bg-linear-to-br mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all group-hover:scale-110">
                    <MapPin className="text-primary h-10 w-10 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {t("location")}
                  </h3>
                  <p className="group-hover:text-primary text-lg text-gray-600 transition-colors">
                    {t("visitUs")}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="overflow-hidden rounded-3xl border-4 border-gray-200 shadow-2xl">
            <iframe
              src={siteConfig.links.googleMapIframe}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NSB Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="bg-gray-50 py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            {t("subtitle")}
          </p>
        </motion.div>

        <div ref={ref} className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <Link
              href={`tel:${siteConfig.support.phone}`}
              className="group block"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary group-hover:scale-110">
                <Phone className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {t("phone")}
              </h3>
              <p className="text-gray-600 transition-colors group-hover:text-primary">
                {siteConfig.support.phone}
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href={`mailto:${siteConfig.support.email}`}
              className="group block"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary group-hover:scale-110">
                <Mail className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {t("email")}
              </h3>
              <p className="text-gray-600 transition-colors group-hover:text-primary">
                {siteConfig.support.email}
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Link
              href={siteConfig.links.googleMap}
              target="_blank"
              className="group block"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary group-hover:scale-110">
                <MapPin className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {t("location")}
              </h3>
              <p className="text-gray-600 transition-colors group-hover:text-primary">
                {t("visitUs")}
              </p>
            </Link>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-lg shadow-lg"
        >
          <iframe
            src={siteConfig.links.googleMapIframe}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NSB Location"
          />
        </motion.div>
      </div>
    </section>
  );
}

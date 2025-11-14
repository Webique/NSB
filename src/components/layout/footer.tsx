"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("myservices"), href: "#services" },
    { label: t("contactme"), href: "#contact" }
  ];

  const services = [
    { label: t("marketing"), href: "#services" },
    { label: t("development"), href: "#services" },
    { label: t("consulting"), href: "#services" }
  ];

  return (
    <footer className="bg-linear-to-b relative from-gray-900 to-black text-white">
      {/* Top Accent Line */}
      <div className="via-primary bg-linear-to-r h-1 w-full from-transparent to-transparent"></div>

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots h-full w-full"></div>
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info - Takes more space */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Logo
              src="/images/logo-white.png"
              imgClassName="w-40 lg:w-48"
              className="mb-8"
            />
            <p className="mb-8 max-w-md text-lg leading-relaxed text-gray-300">
              {t("companyDescription")}
            </p>
            {/* Decorative Line */}
            <div className="from-primary bg-linear-to-r h-1 w-24 to-transparent"></div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-primary mb-8 text-base font-bold uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-base text-gray-300 transition-all hover:translate-x-1 hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="bg-primary absolute -bottom-1 start-0 h-0.5 w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-primary mb-8 text-base font-bold uppercase tracking-wider">
              {t("services")}
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="group inline-flex items-center text-base text-gray-300 transition-all hover:translate-x-1 hover:text-white"
                  >
                    <span className="relative">
                      {service.label}
                      <span className="bg-primary absolute -bottom-1 start-0 h-0.5 w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-primary mb-8 text-base font-bold uppercase tracking-wider">
              {t("contactUs")}
            </h3>
            <div className="space-y-5">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-start gap-4 transition-all hover:translate-x-1"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400">
                    {t("phone")}
                  </div>
                  <div
                    className="group-hover:text-primary text-base font-medium text-white transition-colors"
                    dir="ltr"
                  >
                    {siteConfig.support.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-start gap-4 transition-all hover:translate-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400">
                    {t("email")}
                  </div>
                  <div className="group-hover:text-primary text-base font-medium text-white transition-colors">
                    {siteConfig.support.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400">
                    {t("location")}
                  </div>
                  <div className="text-base font-medium text-white">
                    {t("saudiArabia")}
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="via-primary bg-linear-to-r h-1 w-32 from-transparent to-transparent"></div>
            <p className="text-base text-gray-400">
              {t("copyright", { year: currentYear })}
            </p>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;

import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import CTASection from "./components/cta-section";
import HeroSection from "./components/hero-section";
import PortfolioSection from "./components/portfolio-section";
import ProcessSection from "./components/process-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import ValuesSection from "./components/values-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}

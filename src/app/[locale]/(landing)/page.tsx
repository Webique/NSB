import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import AboutSection from "./components/about-section";
import CompaniesSection from "./components/companies-section";
import CTASection from "./components/cta-section";
import HeroSection from "./components/hero-section";
import PartnersSection from "./components/partners-section";
import PortfolioSection from "./components/portfolio-section";
import ProcessSection from "./components/process-section";
import SectionDivider from "./components/section-divider";
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
      <SectionDivider variant="gradient" />
      <AboutSection />
      <SectionDivider variant="primary" />
      <ValuesSection />
      <SectionDivider variant="secondary" />
      <StatsSection />
      <SectionDivider variant="primary" />
      <ServicesSection />
      <SectionDivider variant="gradient" />
      <ProcessSection />
      <SectionDivider variant="secondary" />
      <PortfolioSection />
      <SectionDivider variant="primary" />
      <PartnersSection />
      <CompaniesSection />
      <SectionDivider variant="gradient" />
      <CTASection />
      <WhatsAppFloat />
    </main>
  );
}

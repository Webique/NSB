import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import HeroSection from "@/app/[locale]/(landing)/components/hero-section";
import WhatsAppFloat from "@/components/whats-app-float";

import SectionDivider from "./components/section-divider";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <SectionDivider variant="gradient" />
      {/* <AboutSection /> */}
      <SectionDivider variant="primary" />
      {/* <ValuesSection /> */}
      <SectionDivider variant="secondary" />
      {/* <StatsSection /> */}
      <SectionDivider variant="primary" />
      {/* <ServicesSection /> */}
      <SectionDivider variant="gradient" />
      {/* <ProcessSection /> */}
      <SectionDivider variant="secondary" />
      {/* <PortfolioSection /> */}
      <SectionDivider variant="primary" />
      {/* <PartnersSection /> */}
      {/* <CompaniesSection /> */}
      <SectionDivider variant="gradient" />
      {/* <CTASection /> */}
      {/* <ContactSection /> */}
      <WhatsAppFloat />
    </main>
  );
}

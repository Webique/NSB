import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "@/app/[locale]/(landing)/components/about-section";
import CompaniesSection from "@/app/[locale]/(landing)/components/companies-section";
import CTASection from "@/app/[locale]/(landing)/components/cta-section";
import HeroSection from "@/app/[locale]/(landing)/components/hero-section";
import PartnersSection from "@/app/[locale]/(landing)/components/partners-section";
import PortfolioSection from "@/app/[locale]/(landing)/components/portfolio-section";
import ProcessSection from "@/app/[locale]/(landing)/components/process-section";
import StatsSection from "@/app/[locale]/(landing)/components/stats-section";
import ValuesSection from "@/app/[locale]/(landing)/components/values-section";
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
      <AboutSection />
      <SectionDivider variant="primary" />
      <ValuesSection />
      <SectionDivider variant="secondary" />
      <StatsSection />
      <SectionDivider variant="primary" />
      {/* <ServicesSection /> */}
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

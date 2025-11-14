"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const CompaniesSection = () => {
  const t = useTranslations("IndexPage.Companies");
  const locale = useLocale();
  const dir = getLangDir(locale);

  const companies = [
    { src: "/images/companies/1.png", width: 150, height: 150 },
    { src: "/images/companies/2.png", width: 150, height: 150 },
    { src: "/images/companies/3.png", width: 150, height: 150 },
    { src: "/images/companies/4.png", width: 150, height: 150 },
    { src: "/images/companies/5.png", width: 213, height: 142 },
    { src: "/images/companies/6.png", width: 150, height: 150 }
  ];

  return (
    <section id="companies" className="relative bg-white py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute left-20 top-20 h-64 w-64 rounded-full"></div>
        <div className="bg-primary/5 absolute bottom-20 right-20 h-48 w-48 rounded-full"></div>
      </div>

      <div className="relative">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout mb-16 text-center"
        >
          <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
            {t("title")}
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-16 rounded-full"></div>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            {t("description")}
          </p>
        </m.div>

        {/* Companies Carousel */}
        <Carousel
          dir={dir === "rtl" ? "rtl" : "ltr"}
          opts={{
            align: "start",
            loop: true,
            watchDrag: false
          }}
          plugins={[
            AutoScroll({
              speed: 1.5,
              direction: "backward"
            })
          ]}
          className="max-w-full overflow-hidden"
        >
          <CarouselContent>
            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-auto items-center px-2 ps-3"
                >
                  <ExportedImage
                    src={company.src}
                    alt={`company ${index + 1}`}
                    width={company.width}
                    height={company.height}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CompaniesSection;

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
    <section
      id="companies"
      className="relative overflow-hidden bg-gray-50 py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="bg-secondary/5 absolute start-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
        <div className="bg-primary/5 absolute bottom-0 end-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mb-20 px-4 text-center"
        >
          {/* Section Number */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="to-primary/50 bg-linear-to-r h-px w-16 from-transparent" />
            <div className="text-primary/10 text-8xl font-bold">09</div>
            <div className="to-primary/50 bg-linear-to-l h-px w-16 from-transparent" />
          </div>

          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            {t("title")}
          </h2>
          <div className="via-primary bg-linear-to-r mx-auto mb-6 h-1 w-24 from-transparent to-transparent"></div>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
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

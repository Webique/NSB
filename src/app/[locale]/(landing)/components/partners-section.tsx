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

const PartnersSection = () => {
  const t = useTranslations("IndexPage.Partners");
  const locale = useLocale();
  const dir = getLangDir(locale);

  const partners = [
    { src: "/images/partners/1.png", width: 150, height: 150 },
    { src: "/images/partners/2.png", width: 150, height: 150 },
    { src: "/images/partners/3.png", width: 150, height: 150 },
    { src: "/images/partners/4.png", width: 150, height: 150 },
    { src: "/images/partners/5.png", width: 213, height: 142 },
    { src: "/images/partners/6.png", width: 150, height: 150 },
    { src: "/images/partners/7.png", width: 150, height: 150 },
    { src: "/images/partners/8.png", width: 150, height: 150 },
    { src: "/images/partners/9.png", width: 150, height: 150 },
    { src: "/images/partners/10.png", width: 150, height: 150 },
    { src: "/images/partners/11.png", width: 150, height: 150 },
    { src: "/images/partners/12.png", width: 150, height: 150 },
    { src: "/images/partners/13.png", width: 150, height: 150 },
    { src: "/images/partners/14.png", width: 150, height: 150 },
    { src: "/images/partners/15.png", width: 150, height: 150 }
  ];

  return (
    <section id="partners" className="relative bg-gray-50 py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute right-20 top-20 h-64 w-64 rounded-full"></div>
        <div className="bg-primary/5 absolute bottom-20 left-20 h-48 w-48 rounded-full"></div>
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

        {/* Partners Carousel */}
        <Carousel
          dir={dir === "rtl" ? "ltr" : "rtl"}
          opts={{
            align: "start",
            loop: true,
            watchDrag: false
          }}
          plugins={[
            AutoScroll({
              speed: 1.5
            })
          ]}
          className="max-w-full overflow-hidden pb-10"
        >
          <CarouselContent>
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <CarouselItem
                key={index}
                className="flex basis-auto items-center px-2 ps-3"
              >
                <ExportedImage
                  src={partner.src}
                  alt={`partner ${index + 1}`}
                  width={partner.width}
                  height={partner.height}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;

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
    { src: "/images/partners/1.png", width: 60, height: 60 },
    { src: "/images/partners/2.png", width: 100, height: 100 },
    { src: "/images/partners/3.png", width: 80, height: 80 },
    { src: "/images/partners/4.png", width: 80, height: 80 },
    { src: "/images/partners/5.png", width: 100, height: 100 },
    { src: "/images/partners/6.png", width: 100, height: 100 },
    { src: "/images/partners/7.png", width: 100, height: 100 },
    { src: "/images/partners/8.png", width: 100, height: 100 },
    { src: "/images/partners/9.png", width: 100, height: 100 },
    { src: "/images/partners/10.png", width: 80, height: 80 },
    { src: "/images/partners/11.png", width: 100, height: 100 },
    { src: "/images/partners/12.png", width: 60, height: 60 },
    { src: "/images/partners/13.png", width: 100, height: 100 },
    { src: "/images/partners/14.png", width: 150, height: 100 },
    { src: "/images/partners/15.png", width: 150, height: 100 }
  ];

  return (
    <section id="partners" className="relative overflow-hidden bg-white py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="bg-primary/5 absolute end-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
        <div className="bg-secondary/5 absolute bottom-0 start-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"></div>
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
            <div className="text-primary/10 text-8xl font-bold">08</div>
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
          className="max-w-full overflow-hidden pb-6"
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

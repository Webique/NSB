"use client";

import { motion, useInView } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const projects = [
  {
    title: "فندق شموخ المدينة",
    subtitle: "الموقع الحيوي بجوار المسجد النبوي الشريف",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-061.jpg"
  },
  {
    title: "فندق العزيزية",
    subtitle: "رحابة المكان بالقرب من المسجد الحرام",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-063.jpg"
  },
  {
    title: "مجمع تترا",
    subtitle: "رؤية استثمارية بارزة تتألق بأبهى المواقع",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-064.jpg"
  },
  {
    title: "فندق تيماندرا",
    subtitle: "موقع فريد بالقرب من البحر الأحمر",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-065.jpg"
  },
  {
    title: "فلل نمار",
    subtitle: "واقع تعيش فيه مع أسرتك أجمل الأوقات",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-066.jpg"
  },
  {
    title: "شقق العوالي",
    subtitle: "قطعة سكنية فريدة تمنحك تجربة عيش استثنائية",
    image: "/images/الملف التعريفي-نسب العقارية(1).pdf-image-067.jpg"
  }
];

export default function PortfolioSection() {
  const t = useTranslations("IndexPage.Portfolio");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 text-6xl font-bold text-gray-200">08</div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            أبرز المشاريع
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            صروح تتحدث وترسم لشركائنا صورة تليق بهم بالإتقان
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-96">
                <ExportedImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const mainStats = [
  { value: 15, suffix: "+", label: "عاماً زاخرة بالخبرات" },
  { value: 20, suffix: "+", label: "مشروعاً تحكي قصصها" }
];

const detailedStats = [
  { value: 5, label: "مدن", sublabel: "الرياض – جدة – مكة – الطائف – المدينة" },
  { value: 15, label: "سنة", sublabel: "خبرات متراكمة في المجالات العقارية" },
  { value: 77, label: "مبنى", sublabel: "وفق أعلى معايير الإتقان والجودة" },
  {
    value: 10,
    label: "مشاريع",
    sublabel: "تحت الدراسة تنضم لقائمة المنجزات قريباً"
  },
  {
    value: 50000,
    label: "م² الأراضي المطورة",
    sublabel: "مساحات في ازدياد مستمر"
  },
  {
    value: 200,
    suffix: "+",
    label: "وحدة سكنية",
    sublabel: "تنعم بها أكثر من 200 أسرة"
  },
  {
    value: 20,
    suffix: "+",
    label: "مشروع",
    sublabel: "متنوعة الوحدات والمناطق"
  },
  {
    value: 500,
    suffix: "+",
    label: "غرفة فندقية",
    sublabel: "شيّدت وفق تجارب وخبرات نوعية"
  },
  {
    value: 110000,
    label: "م² مسطحات البناء",
    sublabel: "تتوافق مع أحدث توجهات البناء"
  },
  { value: 274000, label: "م² بنية تحتية", sublabel: "جار العمل على تطويرها" }
];

function Counter({ value, isInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <>{count.toLocaleString()}</>;
}

export default function StatsSection() {
  const t = useTranslations("IndexPage.Stats");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-gray-50 to-white py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-grid h-full w-full" />
      </div>
      <div className="bg-primary/10 absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          {/* Section Number */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="to-primary/50 bg-linear-to-r h-px w-16 from-transparent" />
            <div className="text-primary/10 text-8xl font-bold">03</div>
            <div className="to-primary/50 bg-linear-to-l h-px w-16 from-transparent" />
          </div>

          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            أين وصلت نسب؟
          </h2>
          <div className="via-primary bg-linear-to-r mx-auto h-1 w-24 from-transparent to-transparent" />

          {/* Main Stats - Hero Numbers */}
          <div className="mb-16 mt-16 grid gap-12 md:grid-cols-2">
            {mainStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="from-primary/5 to-secondary/5 bg-linear-to-br relative overflow-hidden rounded-3xl p-12 shadow-lg transition-all duration-500 hover:shadow-2xl">
                  {/* Decorative Circle */}
                  <div className="bg-primary/10 absolute -right-12 -top-12 h-48 w-48 rounded-full transition-all duration-500 group-hover:scale-150" />

                  <div className="relative text-center">
                    <div className="from-primary to-secondary bg-linear-to-br mb-4 bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
                      <Counter value={stat.value} isInView={isInView} />
                      {stat.suffix}
                    </div>
                    <div className="text-2xl font-semibold text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Amount - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="from-primary to-secondary bg-linear-to-br relative mx-auto mb-20 max-w-3xl overflow-hidden rounded-3xl p-12 shadow-2xl"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="pattern-dots h-full w-full" />
            </div>

            <div className="relative text-center text-white">
              <div className="mb-4 text-6xl font-bold md:text-7xl">
                +450,000,000
              </div>
              <div className="text-2xl font-medium">
                مجموع الاستثمارات (ريال)
              </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute left-0 top-0 h-20 w-20 border-l-4 border-t-4 border-white/30" />
            <div className="absolute bottom-0 right-0 h-20 w-20 border-b-4 border-r-4 border-white/30" />
          </motion.div>
        </motion.div>

        {/* Detailed Stats Grid */}
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {detailedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Hover Effect */}
              <div className="from-primary/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="from-primary to-secondary bg-linear-to-br mb-3 bg-clip-text text-4xl font-bold text-transparent">
                  <Counter value={stat.value} isInView={isInView} />
                  {stat.suffix}
                </div>
                <div className="mb-2 text-sm font-bold text-gray-900">
                  {stat.label}
                </div>
                <div className="text-xs leading-relaxed text-gray-500">
                  {stat.sublabel}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="from-primary to-secondary bg-linear-to-r absolute bottom-0 left-0 right-0 h-1 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

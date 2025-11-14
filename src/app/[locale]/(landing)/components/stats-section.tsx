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
    <section className="bg-white py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 text-6xl font-bold text-gray-200">03</div>
          <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
            أين وصلت نسب؟
          </h2>

          {/* Main Stats */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {mainStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-primary mb-2 text-7xl font-bold md:text-8xl">
                  <Counter value={stat.value} isInView={isInView} />
                  {stat.suffix}
                </div>
                <div className="text-xl font-medium text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Amount */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-primary text-5xl font-bold md:text-6xl">
              +450,000,000
            </div>
            <p className="mt-2 text-xl text-gray-600">
              مجموع الاستثمارات (ريال)
            </p>
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
              className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="text-primary mb-2 text-4xl font-bold">
                <Counter value={stat.value} isInView={isInView} />
                {stat.suffix}
              </div>
              <div className="mb-2 text-sm font-bold text-gray-900">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

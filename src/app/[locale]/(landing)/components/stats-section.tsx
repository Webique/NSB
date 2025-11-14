"use client";

import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const t = useTranslations("IndexPage.Stats");

  const mainStats = [
    {
      value: 15,
      suffix: "+",
      label: t("mainStats.years.label")
    },
    {
      value: 20,
      suffix: "+",
      label: t("mainStats.projects.label")
    }
  ];

  const detailedStats = [
    {
      value: 5,
      label: t("detailedStats.cities.label"),
      sublabel: t("detailedStats.cities.sublabel")
    },
    {
      value: 15,
      label: t("detailedStats.experience.label"),
      sublabel: t("detailedStats.experience.sublabel")
    },
    {
      value: 77,
      label: t("detailedStats.buildings.label"),
      sublabel: t("detailedStats.buildings.sublabel")
    },
    {
      value: 10,
      label: t("detailedStats.upcomingProjects.label"),
      sublabel: t("detailedStats.upcomingProjects.sublabel")
    },
    {
      value: 50000,
      label: t("detailedStats.developedLand.label"),
      sublabel: t("detailedStats.developedLand.sublabel")
    },
    {
      value: 200,
      suffix: "+",
      label: t("detailedStats.residentialUnits.label"),
      sublabel: t("detailedStats.residentialUnits.sublabel")
    },
    {
      value: 20,
      suffix: "+",
      label: t("detailedStats.diverseProjects.label"),
      sublabel: t("detailedStats.diverseProjects.sublabel")
    },
    {
      value: 500,
      suffix: "+",
      label: t("detailedStats.hotelRooms.label"),
      sublabel: t("detailedStats.hotelRooms.sublabel")
    },
    {
      value: 110000,
      label: t("detailedStats.builtArea.label"),
      sublabel: t("detailedStats.builtArea.sublabel")
    },
    {
      value: 274000,
      label: t("detailedStats.infrastructure.label"),
      sublabel: t("detailedStats.infrastructure.sublabel")
    }
  ];

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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          {/* Section Number */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="to-primary/50 bg-linear-to-r h-px w-16 from-transparent" />
            <div className="text-primary/10 text-8xl font-bold">03</div>
            <div className="to-primary/50 bg-linear-to-l h-px w-16 from-transparent" />
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <div className="via-primary bg-linear-to-r mx-auto h-1 w-24 from-transparent to-transparent" />

          {/* Main Stats - Hero Numbers */}
          <div className="mb-16 mt-16 grid gap-12 md:grid-cols-2">
            {mainStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="from-primary/5 to-secondary/5 bg-linear-to-br relative overflow-hidden rounded-3xl p-12 shadow-lg transition-all duration-500 hover:shadow-2xl">
                  {/* Decorative Circle */}
                  <div className="bg-primary/10 absolute -end-12 -top-12 h-48 w-48 rounded-full transition-all duration-500 group-hover:scale-150" />

                  <div className="relative text-center">
                    <div className="from-primary to-secondary bg-linear-to-br mb-4 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                      <Counter value={stat.value} />
                      {stat.suffix}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 md:text-xl">
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="from-primary to-secondary bg-linear-to-br relative mx-auto mb-20 max-w-3xl overflow-hidden rounded-3xl p-12 shadow-2xl"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="pattern-dots h-full w-full" />
            </div>

            <div className="relative text-center text-white">
              <div className="mb-4 text-4xl font-bold md:text-6xl">
                {t("investment.amount")}
              </div>
              <div className="text-lg font-medium md:text-xl">
                {t("investment.label")}
              </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute start-0 top-0 h-20 w-20 border-l-4 border-t-4 border-white/30" />
            <div className="absolute bottom-0 end-0 h-20 w-20 border-b-4 border-r-4 border-white/30" />
          </motion.div>
        </motion.div>

        {/* Detailed Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {detailedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Hover Effect */}
              <div className="from-primary/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="from-primary to-secondary bg-linear-to-br mb-3 bg-clip-text text-3xl font-bold text-transparent">
                  <Counter value={stat.value} />
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
              <div className="from-primary to-secondary bg-linear-to-r absolute bottom-0 end-0 start-0 h-1 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

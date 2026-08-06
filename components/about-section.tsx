"use client";

import { aboutParagraphs, missionStatement, visionStatement, coreValues } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-white py-20 dark:border-white/10 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900/50" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              className="mx-auto h-1 w-16 bg-[#c8952b]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">
              About Us
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-bedge-ink sm:text-5xl dark:text-white">
              About B Edge Business Consultants LLP
            </h2>
          </div>
        </MotionBlock>

        <div className="mt-16">
          <MotionBlock delay={0.2} type="slide" direction="up" className="flex flex-col justify-center max-w-4xl mx-auto">
            <div className="border-l-4 border-[#c8952b] bg-slate-50 p-8 text-lg leading-8 text-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
              {aboutParagraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  className={index === 0 ? "" : "mt-6"}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <motion.div
                className="border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center bg-bedge-ink text-[#c8952b] dark:bg-bedge-blue dark:text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-bedge-ink dark:text-white">Our Mission</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {missionStatement}
                </p>
              </motion.div>

              <motion.div
                className="border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex h-12 w-12 items-center justify-center bg-bedge-ink text-[#c8952b] dark:bg-bedge-blue dark:text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-bedge-ink dark:text-white">Our Vision</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {visionStatement}
                </p>
              </motion.div>
            </div>
          </MotionBlock>
        </div>

        <MotionBlock delay={0.3} type="fade">
          <div className="mt-20">
            <h3 className="text-center text-3xl font-extrabold text-bedge-ink dark:text-white">Our Core Values</h3>
            <div className="mx-auto mt-4 h-px w-16 bg-[#c8952b]" />
            <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="group bg-white p-7 text-center transition-colors hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="mx-auto flex h-14 w-14 items-center justify-center border border-[#c8952b]/40 text-[#c8952b]"
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <h4 className="mt-4 text-lg font-extrabold text-bedge-ink transition-colors group-hover:text-[#c8952b] dark:text-white">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-300">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

"use client";

import { whyChooseUs } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 1000;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-bedge-ink py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#c8952b]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0)_42%)]" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="max-w-3xl">
            <motion.div
              className="h-1 w-16 bg-[#c8952b]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">Why Choose Us</p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Why Businesses Trust <span className="text-[#c8952b]">B EDGE</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              We combine expertise, integrity, and innovation to deliver exceptional results for your business.
            </p>
          </div>
        </MotionBlock>

        {/* Stats Counter */}
        <MotionBlock delay={0.2} type="slide" direction="up">
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              { value: 500, suffix: "+", label: "Happy Clients" },
              { value: 35, suffix: "+", label: "Years Experience" },
              { value: 100, suffix: "%", label: "Success Rate" },
              { value: 24, suffix: "/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-bedge-ink p-7 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-extrabold text-[#c8952b] sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </MotionBlock>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionBlock key={item.title} delay={0.3 + index * 0.1} type="slide" direction="up">
                <motion.article
                  className="group h-full bg-bedge-ink p-8 transition-all duration-300 hover:bg-white/10"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center border border-[#c8952b]/50 text-[#c8952b]"
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-extrabold text-white transition-colors group-hover:text-[#c8952b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </motion.article>
              </MotionBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { whyChooseUs } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LifeBuoy, BadgeCheck, ClipboardCheck, ShieldCheck, Landmark, Building2, MapPin } from "lucide-react";

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
    <span ref={ref} className="text-gradient">
      {count}{suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-bedge-ink py-16 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 h-64 w-64 rounded-full bg-bedge-blue/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-bedge-aqua/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-bedge-aqua/30 bg-bedge-aqua/10 px-4 py-2 text-sm font-semibold text-bedge-aqua"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.div>
            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Why Businesses Trust <span className="text-gradient">B EDGE</span>
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              We combine expertise, integrity, and innovation to deliver exceptional results for your business.
            </p>
          </div>
        </MotionBlock>

        {/* Stats Counter */}
        <MotionBlock delay={0.2} type="slide" direction="up">
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: 500, suffix: "+", label: "Happy Clients" },
              { value: 35, suffix: "+", label: "Years Experience" },
              { value: 100, suffix: "%", label: "Success Rate" },
              { value: 24, suffix: "/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </MotionBlock>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionBlock key={item.title} delay={0.3 + index * 0.1} type="slide" direction="up">
                <motion.article
                  className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-bedge-aqua/30 hover:bg-white/10 hover:shadow-premium-lg"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-bedge-blue to-bedge-aqua text-white shadow-glow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-bedge-aqua transition-colors">
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

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { ServiceCard } from "@/components/service-card";
import { motion } from "framer-motion";

type ServiceCategoriesProps = {
  preview?: boolean;
};

export function ServiceCategories({ preview = false }: ServiceCategoriesProps) {
  const categories = preview ? serviceCategories : serviceCategories;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-24 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-4 w-4" />
                <span className="uppercase tracking-wider">Our Services</span>
              </motion.div>
              <h2 className="mt-6 text-4xl font-bold text-bedge-ink sm:text-5xl dark:text-white">
                Comprehensive Business Solutions
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                From registration to compliance, we handle all your business needs with expertise and precision.
              </p>
            </div>
            {preview ? (
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 border-bedge-blue/30 hover:bg-bedge-blue/5 dark:border-bedge-blue/40 dark:hover:bg-bedge-blue/10"
              >
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </MotionBlock>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <MotionBlock
              key={category.title}
              delay={index * 0.1}
              type="slide"
              direction="up"
            >
              <ServiceCard category={category} />
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { ServiceCard } from "@/components/service-card";
import { motion } from "framer-motion";
import { useState } from "react";

type ServiceCategoriesProps = {
  preview?: boolean;
};

export function ServiceCategories({ preview = false }: ServiceCategoriesProps) {
  const categories = preview ? serviceCategories : serviceCategories;
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedCard(prev => prev === title ? null : title);
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/10" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <motion.div
                className="h-1 w-16 bg-[#c8952b]"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              />
              <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">Our Services</p>
              <h2 className="mt-4 text-4xl font-extrabold text-bedge-ink sm:text-5xl dark:text-white">
                Comprehensive Business Solutions
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                From registration to compliance, we handle all your business needs with expertise and precision.
              </p>
            </div>
            {preview ? (
              <Button
                asChild
                variant="outline"
                className="h-12 border-bedge-ink px-6 font-bold uppercase tracking-wide text-bedge-ink hover:bg-bedge-ink hover:text-white dark:border-white dark:text-white"
              >
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </MotionBlock>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <MotionBlock
              key={category.title}
              delay={index * 0.1}
              type="slide"
              direction="up"
            >
              <ServiceCard
                category={category}
                isExpanded={expandedCard === category.title}
                onToggleExpand={() => toggleExpand(category.title)}
              />
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

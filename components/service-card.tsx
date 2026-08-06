"use client";

import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { serviceCategories } from "@/lib/brochure-data";
import { motion } from "framer-motion";

type Category = (typeof serviceCategories)[number];

type ServiceCardProps = {
  category: Category;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

export function ServiceCard({ category, isExpanded, onToggleExpand }: ServiceCardProps) {
  const Icon = category.icon;
  const displayItems = isExpanded ? category.items : category.items.slice(0, 8);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="group flex min-h-[550px] flex-col overflow-hidden rounded-none border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#c8952b]/60 hover:shadow-premium-lg dark:border-white/10 dark:bg-slate-950">
        <CardHeader className="relative flex-shrink-0 overflow-hidden border-b border-[#c8952b]/40 bg-bedge-ink p-6">
          <div className="relative flex items-center gap-4">
            <motion.div
              className="flex h-14 w-14 items-center justify-center border border-[#c8952b]/50 text-[#c8952b] transition-all duration-300 group-hover:bg-[#c8952b] group-hover:text-bedge-ink"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="h-7 w-7" />
            </motion.div>
            <CardTitle className="relative text-xl font-extrabold text-white">
              {category.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col flex-1">
          <ul className="grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 dark:text-slate-300 flex-1">
            {displayItems.map((item, index) => (
              <motion.li
                key={item}
                className="flex gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c8952b]" />
                <span className="transition-colors duration-300 group-hover:text-bedge-ink dark:group-hover:text-white">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          {category.items.length > 8 && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                variant="ghost"
                className="w-full font-bold text-bedge-ink hover:bg-slate-100 hover:text-[#c8952b] dark:text-white dark:hover:bg-white/10"
                onClick={onToggleExpand}
              >
                {isExpanded ? (
                  <>Show Less <ChevronDown className="ml-2 h-4 w-4 rotate-180" /></>
                ) : (
                  <>+{category.items.length - 8} more services <ChevronDown className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </motion.div>
          )}
          <motion.div
            className="mt-4 border-t border-slate-200 pt-4 dark:border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              asChild
              variant="ghost"
              className="group/btn w-full border border-bedge-ink/20 font-bold uppercase tracking-wide text-bedge-ink hover:bg-bedge-ink hover:text-white dark:border-white/20 dark:text-white"
            >
              <Link href="/contact">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

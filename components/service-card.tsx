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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="group flex flex-col overflow-hidden border border-bedge-blue/10 bg-white shadow-premium-lg transition-all duration-300 hover:shadow-premium-xl hover:border-bedge-blue/30 dark:bg-slate-800/50 dark:border-bedge-blue/20 dark:hover:border-bedge-blue/40 min-h-[550px]">
        <CardHeader className="relative overflow-hidden border-b border-bedge-blue/10 bg-gradient-to-r from-bedge-blue to-bedge-deep p-6 transition-all duration-300 group-hover:from-bedge-deep group-hover:to-bedge-blue flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-premium opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex items-center gap-4">
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30"
              whileHover={{ rotate: 5 }}
            >
              <Icon className="h-7 w-7 text-white" />
            </motion.div>
            <CardTitle className="relative text-xl font-semibold text-white">
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
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bedge-blue transition-colors duration-300 group-hover:text-bedge-aqua" />
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
                className="w-full text-bedge-blue hover:bg-bedge-blue/5 hover:text-bedge-deep dark:text-bedge-aqua dark:hover:bg-bedge-blue/10 dark:hover:text-bedge-blue"
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
            className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              asChild
              variant="ghost"
              className="w-full group/btn border-bedge-blue/20 text-bedge-blue hover:bg-bedge-blue/5 hover:text-bedge-deep dark:border-bedge-blue/30 dark:text-bedge-aqua dark:hover:bg-bedge-blue/10 dark:hover:text-bedge-blue"
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

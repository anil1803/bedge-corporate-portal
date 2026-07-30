"use client";

import { ChevronDown } from "lucide-react";
import { MotionBlock } from "@/components/motion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive business consulting services including company registration (Pvt Ltd, LLP, Partnership), GST registration and compliance, income tax filing, MCA compliances, legal services, insurance, and various government registrations like FSSAI, MSME, Trademark, and more."
  },
  {
    question: "How long does company registration take?",
    answer: "The timeline varies based on the type of entity. Private Limited Company registration typically takes 7-10 working days, LLP registration takes 5-7 days, while Partnership and Proprietorship can be registered in 2-3 days. We ensure a smooth and efficient process."
  },
  {
    question: "What documents are required for registration?",
    answer: "For company registration, you typically need PAN cards of directors/partners, Aadhaar cards, address proof, photographs, and business address proof. Specific requirements vary based on the type of registration. Our team will guide you through the complete documentation process."
  },
  {
    question: "Do you provide ongoing compliance support?",
    answer: "Yes, we provide comprehensive ongoing compliance support including annual filings, GST returns, income tax filings, ROC filings, and other statutory compliances. Our team ensures you stay compliant with all regulatory requirements throughout the year."
  },
  {
    question: "What are your consultation fees?",
    answer: "We offer free initial consultation to understand your business needs. Our service fees are transparent and competitive, varying based on the complexity and scope of work required. We provide detailed quotes before starting any work."
  },
  {
    question: "Do you serve clients outside Madhya Pradesh?",
    answer: "While we are based in Madhya Pradesh with strong local expertise, we serve clients across India. Our digital-first approach allows us to efficiently handle registrations and compliances for businesses located anywhere in the country."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-24 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              FAQ
            </motion.div>
            <h2 className="mt-6 text-4xl font-bold text-bedge-ink sm:text-5xl dark:text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Find answers to common questions about our services and processes.
            </p>
          </div>
        </MotionBlock>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <MotionBlock
              key={faq.question}
              delay={index * 0.05}
              type="slide"
              direction="up"
            >
              <motion.div
                className="overflow-hidden rounded-2xl border border-bedge-blue/10 bg-white shadow-premium-lg transition-shadow duration-300 hover:shadow-premium-xl dark:bg-slate-800/50 dark:border-bedge-blue/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-bedge-blue/5 dark:hover:bg-bedge-blue/10"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-bedge-ink dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-bedge-blue/10 text-bedge-blue dark:bg-bedge-blue/20 dark:text-bedge-aqua"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </MotionBlock>
          ))}
        </div>

        <MotionBlock delay={0.3} type="fade">
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-300">
              Still have questions?{" "}
              <a
                href="/contact"
                className="font-semibold text-bedge-blue transition-colors duration-300 hover:text-bedge-deep dark:text-bedge-aqua dark:hover:text-bedge-blue"
              >
                Contact us
              </a>{" "}
              for personalized assistance.
            </p>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

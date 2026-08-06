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
    <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/10" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="text-center">
            <motion.div
              className="mx-auto h-1 w-16 bg-[#c8952b]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">FAQ</p>
            <h2 className="mt-4 text-4xl font-extrabold text-bedge-ink sm:text-5xl dark:text-white">
              Frequently Asked <span className="text-[#c8952b]">Questions</span>
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
                className="overflow-hidden border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-premium-lg dark:border-white/10 dark:bg-slate-950"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-slate-50 dark:hover:bg-white/5"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-bedge-ink dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex h-8 w-8 items-center justify-center border border-[#c8952b]/40 text-[#c8952b]"
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
                className="font-semibold text-[#c8952b] transition-colors duration-300 hover:text-bedge-ink dark:hover:text-white"
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

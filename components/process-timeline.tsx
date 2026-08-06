"use client";

import { MessageSquare, FileText, ClipboardCheck, CheckCircle, HeadphonesIcon } from "lucide-react";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Free initial consultation to understand your business needs and requirements."
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "We prepare all necessary documents with precision and attention to detail."
  },
  {
    icon: ClipboardCheck,
    title: "Registration",
    description: "Complete registration process handled by our expert team."
  },
  {
    icon: CheckCircle,
    title: "Approval",
    description: "Track and follow up on approvals until successful completion."
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing support and guidance for all your business compliance needs."
  }
];

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/10" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              className="mx-auto h-1 w-16 bg-[#c8952b]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">Our Process</p>
            <h2 className="mt-4 text-4xl font-extrabold text-bedge-ink sm:text-5xl dark:text-white">
              Simple Steps to <span className="text-[#c8952b]">Success</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Our streamlined process ensures smooth and efficient business registration and compliance.
            </p>
          </div>
        </MotionBlock>

        <div className="mt-20">
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-px bg-[#c8952b]/40" />

              <div className="grid grid-cols-5 gap-8">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <MotionBlock
                      key={step.title}
                      delay={index * 0.1}
                      type="slide"
                      direction="up"
                    >
                      <div className="relative">
                        <motion.div
                          className="relative z-10 flex h-12 w-12 items-center justify-center bg-bedge-ink text-lg font-extrabold text-[#c8952b] shadow-sm"
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {index + 1}
                        </motion.div>

                        <motion.div
                          className="mt-8 border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#c8952b]/60 hover:shadow-premium-lg dark:border-white/10 dark:bg-slate-900"
                          whileHover={{ y: -5 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center border border-[#c8952b]/40 text-[#c8952b]">
                              <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-bedge-ink dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {step.description}
                          </p>
                        </motion.div>
                      </div>
                    </MotionBlock>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <MotionBlock
                  key={step.title}
                  delay={index * 0.1}
                  type="slide"
                  direction="up"
                >
                  <motion.div
                    className="flex gap-4"
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex h-14 w-14 shrink-0 items-center justify-center bg-bedge-ink text-xl font-extrabold text-[#c8952b] shadow-sm"
                      whileHover={{ scale: 1.06 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div className="flex-1 border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center border border-[#c8952b]/40 text-[#c8952b]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-extrabold text-bedge-ink dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </MotionBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

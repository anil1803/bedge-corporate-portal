"use client";

import { MessageSquare, FileText, ClipboardCheck, CheckCircle, HeadphonesIcon } from "lucide-react";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Free initial consultation to understand your business needs and requirements.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "We prepare all necessary documents with precision and attention to detail.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: ClipboardCheck,
    title: "Registration",
    description: "Complete registration process handled by our expert team.",
    color: "from-teal-500 to-emerald-500"
  },
  {
    icon: CheckCircle,
    title: "Approval",
    description: "Track and follow up on approvals until successful completion.",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing support and guidance for all your business compliance needs.",
    color: "from-green-500 to-lime-500"
  }
];

export function ProcessTimeline() {
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
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.div>
            <h2 className="mt-6 text-4xl font-bold text-bedge-ink sm:text-5xl dark:text-white">
              Simple Steps to <span className="text-gradient">Success</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our streamlined process ensures smooth and efficient business registration and compliance.
            </p>
          </div>
        </MotionBlock>

        {/* Timeline */}
        <div className="mt-20">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-bedge-blue via-bedge-aqua to-bedge-blue opacity-30" />

              <div className="grid grid-cols-5 gap-8">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <MotionBlock
                      key={step.title}
                      delay={index * 0.1}
                      type="slide"
                      direction={isEven ? "right" : "left"}
                    >
                      <div className="relative">
                        {/* Step Number */}
                        <motion.div
                          className="absolute left-1/2 top-0 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-bedge-blue to-bedge-aqua text-white font-bold text-lg shadow-glow"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {index + 1}
                        </motion.div>

                        {/* Card */}
                        <motion.div
                          className={`mt-16 rounded-2xl border border-bedge-blue/10 bg-white p-6 shadow-premium-lg transition-all duration-300 hover:shadow-premium-xl hover:border-bedge-blue/30 dark:bg-slate-800/50 dark:border-bedge-blue/20 dark:hover:border-bedge-blue/40 ${isEven ? 'text-left' : 'text-right'}`}
                          whileHover={{ y: -8 }}
                        >
                          <div className={`flex items-center gap-3 ${isEven ? '' : 'justify-end'}`}>
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-bedge-ink dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className={`mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 ${isEven ? '' : 'text-right'}`}>
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

          {/* Mobile Timeline */}
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
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-bedge-blue to-bedge-aqua text-white font-bold text-xl shadow-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div className="flex-1 rounded-2xl border border-bedge-blue/10 bg-white p-6 shadow-premium-lg dark:bg-slate-800/50 dark:border-bedge-blue/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-bedge-ink dark:text-white">
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

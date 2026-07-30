"use client";

import { Star, Quote } from "lucide-react";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content: "B EDGE made our company registration process incredibly smooth. Their expertise and attention to detail saved us countless hours. Highly recommended for any business setup needs.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Director, Global Exports",
    content: "Outstanding service for GST compliance and annual filings. The team is professional, responsive, and always available to answer our questions. A true partner in our business growth.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Founder, AgriTech Solutions",
    content: "From registration to ongoing compliance, B EDGE has been exceptional. Their deep knowledge of regulatory requirements and personalized approach sets them apart from other consultants.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.div>
            <h2 className="mt-6 text-4xl font-bold text-bedge-ink sm:text-5xl dark:text-white">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Hear from businesses we&apos;ve helped succeed.
            </p>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.2} type="fade">
          <div className="mt-16 relative">
            {/* Main Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-bedge-blue/10 bg-white p-8 sm:p-12 shadow-premium-xl dark:bg-slate-800/50 dark:border-bedge-blue/20"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 dark:opacity-20">
                <Quote className="h-24 w-24 text-bedge-blue" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-bedge-blue text-bedge-blue" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-bedge-blue to-bedge-aqua text-white text-xl font-bold shadow-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-bedge-ink dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-bedge-blue/20 bg-white text-bedge-blue transition-all duration-300 hover:bg-bedge-blue hover:text-white dark:border-bedge-blue/30 dark:bg-slate-800 dark:text-bedge-aqua dark:hover:bg-bedge-blue dark:hover:text-white"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-bedge-blue dark:bg-bedge-aqua"
                        : "bg-bedge-blue/30 dark:bg-bedge-aqua/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-bedge-blue/20 bg-white text-bedge-blue transition-all duration-300 hover:bg-bedge-blue hover:text-white dark:border-bedge-blue/30 dark:bg-slate-800 dark:text-bedge-aqua dark:hover:bg-bedge-blue dark:hover:text-white"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

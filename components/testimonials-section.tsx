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
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/10" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="text-center">
            <motion.div
              className="mx-auto h-1 w-16 bg-[#c8952b]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">Testimonials</p>
            <h2 className="mt-4 text-4xl font-extrabold text-bedge-ink sm:text-5xl dark:text-white">
              What Our <span className="text-[#c8952b]">Clients Say</span>
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
              className="relative overflow-hidden border border-slate-200 bg-white p-8 shadow-premium-lg sm:p-12 dark:border-white/10 dark:bg-slate-900"
            >
              <div className="absolute top-8 right-8 opacity-10 dark:opacity-20">
                <Quote className="h-24 w-24 text-[#c8952b]" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#c8952b] text-[#c8952b]" />
                ))}
              </div>

              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center bg-bedge-ink text-xl font-extrabold text-[#c8952b] shadow-sm dark:bg-bedge-blue dark:text-white">
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
                className="flex h-12 w-12 items-center justify-center border border-bedge-ink/20 bg-white text-bedge-ink transition-all duration-300 hover:bg-bedge-ink hover:text-white dark:border-white/20 dark:bg-slate-900 dark:text-white"
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
                        ? "w-8 bg-[#c8952b]"
                        : "bg-[#c8952b]/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center border border-bedge-ink/20 bg-white text-bedge-ink transition-all duration-300 hover:bg-bedge-ink hover:text-white dark:border-white/20 dark:bg-slate-900 dark:text-white"
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

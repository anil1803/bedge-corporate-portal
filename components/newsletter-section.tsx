"use client";

import { Mail, Send } from "lucide-react";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-premium py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Mail className="h-4 w-4" />
              <span className="uppercase tracking-wider">Newsletter</span>
            </motion.div>
            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Subscribe to our newsletter for the latest business insights, regulatory updates, and expert tips.
            </p>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.2} type="slide" direction="up">
          <motion.form
            onSubmit={handleSubmit}
            className="mt-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 h-14 rounded-xl border-0 bg-white/10 px-6 text-white placeholder-white/60 backdrop-blur-sm outline-none transition-all duration-300 focus:bg-white/20 focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="h-14 rounded-xl bg-white px-8 font-semibold text-bedge-blue shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Subscribe <Send className="h-4 w-4" />
                  </span>
                )}
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-white/70">
              No spam, unsubscribe anytime. Read our{" "}
              <a href="#" className="underline hover:text-white">
                Privacy Policy
              </a>
            </p>
          </motion.form>
        </MotionBlock>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function BlogHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-orange-50/50 to-amber-50/60" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/50 rounded-full blur-xl animate-float" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl animate-float-delay-1" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-200 to-rose-200 text-orange-800 rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              <span>BJJ Training Tips & Insights</span>
            </div>
          </motion.div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              Level Up Your Game
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice, training techniques, and insights to help you master
            Brazilian Jiu-Jitsu faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

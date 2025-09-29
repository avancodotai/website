"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-orange-50/50 to-amber-50/60" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/50 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl animate-float-delay-1" />
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-amber-200/50 rounded-full blur-xl animate-float-delay-2" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-200 to-rose-200 text-orange-800 rounded-full text-sm font-medium">
              AI-Powered BJJ Training Journal
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900"
          >
            Transform Your BJJ Training Notes Into{" "}
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Turn voice memos, rough notes, and training observations into
            structured, searchable knowledge that accelerates your Brazilian
            Jiu-Jitsu journey.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              className="group px-8 py-4 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              className="px-8 py-4 bg-white text-gray-900 rounded-full border-2 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all"
            >
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-200/60 p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium">Raw Notes</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-4 font-mono text-sm text-gray-600 border border-gray-300/50">
                    <p className="mb-2">today rolled with john</p>
                    <p className="mb-2">he caught me in triangle from guard</p>
                    <p className="mb-2">need to watch posture more</p>
                    <p>tried that sweep from youtube didnt work</p>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-orange-500">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">Enhanced Notes</span>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-4 text-sm space-y-3 border border-emerald-300/60">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Training Partner: John
                      </p>
                      <p className="text-gray-600">6 rounds • 30 minutes</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Key Observations:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 mt-1">
                        <li>Triangle setup from closed guard</li>
                        <li>Posture break leading to submission</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Areas to Improve:
                      </p>
                      <p className="text-gray-600">
                        Maintain upright posture in closed guard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

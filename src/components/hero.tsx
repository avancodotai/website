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
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-orange-200/50 rounded-full blur-xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl animate-float-delay-1"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-1/3 w-24 h-24 bg-amber-200/50 rounded-full blur-xl animate-float-delay-2"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 rounded-full text-sm font-semibold tracking-wide border border-orange-200/60">
              Your Complete BJJ Training Companion
            </span>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mb-8 text-gray-700 max-w-2xl mx-auto"
          >
            <div className="font-serif text-lg">
              <span className="font-semibold text-gray-900">Avanço</span>
              <span className="text-gray-400 mx-2">/ə-ˈvan-so/</span>
              <span className="italic text-gray-500">verb</span>
            </div>
            <div className="text-gray-500 mt-1 text-sm tracking-wide">
              to progress &middot; to advance &middot; to level up your game
            </div>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight"
          >
            Notes That{" "}
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Level You Up
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            AI-enhanced notes, smart flashcards, personalized training plans,
            and progress tracking. Everything you need to master Brazilian
            Jiu-Jitsu, faster.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              className="group px-8 py-4 bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold rounded-full shadow-lg shadow-orange-200/50 hover:shadow-xl hover:shadow-orange-300/50 transition-shadow hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              data-tally-open="wkMzN6"
              data-tally-align-left="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="1000"
              data-tally-form-events-forwarding="1"
            >
              Join Waitlist
              <ArrowRight
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>
            <a
              href="/#features"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-full border border-orange-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50 transition-shadow text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 relative"
        >
          <div className="max-w-5xl mx-auto">
            {/* Glow effect behind card */}
            <div
              className="absolute -inset-4 bg-gradient-to-r from-orange-200/40 via-rose-200/40 to-orange-200/40 rounded-[2rem] blur-2xl"
              aria-hidden="true"
            />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-200/30 border border-orange-200/40 p-6 sm:p-8"
            >
              {/* Card header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-400 ml-2 font-medium">
                  Avanço &mdash; Training Notes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Before */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Raw Notes
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 font-mono text-sm text-gray-500 border border-gray-200/80 leading-relaxed">
                    <p className="mb-2">today rolled with john</p>
                    <p className="mb-2">he caught me in triangle from guard</p>
                    <p className="mb-2">need to watch posture more</p>
                    <p>tried that sweep from youtube didnt work</p>
                  </div>
                </div>

                {/* Arrow indicator between columns */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center shadow-lg shadow-orange-200/50">
                    <ArrowRight
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-orange-500">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Enhanced Notes
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 text-sm space-y-3 border border-emerald-200/80">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Training Partner: John
                      </p>
                      <p className="text-gray-600">
                        6&nbsp;rounds &bull; 30&nbsp;minutes
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Key Observations:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 mt-1 space-y-0.5">
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

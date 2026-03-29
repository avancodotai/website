"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden">
      {/* Gradient orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      {/* Grain overlay */}
      <div
        className="grain absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-orange-400 rounded-full text-xs font-medium tracking-wide uppercase">
              <span
                className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"
                aria-hidden="true"
              />
              Now in Beta
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[0.95]"
          >
            Notes that
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              level you up
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed"
          >
            AI-enhanced notes, smart flashcards, and personalized training
            plans. Everything you need to master BJJ, faster.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-white text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              data-tally-open="wkMzN6"
              data-tally-align-left="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="1000"
              data-tally-form-events-forwarding="1"
            >
              Join the Waitlist
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </button>
            <a
              href="/#features"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-400 border border-white/10 rounded-lg hover:bg-white/5 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual - Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative max-w-4xl">
            {/* Glow behind card */}
            <div
              className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-rose-500/20 to-orange-500/20 rounded-2xl blur-xl"
              aria-hidden="true"
            />

            <div className="relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-neutral-900/80">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <span className="text-[11px] text-neutral-500 ml-2 font-medium">
                  Training Notes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="p-5 sm:p-6 border-b md:border-b-0 md:border-r border-white/5">
                  <div className="flex items-center gap-2 text-neutral-500 mb-3">
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="text-[11px] font-medium uppercase tracking-wider">
                      Raw Notes
                    </span>
                  </div>
                  <div className="font-mono text-sm text-neutral-500 leading-relaxed space-y-1">
                    <p>today rolled with john</p>
                    <p>he caught me in triangle from guard</p>
                    <p>need to watch posture more</p>
                    <p>tried that sweep from youtube didnt work</p>
                  </div>
                </div>

                {/* After */}
                <div className="p-5 sm:p-6 bg-neutral-900/50">
                  <div className="flex items-center gap-2 text-orange-400 mb-3">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="text-[11px] font-medium uppercase tracking-wider">
                      AI Enhanced
                    </span>
                  </div>
                  <div className="text-sm space-y-3">
                    <div>
                      <p className="font-medium text-white">
                        Training Partner: John
                      </p>
                      <p className="text-neutral-500">
                        6&nbsp;rounds &bull; 30&nbsp;min
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Key Takeaways</p>
                      <ul className="text-neutral-400 mt-1 space-y-0.5 text-sm">
                        <li className="flex items-start gap-2">
                          <span
                            className="text-orange-400 mt-1"
                            aria-hidden="true"
                          >
                            &bull;
                          </span>
                          Triangle setup from closed guard
                        </li>
                        <li className="flex items-start gap-2">
                          <span
                            className="text-orange-400 mt-1"
                            aria-hidden="true"
                          >
                            &bull;
                          </span>
                          Posture break leading to submission
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white">Focus Area</p>
                      <p className="text-neutral-400">
                        Maintain posture in closed guard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

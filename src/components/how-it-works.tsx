"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mic, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Record",
    subtitle: "Capture your training",
    description:
      "Voice memo, quick note, or detailed entry \u2014 capture training however works for you.",
    icon: Mic,
  },
  {
    number: "02",
    title: "Enhance",
    subtitle: "AI does the heavy lifting",
    description:
      "Avanço structures your notes, identifies techniques, and adds context automatically.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Level Up",
    subtitle: "Train with purpose",
    description:
      "Flashcards, personalized plans, stats, and drills \u2014 master techniques faster.",
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-neutral-950 relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/5 to-transparent rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-medium text-orange-400 mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Three steps to mastery
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            From mat to mastery in three simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group relative"
              >
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/10 transition-colors h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-neutral-800">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-700"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

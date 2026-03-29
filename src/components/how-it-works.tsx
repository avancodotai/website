"use client";

import { motion } from "framer-motion";
import { Mic, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Record Your Training",
    description:
      "Voice memo, quick note, or detailed entry \u2014 capture training however works for you.",
    icon: Mic,
    color: "from-orange-400 to-amber-400",
  },
  {
    number: "2",
    title: "AI Enhancement",
    description:
      "Avanço structures your notes, identifies techniques, and adds context automatically.",
    icon: Sparkles,
    color: "from-violet-400 to-purple-400",
  },
  {
    number: "3",
    title: "Train & Level Up",
    description:
      "Use flashcards, follow personalized training plans, track stats, and master techniques faster.",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-400",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Simple as 1-2-3
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From mat to mastery in three simple steps
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex gap-5 sm:gap-6 mb-8 last:mb-0"
              >
                {/* Timeline connector */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-14 w-px h-[calc(100%-20px)] bg-gradient-to-b from-gray-200 to-transparent"
                    aria-hidden="true"
                  />
                )}

                {/* Step number */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-md`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-grow bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-1.5 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden sm:flex ml-4 text-gray-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

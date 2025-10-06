"use client";

import { motion } from "framer-motion";
import { Mic, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Record Your Training",
    description:
      "Voice memo, quick note, or detailed entry - capture training however works for you.",
    icon: <Mic className="w-6 h-6" />,
  },
  {
    number: "2",
    title: "AI Enhancement",
    description:
      "Avanço structures your notes, identifies techniques, and adds context automatically.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    number: "3",
    title: "Train & Level Up",
    description:
      "Use flashcards, follow personalized training plans, track stats, and master techniques faster.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 bg-gradient-to-b from-teal-50 via-emerald-50/60 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Simple as 1-2-3
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From mat to mastery in three simple steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-6 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
              <div className="hidden sm:flex items-center text-emerald-500">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

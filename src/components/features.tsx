"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Gamepad2,
  Layers,
  Route,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Enhanced Notes",
    description:
      "Voice or text notes automatically structured and enhanced. Captures techniques, insights, and connections from every session.",
    gradient: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
  },
  {
    icon: Layers,
    title: "Smart Flashcards",
    description:
      "Auto-generated flashcards from your notes. Review techniques, positions, and concepts with spaced repetition.",
    gradient: "from-orange-500 to-amber-500",
    bgLight: "bg-orange-50",
  },
  {
    icon: Route,
    title: "Training Plans",
    description:
      "Personalized training roadmaps based on your goals, gaps, and progress. Know exactly what to focus on next.",
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description:
      "Visualize your growth with detailed stats. Track techniques mastered, mat time, and improvement trends.",
    gradient: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
  },
  {
    icon: Gamepad2,
    title: "Interactive Drills",
    description:
      "Gamified learning experiences and ecological drills. Make technique retention fun and effective.",
    gradient: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50",
  },
  {
    icon: BookOpen,
    title: "Session Reviews",
    description:
      "Revisit past training with AI-powered insights. See patterns, breakthroughs, and areas for improvement.",
    gradient: "from-amber-500 to-yellow-500",
    bgLight: "bg-amber-50",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/40 to-white" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Everything You Need to Level Up
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            From intelligent note-taking to personalized training plans, Avanço
            gives you the complete toolkit for BJJ mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/40 transition-shadow h-full">
                  <div
                    className={`w-11 h-11 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 shadow-sm`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

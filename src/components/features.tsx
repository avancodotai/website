"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Gamepad2,
  Layers,
  Mic,
  Route,
  Search,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Enhanced Notes",
    description:
      "Voice or text notes automatically structured and enhanced. Captures techniques, insights, and connections from every session.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Smart Flashcards",
    description:
      "Auto-generated flashcards from your notes. Review techniques, positions, and concepts with spaced repetition.",
  },
  {
    icon: <Route className="w-6 h-6" />,
    title: "Training Plans",
    description:
      "Personalized training roadmaps based on your goals, gaps, and progress. Know exactly what to focus on next.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progress Analytics",
    description:
      "Visualize your growth with detailed stats. Track techniques mastered, mat time, and improvement trends.",
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Interactive Drills",
    description:
      "Gamified learning experiences and ecological drills. Make technique retention fun and effective.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Session Reviews",
    description:
      "Revisit past training with AI-powered insights. See patterns, breakthroughs, and areas for improvement.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-100/40 to-white" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Everything You Need to Level Up
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From intelligent note-taking to personalized training plans, Avanço
            gives you the complete toolkit for BJJ mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white backdrop-blur-sm rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200/50 hover:border-orange-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-orange-400/90 to-rose-400/90 rounded-2xl flex items-center justify-center text-white mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

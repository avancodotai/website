"use client";

import { motion } from "framer-motion";
import { Brain, Calendar, Gamepad2, Trophy, Users, Zap } from "lucide-react";

const roadmapItems = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Smart Flashcards",
    status: "Coming Soon",
    description: "Review techniques with spaced repetition and visual aids.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Training Plans",
    status: "Coming Soon",
    description: "AI-generated weekly plans based on your progress and goals.",
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Gamified Drills",
    status: "Q1 2026",
    description:
      "Interactive games and ecological drills that make learning techniques fun and memorable.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partner Reviews",
    status: "Q2 2026",
    description: "Exchange feedback with training partners after sessions.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Competition Prep",
    status: "Q2 2026",
    description: "Tournament-specific game plans and mental preparation tools.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Video Analysis",
    status: "Q4 2026",
    description:
      "Connect your notes to training footage for complete analysis.",
  },
];

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-amber-50/50 to-orange-50/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            The Future of BJJ Training
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're just getting started. Here's what's coming next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm rounded-3xl p-6 border border-orange-200/50 hover:border-orange-300 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-rose-400 rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-amber-200 text-amber-800 rounded-full">
                  {feature.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

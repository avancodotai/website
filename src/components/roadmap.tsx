"use client";

import { motion } from "framer-motion";
import { Brain, Calendar, Gamepad2, Trophy, Users, Zap } from "lucide-react";

const statusStyles: Record<string, { bg: string; text: string }> = {
  "Coming Soon": { bg: "bg-emerald-100", text: "text-emerald-700" },
  "Q1 2026": { bg: "bg-blue-100", text: "text-blue-700" },
  "Q2 2026": { bg: "bg-violet-100", text: "text-violet-700" },
  "Q4 2026": { bg: "bg-amber-100", text: "text-amber-700" },
};

const roadmapItems = [
  {
    icon: Zap,
    title: "Smart Flashcards",
    status: "Coming Soon",
    description: "Review techniques with spaced repetition and visual aids.",
  },
  {
    icon: Calendar,
    title: "Training Plans",
    status: "Coming Soon",
    description: "AI-generated weekly plans based on your progress and goals.",
  },
  {
    icon: Gamepad2,
    title: "Gamified Drills",
    status: "Q1 2026",
    description:
      "Interactive games and ecological drills that make learning techniques fun and memorable.",
  },
  {
    icon: Users,
    title: "Partner Reviews",
    status: "Q2 2026",
    description: "Exchange feedback with training partners after sessions.",
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    status: "Q2 2026",
    description: "Tournament-specific game plans and mental preparation tools.",
  },
  {
    icon: Brain,
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
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-orange-50/30 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Roadmap
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            The Future of BJJ Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&rsquo;re just getting started. Here&rsquo;s what&rsquo;s coming
            next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roadmapItems.map((feature, index) => {
            const Icon = feature.icon;
            const style = statusStyles[feature.status] ?? {
              bg: "bg-gray-100",
              text: "text-gray-700",
            };
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/40 transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-rose-400 rounded-xl flex items-center justify-center text-white shadow-sm">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 ${style.bg} ${style.text} rounded-full`}
                  >
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Brain, Calendar, Gamepad2, Trophy, Users, Zap } from "lucide-react";

const statusStyles: Record<string, string> = {
  "Coming Soon": "text-emerald-600 bg-emerald-50",
  "Q1 2026": "text-blue-600 bg-blue-50",
  "Q2 2026": "text-violet-600 bg-violet-50",
  "Q4 2026": "text-amber-600 bg-amber-50",
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
      "Interactive games and ecological drills that make techniques stick.",
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
    description: "Tournament game plans and mental preparation tools.",
  },
  {
    icon: Brain,
    title: "Video Analysis",
    status: "Q4 2026",
    description:
      "Connect notes to training footage for complete technique analysis.",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-medium text-orange-500 mb-3">Roadmap</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            What&rsquo;s coming next
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            We&rsquo;re just getting started. Here&rsquo;s the path ahead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[item.status] ?? "text-neutral-600 bg-neutral-100"}`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

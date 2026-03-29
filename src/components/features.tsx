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
      "Voice or text notes automatically structured and enhanced with BJJ context.",
    span: "md:col-span-2",
  },
  {
    icon: Layers,
    title: "Smart Flashcards",
    description:
      "Auto-generated cards from your notes. Spaced repetition for technique retention.",
    span: "",
  },
  {
    icon: Route,
    title: "Training Plans",
    description:
      "Personalized roadmaps based on your goals, gaps, and progress.",
    span: "",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Track techniques mastered, mat time, and improvement trends.",
    span: "",
  },
  {
    icon: Gamepad2,
    title: "Interactive Drills",
    description:
      "Gamified learning that makes technique retention fun and effective.",
    span: "",
  },
  {
    icon: BookOpen,
    title: "Session Reviews",
    description:
      "AI-powered insights revealing patterns, breakthroughs, and areas for improvement.",
    span: "md:col-span-2",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-medium text-orange-500 mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Everything you need to level up
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            From intelligent note-taking to personalized training plans &mdash;
            the complete toolkit for BJJ mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`group relative bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-colors ${feature.span}`}
              >
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
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

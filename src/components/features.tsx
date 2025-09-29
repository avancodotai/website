"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Mic, Search, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Smart Enhancement",
    description:
      "AI automatically structures your notes, identifies techniques, and creates connections between training sessions.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Instant Search",
    description:
      "Find that specific guard pass from three months ago in seconds. Search by technique, partner, or concept.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progress Tracking",
    description:
      "Visualize your improvement over time. See which techniques you're mastering and where to focus next.",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Voice Notes",
    description:
      "Record thoughts immediately after training. Avanço transcribes and enhances them automatically.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Pattern Recognition",
    description:
      "Discover recurring challenges and breakthrough moments across your training history.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Knowledge Base",
    description:
      "Build your personal BJJ encyclopedia with cross-referenced techniques and concepts.",
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
            Capture Everything, Miss Nothing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're drilling techniques or sparring, Avanço ensures every
            insight is preserved and enhanced.
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

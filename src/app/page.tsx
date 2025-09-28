"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  FileText,
  Menu,
  Mic,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-rose-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
              >
                Avanco
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#roadmap"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Roadmap
              </a>
              <button
                type="button"
                className="px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
              >
                Join Waitlist
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden py-4 border-t border-orange-100"
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-700">
                  How It Works
                </a>
                <a href="#roadmap" className="text-gray-700">
                  Roadmap
                </a>
                <button
                  type="button"
                  className="px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-orange-50/50 to-amber-50/60" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/50 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl animate-float-delay-1" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-amber-200/50 rounded-full blur-xl animate-float-delay-2" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-200 to-rose-200 text-orange-800 rounded-full text-sm font-medium">
                AI-Powered BJJ Training Journal
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900"
            >
              Transform Your BJJ Training Notes Into{" "}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Actionable Insights
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Turn voice memos, rough notes, and training observations into
              structured, searchable knowledge that accelerates your Brazilian
              Jiu-Jitsu journey.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                type="button"
                className="group px-8 py-4 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                className="px-8 py-4 bg-white text-gray-900 rounded-full border-2 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-200/60 p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <FileText className="w-5 h-5" />
                      <span className="text-sm font-medium">Raw Notes</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-4 font-mono text-sm text-gray-600 border border-gray-300/50">
                      <p className="mb-2">today rolled with john</p>
                      <p className="mb-2">
                        he caught me in triangle from guard
                      </p>
                      <p className="mb-2">need to watch posture more</p>
                      <p>tried that sweep from youtube didnt work</p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-orange-500">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Enhanced Notes
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-4 text-sm space-y-3 border border-emerald-300/60">
                      <div>
                        <p className="font-semibold text-gray-900">
                          Training Partner: John
                        </p>
                        <p className="text-gray-600">6 rounds • 30 minutes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Key Observations:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-1">
                          <li>Triangle setup from closed guard</li>
                          <li>Posture break leading to submission</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Areas to Improve:
                        </p>
                        <p className="text-gray-600">
                          Maintain upright posture in closed guard
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 lg:py-32 relative overflow-hidden"
      >
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
              Whether you're drilling techniques or sparring, Avanco ensures
              every insight is preserved and enhanced.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
                  "Record thoughts immediately after training. Avanco transcribes and enhances them automatically.",
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
            ].map((feature, index) => (
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

      {/* How It Works Section */}
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
            {[
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
                  "Avanco structures your notes, identifies techniques, and adds context automatically.",
                icon: <Sparkles className="w-6 h-6" />,
              },
              {
                number: "3",
                title: "Review & Improve",
                description:
                  "Search past sessions, identify patterns, and accelerate your learning curve.",
                icon: <TrendingUp className="w-6 h-6" />,
              },
            ].map((step, index) => (
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

      {/* Roadmap Section */}
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
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Smart Flashcards",
                status: "Q1 2026",
                description:
                  "Review techniques with spaced repetition and visual aids.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Training Plans",
                status: "Q1 2026",
                description:
                  "AI-generated weekly plans based on your progress and goals.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Partner Reviews",
                status: "Q2 2026",
                description:
                  "Exchange feedback with training partners after sessions.",
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "Competition Prep",
                status: "Q2 2026",
                description:
                  "Tournament-specific game plans and mental preparation tools.",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Ecological Training",
                status: "Q2 2026",
                description:
                  "Adaptive training recommendations based on your learning style.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Video Analysis",
                status: "Q4 2026",
                description:
                  "Connect your notes to training footage for complete analysis.",
              },
            ].map((feature, index) => (
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-500" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Level Up Your BJJ Journey?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Join the waitlist and be the first to transform your training with
              Avanco.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Email submitted:", email);
                setEmail("");
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-full bg-white/20 backdrop-blur-lg text-white placeholder-orange-100 border border-white/30 focus:outline-none focus:border-white/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all hover:scale-105"
              >
                Join Waitlist
              </button>
            </form>
            <p className="mt-4 text-sm text-orange-100">
              No credit card required • Early access • Exclusive updates
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-rose-50 to-orange-50 border-t border-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Avanco
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Transform your BJJ journey with AI
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Terms
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-100 text-center text-sm text-gray-600">
            © 2025 Avanco. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

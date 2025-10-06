"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What exactly is Avanço and how does it work?",
    answer:
      "Avanço is your complete BJJ training companion that helps you level up faster. Start by recording voice or text notes after training - our AI automatically structures them, identifies techniques, and creates connections. Then, use smart flashcards for spaced repetition, follow personalized training plans tailored to your goals, track your progress with detailed stats, and engage with gamified drills. It's an all-in-one system designed specifically for BJJ practitioners to accelerate mastery.",
  },
  {
    question: "How is this different from regular note-taking apps?",
    answer:
      "Avanço is a complete training system, not just a note-taking app. While it starts with AI-enhanced notes that understand BJJ context, it goes much further: auto-generated flashcards for technique retention, personalized training plans based on your progress, detailed analytics and stats, ecological games for skill development, and session reviews with AI insights. Everything is connected and designed specifically for martial arts learning.",
  },
  {
    question: "Is my training data private and secure?",
    answer:
      "Absolutely. Your training data is encrypted both in transit and at rest using bank-level security. Only you can access your notes by default, and your personal data is never used to train our AI models. You maintain complete control and can export or delete your data at any time. We understand that your training insights provide competitive advantage and treat them accordingly.",
  },
  {
    question: "How much will Avanço cost?",
    answer:
      "Avanço is currently in beta and free to use for early adopters. We're gathering feedback from the BJJ community to perfect the experience before launching. Pricing will be announced soon, but we're committed to keeping it affordable for individual practitioners while offering special rates for teams and gyms. Join the beta now to lock in exclusive early-bird pricing when we launch!",
  },
  {
    question: "What platforms does Avanço support?",
    answer:
      "Avanço is available as native apps for both iOS and Android devices. Everything syncs seamlessly across all your devices - record notes on your phone at the gym and review them on your tablet at home. The apps work offline too, perfect for capturing notes during tournaments or training camps where connectivity might be limited.",
  },
  {
    question: "Can I record voice notes directly in the app?",
    answer:
      "Yes! Just tap the microphone button and speak naturally about your training - who you rolled with, what worked, what didn't. Avanço instantly transcribes and enhances your voice notes with AI, then automatically generates flashcards from key techniques and updates your training stats. It's the fastest way to capture insights right after rolling when details are fresh.",
  },
  {
    question: "Does it work for both beginners and advanced practitioners?",
    answer:
      "Absolutely! Whether you're a white belt or a black belt, Avanço adapts to your level. Beginners benefit from structured training plans, flashcard reviews of fundamentals, and clear progress tracking. Advanced practitioners can refine subtle details, prepare for competitions, and use ecological games to maintain technique retention. The entire system becomes more personalized as it learns your training style and goals.",
  },
  {
    question: "Can I share my notes with my coach or training partners?",
    answer:
      "Yes, you have complete control over sharing. You can selectively share training notes, progress stats, or training plan goals with your coach or training partners. This is perfect for getting feedback, coordinating training focus, or showing your competition preparation progress. You always maintain control over what you share and with whom.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-orange-50/30 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Avanço
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl border border-orange-200/50 overflow-hidden hover:border-orange-300 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left hover:bg-orange-50/30 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>
                {openItems[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
          >
            Get in Touch
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

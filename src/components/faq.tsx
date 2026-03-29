"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useId, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What exactly is Avanço and how does it work?",
    answer:
      "Avanço is your complete BJJ training companion that helps you level up faster. Start by recording voice or text notes after training \u2014 our AI automatically structures them, identifies techniques, and creates connections. Then, use smart flashcards for spaced repetition, follow personalized training plans tailored to your goals, track your progress with detailed stats, and engage with gamified drills. It\u2019s an all-in-one system designed specifically for BJJ practitioners to accelerate mastery.",
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
      "Avanço is currently in beta and free to use for early adopters. We\u2019re gathering feedback from the BJJ community to perfect the experience before launching. Pricing will be announced soon, but we\u2019re committed to keeping it affordable for individual practitioners while offering special rates for teams and gyms. Join the beta now to lock in exclusive early-bird pricing when we launch!",
  },
  {
    question: "What platforms does Avanço support?",
    answer:
      "Avanço is available as native apps for both iOS and Android devices. Everything syncs seamlessly across all your devices \u2014 record notes on your phone at the gym and review them on your tablet at home. The apps work offline too, perfect for capturing notes during tournaments or training camps where connectivity might be limited.",
  },
  {
    question: "Can I record voice notes directly in the app?",
    answer:
      "Yes! Just tap the microphone button and speak naturally about your training \u2014 who you rolled with, what worked, what didn\u2019t. Avanço instantly transcribes and enhances your voice notes with AI, then automatically generates flashcards from key techniques and updates your training stats. It\u2019s the fastest way to capture insights right after rolling when details are fresh.",
  },
  {
    question: "Does it work for both beginners and advanced practitioners?",
    answer:
      "Absolutely! Whether you\u2019re a white belt or a black belt, Avanço adapts to your level. Beginners benefit from structured training plans, flashcard reviews of fundamentals, and clear progress tracking. Advanced practitioners can refine subtle details, prepare for competitions, and use ecological games to maintain technique retention. The entire system becomes more personalized as it learns your training style and goals.",
  },
  {
    question: "Can I share my notes with my coach or training partners?",
    answer:
      "Yes, you have complete control over sharing. You can selectively share training notes, progress stats, or training plan goals with your coach or training partners. This is perfect for getting feedback, coordinating training focus, or showing your competition preparation progress. You always maintain control over what you share and with whom.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const id = useId();

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Avanço
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openItems[index] ?? false;
            const triggerId = `${id}-trigger-${index}`;
            const panelId = `${id}-panel-${index}`;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-orange-200 transition-colors shadow-sm">
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-6 py-5 text-left hover:bg-orange-50/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange-400 focus-visible:rounded-2xl"
                  >
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="font-semibold text-gray-900">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400 flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5" aria-hidden="true" />
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.section
                        id={panelId}
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-200/50 transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

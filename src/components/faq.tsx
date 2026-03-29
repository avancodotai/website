"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What exactly is Avanço?",
    answer:
      "Avanço is your complete BJJ training companion. Record voice or text notes after training \u2014 our AI structures them, identifies techniques, and creates connections. Then use smart flashcards, personalized training plans, detailed stats, and gamified drills to accelerate your progress.",
  },
  {
    question: "How is this different from regular note-taking apps?",
    answer:
      "Avanço is a complete training system, not just notes. It understands BJJ context and generates flashcards, training plans, analytics, and interactive drills \u2014 all connected and designed specifically for martial arts learning.",
  },
  {
    question: "Is my training data private?",
    answer:
      "Your data is encrypted in transit and at rest. Only you can access your notes, and your data is never used to train AI models. You can export or delete everything at any time.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Avanço is currently in beta and free for early adopters. Join now to lock in exclusive early-bird pricing when we launch.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "Native apps for iOS and Android with seamless sync across devices. Works offline too \u2014 perfect for capturing notes at tournaments or training camps.",
  },
  {
    question: "Can I record voice notes?",
    answer:
      "Yes. Tap the mic and speak naturally about your training. Avanço transcribes, enhances, and generates flashcards automatically \u2014 the fastest way to capture insights while they\u2019re fresh.",
  },
  {
    question: "Does it work for all skill levels?",
    answer:
      "From white belt to black belt. Beginners get structured plans and fundamentals review. Advanced practitioners can refine details, prep for competition, and track subtle progress. The system adapts to your level.",
  },
  {
    question: "Can I share notes with my coach?",
    answer:
      "Yes. Selectively share notes, stats, or training goals with your coach or training partners. You always control what you share and with whom.",
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
    <section id="faq" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-medium text-orange-500 mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openItems[index] ?? false;
            const triggerId = `${id}-trigger-${index}`;
            const panelId = `${id}-panel-${index}`;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="bg-white rounded-xl border border-neutral-200/60 overflow-hidden">
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-5 py-4 text-left hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange-400 focus-visible:rounded-xl"
                  >
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-sm font-medium text-neutral-900">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-neutral-400 flex-shrink-0"
                      >
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
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
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm text-neutral-500 leading-relaxed">
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
      </div>
    </section>
  );
}

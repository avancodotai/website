"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
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
            Avanço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
            <button
              type="button"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all hover:scale-105"
              data-tally-open="wkMzN6"
              data-tally-align-left="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="7000"
              data-tally-form-events-forwarding="1"
            >
              Join Waitlist
            </button>
          </div>
          <p className="mt-4 text-sm text-orange-100">
            No credit card required • Early access • Exclusive updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}

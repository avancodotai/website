"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-rose-500 to-orange-600" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Glow accents */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Ready to Level Up Your BJJ Journey?
          </h2>
          <p className="text-xl mb-10 text-white/80 max-w-xl mx-auto">
            Join the waitlist and be the first to transform your training with
            Avanço.
          </p>
          <button
            type="button"
            className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 shadow-xl shadow-black/10 hover:shadow-2xl transition-shadow hover:scale-105 active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            data-tally-open="wkMzN6"
            data-tally-align-left="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            data-tally-auto-close="1000"
            data-tally-form-events-forwarding="1"
          >
            Join Waitlist
          </button>
          <p className="mt-6 text-sm text-white/60">
            No credit card required &bull; Early access &bull; Exclusive updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}

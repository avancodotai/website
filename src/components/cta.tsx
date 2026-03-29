"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          {/* Gradient orbs */}
          <div
            className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[100px]"
            aria-hidden="true"
          />

          {/* Grain overlay */}
          <div
            className="grain absolute inset-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto">
              Ready to level up your BJJ?
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-lg mx-auto">
              Join the waitlist and be first to transform your training with
              Avanço.
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-white text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                data-tally-open="wkMzN6"
                data-tally-align-left="1"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                data-tally-auto-close="1000"
                data-tally-form-events-forwarding="1"
              >
                Join the Waitlist
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </button>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              Free during beta &bull; No credit card required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

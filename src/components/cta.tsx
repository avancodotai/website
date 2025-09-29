"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");

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
  );
}

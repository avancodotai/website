"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-orange-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
            >
              Avanço
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
            <a
              href="#faq"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              FAQ
            </a>
            <button
              type="button"
              className="px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
              data-tally-open="wkMzN6"
              data-tally-align-left="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="7000"
              data-tally-form-events-forwarding="1"
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
              <a href="#faq" className="text-gray-700">
                FAQ
              </a>
              <button
                type="button"
                className="px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full"
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
          </motion.nav>
        )}
      </div>
    </header>
  );
}

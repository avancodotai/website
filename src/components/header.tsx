"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-orange-100/50 shadow-sm shadow-orange-100/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
              >
                Avanço
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            <a
              href="/#features"
              className="font-semibold text-gray-900 hover:text-orange-500 transition-colors rounded-md px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="font-semibold text-gray-900 hover:text-orange-500 transition-colors rounded-md px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              How It Works
            </a>
            <a
              href="/#roadmap"
              className="font-semibold text-gray-900 hover:text-orange-500 transition-colors rounded-md px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Roadmap
            </a>
            <a
              href="/blog"
              className="font-semibold text-orange-600 hover:text-orange-500 transition-colors rounded-md px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Blog
            </a>
            <button
              type="button"
              className="px-5 py-2.5 font-semibold bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full hover:shadow-lg hover:shadow-orange-200/50 transition-shadow hover:scale-105 active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              data-tally-open="wkMzN6"
              data-tally-align-left="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="1000"
              data-tally-form-events-forwarding="1"
            >
              Join Waitlist
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-orange-100"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-1 py-4">
                <a
                  href="/#features"
                  className="font-semibold text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-lg px-3 py-2.5 transition-colors"
                >
                  Features
                </a>
                <a
                  href="/#how-it-works"
                  className="font-semibold text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-lg px-3 py-2.5 transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="/#roadmap"
                  className="font-semibold text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-lg px-3 py-2.5 transition-colors"
                >
                  Roadmap
                </a>
                <a
                  href="/blog"
                  className="font-semibold text-orange-600 hover:bg-orange-50 rounded-lg px-3 py-2.5 transition-colors"
                >
                  Blog
                </a>
                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full px-5 py-2.5 font-semibold bg-gradient-to-r from-orange-400 to-rose-400 text-white rounded-full hover:shadow-lg transition-shadow"
                    data-tally-open="wkMzN6"
                    data-tally-align-left="1"
                    data-tally-emoji-text="👋"
                    data-tally-emoji-animation="wave"
                    data-tally-auto-close="1000"
                    data-tally-form-events-forwarding="1"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

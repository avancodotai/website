"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
          >
            <span className="text-xl font-bold text-white tracking-tight">
              Avanço
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {[
              { href: "/#features", label: "Features" },
              { href: "/#how-it-works", label: "How It Works" },
              { href: "/#roadmap", label: "Roadmap" },
              { href: "/blog", label: "Blog" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors px-3 py-2 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="ml-4 px-4 py-2 text-sm font-medium bg-white text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
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
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
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
              className="md:hidden overflow-hidden border-t border-white/10"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 py-4">
                {[
                  { href: "/#features", label: "Features" },
                  { href: "/#how-it-works", label: "How It Works" },
                  { href: "/#roadmap", label: "Roadmap" },
                  { href: "/blog", label: "Blog" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full px-4 py-2.5 text-sm font-medium bg-white text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors"
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

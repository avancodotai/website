import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              <span className="text-xl font-bold text-white tracking-tight">
                Avanço
              </span>
            </Link>
            <p className="mt-1 text-sm text-neutral-500">
              Transform your BJJ journey with AI
            </p>
          </div>
          <nav className="flex gap-8" aria-label="Footer navigation">
            <a
              href="/privacy"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-neutral-600">
          &copy; 2026 Avanço. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Avanço
              </div>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Transform your BJJ journey with AI
            </p>
          </div>
          <nav className="flex space-x-8" aria-label="Footer navigation">
            <a
              href="/privacy"
              className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          &copy; 2026 Avanço. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

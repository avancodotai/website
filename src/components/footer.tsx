export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-rose-50 to-orange-50 border-t border-orange-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              Avanço
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Transform your BJJ journey with AI
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-orange-100 text-center text-sm text-gray-600">
          © 2025 Avanço. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

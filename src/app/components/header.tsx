import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ backgroundColor: "var(--brand)" }}
            >
              <span className="text-lg font-bold text-white">
                W
              </span>
            </div>
            <span className="text-xl font-semibold">
              Wisdom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-sm hover:text-[var(--brand)] transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("why-wisdom")}
              className="text-sm hover:text-[var(--brand)] transition-colors"
            >
              Why Wisdom
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-[var(--brand)] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-[var(--brand)] transition-colors"
            >
              Contact
            </button>
            <a
              href="https://wa.me/+918369183414?text=Hi%20I%20am%20interested%20in%20Wisdom%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-2 text-sm text-white transition-colors"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("courses")}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("why-wisdom")}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Why Wisdom
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact
            </button>
            <a
              href="https://wa.me/+918369183414?text=Hi%20I%20am%20interested%20in%20Wisdom%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg px-4 py-2 text-white transition-colors"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
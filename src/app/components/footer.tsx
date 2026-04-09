import { Link } from "react-router";
import {
  Mail,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2"
            >
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
            <p className="text-sm text-gray-600">
              An initiative by Vynox
            </p>
            <p className="text-sm text-gray-600">
              Practical programming courses designed to help you
              build real projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-sm text-gray-600 hover:text-[var(--brand)] transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-wisdom")}
                  className="text-sm text-gray-600 hover:text-[var(--brand)] transition-colors"
                >
                  Why Wisdom
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-gray-600 hover:text-[var(--brand)] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-gray-600 hover:text-[var(--brand)] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/course/react-bootcamp"
                  className="text-sm text-gray-600 hover:text-[var(--brand)] transition-colors"
                >
                  React Bootcamp
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Java Programming (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Full Stack Development (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:devenbofficial@gmail.com"
                className="text-gray-600 hover:text-[var(--brand)] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.instagram.com/wisdom_vynox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--brand)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              {/* <a
                href="https://linkedin.com/company/wisdom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--brand)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a> */}
              <a
                href="https://github.com/Deven-Bagade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--brand)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © 2026 Wisdom by Vynox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
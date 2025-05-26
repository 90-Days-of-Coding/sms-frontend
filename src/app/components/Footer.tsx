// components/Footer.tsx
// i will edit this  later

import { FaTwitter, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-12 transition-colors duration-300 w-full absolute bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
              Made with <FaHeart className="mx-1 text-red-500" /> by your team
            </p>
          </div>

          {/* Middle section - Optional links */}
          <div className="hidden lg:flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Right section - Social icons */}
          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile links */}
        <div className="lg:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

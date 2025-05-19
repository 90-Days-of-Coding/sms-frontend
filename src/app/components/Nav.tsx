// components/Nav.tsx
// i will edit this nav later
"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll effect for fixed nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm"
          : "bg-white dark:bg-gray-900 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Logo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <FaTimes size={24} className="transition-transform" />
          ) : (
            <FaBars size={24} className="transition-transform" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:hidden transition-all duration-300 ease-in-out ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            <a
              href="#"
              className="py-2 text-gray-800 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 text-gray-800 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-700"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 text-gray-800 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

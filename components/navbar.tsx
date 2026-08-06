"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" }
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    window.addEventListener("scroll", handleScroll);
    handleDarkMode();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95"
          : "border-b border-slate-100 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-9 text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-bedge-ink dark:text-white"
                    : "text-slate-700 hover:text-bedge-blue dark:text-slate-300 dark:hover:text-bedge-aqua"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-6 left-0 h-0.5 bg-[#c8952b] transition-all ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="text-slate-700 hover:text-bedge-blue dark:text-slate-300 dark:hover:text-bedge-aqua"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            asChild
            className="h-11 bg-bedge-ink px-6 text-sm font-bold uppercase tracking-wide text-white shadow-premium hover:bg-bedge-blue"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="text-slate-700 dark:text-slate-300"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open navigation"
            className="text-slate-700 dark:text-slate-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/20 bg-white/95 backdrop-blur-xl dark:bg-slate-900/95 dark:border-white/10 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
              <div className="grid gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-lg font-medium text-slate-700 transition-colors hover:bg-bedge-blue/5 hover:text-bedge-blue dark:text-slate-300 dark:hover:bg-bedge-blue/10 dark:hover:text-bedge-aqua"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 w-full btn-premium h-12 shadow-premium bg-gradient-premium hover:opacity-90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

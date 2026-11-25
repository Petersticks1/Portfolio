import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import {
  applyMetaScheme,
  getStoredScheme,
  toggleColorScheme,
} from "../utils/theme";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 180;
      let current = "";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "color-scheme") {
        applyMetaScheme(getStoredScheme() ?? "light dark");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (!getStoredScheme()) {
        applyMetaScheme("light dark");
      }
    };

    window.addEventListener("storage", handleStorage);
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => {
      window.removeEventListener("storage", handleStorage);
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const scrollToSection = (id, offset = 88) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const handleThemeToggle = () => {
    toggleColorScheme();
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 border-b border-[var(--border-subtle)] bg-[var(--nav-bg)] backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[var(--border-subtle)] shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img src="/V.png" alt="Adebayo Peter logo" className="w-6 h-6 object-contain" />
          </div>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[var(--text-primary)]">
            Peter<span className="text-[var(--text-muted)]">.</span>
          </span>
        </a>

        {/* Desktop & Tablet Links */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/70 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <NavLink
                key={item.id}
                to={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`relative px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[var(--accent-fg)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[var(--accent)] -z-10"
                  />
                )}
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* Right Controls: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={handleThemeToggle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Toggle color theme"
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors duration-200 shadow-sm"
          >
            <span className="theme-icon-light items-center justify-center">
              <Moon className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Switch to dark mode</span>
            </span>
            <span className="theme-icon-dark items-center justify-center">
              <Sun className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Switch to light mode</span>
            </span>
          </motion.button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mx-4 mt-3 p-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/95 backdrop-blur-md shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <NavLink
                    to={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      activeSection === item.id
                        ? "bg-[var(--accent)] text-[var(--accent-fg)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;

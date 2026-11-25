import {
  ChevronsUp,
  Instagram,
  Twitter,
  Linkedin,
  Copyright,
} from "lucide-react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
        >
          <ChevronsUp className="w-4 h-4" />
          Back to top
        </motion.button>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/psticks__/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-pink-500 hover:border-[var(--border-strong)] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/Petersticks1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-sky-500 hover:border-[var(--border-strong)] transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="http://www.linkedin.com/in/adebayo-peter-390074319"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-blue-600 hover:border-[var(--border-strong)] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/2348139084131"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-emerald-500 hover:border-[var(--border-strong)] transition-colors"
          >
            <Icon icon="mdi:whatsapp" className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]">
          <Copyright className="w-3.5 h-3.5" />
          <span>Adebayo Peter {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

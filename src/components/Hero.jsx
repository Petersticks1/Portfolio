import { useState } from "react";
import {
  AtSign,
  Github,
  Linkedin,
  Download,
  ArrowDownRight,
  Pause,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, scaleIn } from "./Motion";

const MARQUEE_ITEMS = [
  "React",
  "Next.js",
  "React Native",
  "JavaScript",
  "Tailwind CSS",
  "Expo",
  "Redux",
  "Sass",
  "Jest",
  "Git",
];

function Hero() {
  const [marqueePaused, setMarqueePaused] = useState(false);

  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const el = document.getElementById("portfolio");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-24 pb-10 sm:pt-28 md:pt-32 lg:pt-36 md:pb-16 overflow-x-clip">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer(0.09, 0.05)}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-[var(--text-secondary)] mb-5 sm:mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for projects &amp; collaborations
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg md:text-2xl font-semibold text-[var(--text-secondary)] mb-1.5 sm:mb-2"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.06]"
            >
              Peter  Adebayo
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl font-medium text-[var(--text-secondary)] max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Frontend Web Developer &amp; Mobile Application Developer crafting
              fast, responsive interfaces with{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                React, Next.js
              </span>{" "}
              &amp;{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                React Native
              </span>
              .
            </motion.p>

            {/* Primary & Secondary Actions */}
            <motion.div
              variants={staggerItem}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto lg:mx-0"
            >
              <motion.a
                href="/Peter-updated-Resume-New.New.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--accent-fg)] font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#portfolio"
                onClick={scrollToPortfolio}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--border-strong)] transition-colors"
              >
                View Projects
                <ArrowDownRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="mt-8 sm:mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                Connect with me
              </span>
              <span
                className="h-px w-6 bg-[var(--border-subtle)]"
                aria-hidden="true"
              />
              <div className="flex items-center gap-3">
                <motion.a
                  href="mailto:adebayopetergvmc68@gmail.com"
                  aria-label="Send email"
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors shadow-sm"
                >
                  <AtSign className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/Petersticks1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors shadow-sm"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="http://www.linkedin.com/in/adebayo-peter-390074319"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            variants={scaleIn(0.2)}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-sm lg:max-w-md">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[#0a0a0a] p-2.5 sm:p-3 shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="/My-picture.png"
                    alt="Adebayo Peter"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="hidden sm:flex absolute bottom-4 left-4 right-4 items-center justify-between gap-2 px-4 py-3 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white">
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-neutral-300 font-medium">
                        Core Stack
                      </p>
                      <p className="text-xs sm:text-sm font-semibold truncate">
                        React • Next.js • React Native
                      </p>
                    </div>
                    <span className="shrink-0 px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full bg-white text-black">
                      Web &amp; Mobile
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Marquee Strip */}
        <div className="mt-16 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMarqueePaused((p) => !p)}
            aria-label={marqueePaused ? "Play tech marquee" : "Pause tech marquee"}
            className="shrink-0 p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {marqueePaused ? (
              <Play className="w-3.5 h-3.5" />
            ) : (
              <Pause className="w-3.5 h-3.5" />
            )}
          </button>

          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div
              className="marquee-track gap-8"
              data-paused={marqueePaused ? "true" : "false"}
            >
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((tech, idx) => (
                <span
                  key={`${tech}-${idx}`}
                  className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-[var(--text-secondary)] whitespace-nowrap"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"
                    aria-hidden="true"
                  />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

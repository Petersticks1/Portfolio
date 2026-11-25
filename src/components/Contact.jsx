import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "./Motion";

const EMAIL = "adebayopetergvmc68@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permission is unavailable
    }
  };

  return (
    <section
      className="w-full py-14 sm:py-20 px-4 sm:px-6 border-t border-[var(--border-subtle)]"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--border-subtle)] bg-[#0a0a0a] text-white p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/10 text-xs font-bold tracking-widest uppercase text-neutral-200 mb-4 sm:mb-5">
                <Mail className="w-3.5 h-3.5" />
                Get in touch
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Let’s work together on your next project
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
                Have a web or mobile product in mind? Let’s build something
                fast, intuitive, and memorable together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors shadow-lg w-full sm:w-auto"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                type="button"
                onClick={handleCopyEmail}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

import { motion } from "framer-motion";
import { Palette, Code2, Wrench } from "lucide-react";
import { fadeIn, staggerContainer, staggerItem } from "./Motion";

const SERVICES = [
  {
    title: "Design",
    description:
      "I design clean, user-centered interfaces tailored to your product goals, either from scratch through collaborative discovery or by refining your existing concepts.",
    icon: Palette,
  },
  {
    title: "Development",
    description:
      "I engineer responsive, accessible, and high-performance web and cross-platform mobile applications with modern frameworks like React, Next.js, and React Native.",
    icon: Code2,
  },
  {
    title: "Maintenance",
    description:
      "I debug, optimize, and scale existing codebases by introducing new features, improving performance, and keeping your product reliable as it grows.",
    icon: Wrench,
  },
];

function About() {
  return (
    <section className="w-full py-14 sm:py-20 md:py-24 px-4 sm:px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)] mb-4">
            About Me
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Bridging design &amp; engineering
          </h2>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            I am{" "}
            <span className="font-semibold text-[var(--text-primary)]">
              Adebayo Peter Oluwagbemileke
            </span>
            , a frontend and mobile application developer experienced in
            building responsive web applications with HTML, CSS, Sass,
            Bootstrap, Tailwind CSS, JavaScript, React, and Next.js, alongside
            cross-platform mobile apps using React Native and Expo. I focus on
            writing maintainable code, debugging complex issues, and delivering
            intuitive digital products.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group p-5 sm:p-6 lg:p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-strong)] transition-all duration-300 shadow-sm text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default About;

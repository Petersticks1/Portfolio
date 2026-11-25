import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeIn, staggerContainer, staggerItem } from "./Motion";

const SKILLS = [
  { name: "HTML5", img: "/html.png" },
  { name: "CSS3", img: "/Css.png" },
  { name: "Sass", img: "/Sass.png" },
  { name: "JavaScript", img: "/Js.png" },
  { name: "React", img: "/React.png" },
  { name: "Next.js", iconify: "simple-icons:nextdotjs" },
  { name: "Tailwind CSS", img: "/pngwing.com.png" },
  { name: "React Native", img: "/pngwing.com (1).png" },
  { name: "Expo", iconify: "simple-icons:expo" },
  { name: "Redux", img: "/Redux.png" },
  { name: "Bootstrap", img: "/Boostrap.png" },
  { name: "Jest", img: "/Jest.png" },
  { name: "Git", img: "/Git.png" },
];

function Skills() {
  return (
    <section
      className="w-full py-14 sm:py-20 px-4 sm:px-6 border-t border-[var(--border-subtle)]"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)] mb-4">
            Tech Stack
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Skills &amp; Tools
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--text-secondary)]">
            Technologies I use to build modern web platforms and mobile
            applications.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.05, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-strong)] transition-colors duration-200 shadow-sm text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--bg-surface)] p-2.5 transition-transform duration-300 group-hover:scale-110">
                {skill.iconify ? (
                  <Icon
                    icon={skill.iconify}
                    className="w-9 h-9 text-[var(--text-primary)]"
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                )}
              </div>
              <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

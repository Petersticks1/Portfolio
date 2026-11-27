import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  Smartphone,
  Globe,
  Clock,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeIn } from "./Motion";

const PROJECTS = [
  {
    id: "estodus",
    title: "Estodus Securelift",
    category: "mobile",
    description:
      "Estodus Securelift connects families with trusted, vetted drivers within their local community to provide reliable school-run transportation, supported by technology, identity verification, and clear accountability.",
    image: "/Estodus.jpg",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.estodusmobile&pcampaignid=web_share",
    iosUrl: "https://apps.apple.com/ng/app/estodus-securelift/id6760354311",
  },
  {
    id: "requestatask",
    title: "RequestATask",
    category: "mobile",
    description:
      "RequestATask connects people who need tasks completed with people ready to offer their skills and services.",
    image: "/RequestATask.jpg",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.requestatask.app",
    iosUrl: "https://apps.apple.com/ng/app/requestatask/id6822807963",
  },
  {
    id: "fittingz",
    title: "Fittingz Mobile App",
    category: "mobile",
    description:
      "A comprehensive platform designed for fashion designers and tailors to manage client records, track measurements, and organize incoming orders.",
    image: "/Fittingz.png",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.psticks.fittingz",
    iosUrl: "https://apps.apple.com/ng/app/fittingz/id6764613198",
  },
  {
    id: "slotfinance",
    title: "SlotFinance Mobile App",
    category: "mobile",
    description:
      "A digital money club for trusted friends. It is a modern twist on the traditional Ajo system to save, rotate funds, and receive payouts on your own terms.",
    image: "/slot.png",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.slotmobile",
    iosUrl: "https://apps.apple.com/us/app/slotfinance/id6757859877",
  },

  {
    id: "shelf21",
    title: "Shelf21 Mobile App",
    category: "mobile",
    description:
      "A school management system that empowers schools, engages students, and enhances communication between guardians, wards, and administrators.",
    image: "/shelf21.png",
    androidUrl:
      "https://play.google.com/store/search?q=Shelf21&c=apps",
    iosUrl: "https://apps.apple.com/us/app/shelf21/id6758019424",
  },
  {
    id: "tender-pay",
    title: "TenderPay Mobile App",
    category: "mobile",
    description:
      "A fintech mobile application for purchasing airtime and data plans, paying utility bills, and trading crypto and gift cards seamlessly.",
    image: "/Tender.png",
    androidUrl:
      "https://play.google.com/store/apps/details?id=co.tenderpay.mobile",
    iosUrl: null,
  },

  {
    id: "syncbusiness",
    title: "SyncBusiness",
    category: "web",
    description:
      "An e-commerce platform enabling online sellers to own a storefront with an admin dashboard and select from customizable templates.",
    image: "/SyncBusiness.jpg",
    liveUrl: "https://sync.business/",
    domain: "sync.business",
    extraLinks: [
      { label: "Templates", url: "https://sync.business/templates" },
    ],
  },
  {
    id: "erihairmpire",
    title: "Erihairmpire",
    category: "web",
    description:
      "An e-commerce storefront built for Erihairmpire using a custom SyncBusiness template, featuring product browsing, cart management, and online checkout.",
    image: "/Erihairmpire.jpg",
    liveUrl: "https://erihairmpire.com.ng/",
    domain: "erihairmpire.com.ng",
  },
  {
    id: "biscentful",
    title: "Biscentful",
    category: "web",
    description:
      "An e-commerce storefront built for Biscentful using a custom SyncBusiness template, tailored for seamless fragrance shopping and order management.",
    image: "/Biscentful.jpg",
    liveUrl: "https://biscentful.com.ng/",
    domain: "biscentful.com.ng",
  },
  {
    id: "bellstech",
    title: "Bellstech",
    category: "web",
    description:
      "Bellstech (Bells Technology Multiconcept) is your premier destination for gadget sales, professional repairs, and innovative tech solutions.",
    image: "/Bellstech.jpg",
    liveUrl: "https://bellsmulticoncept.com/shop",
    domain: "bellsmulticoncept.com/shop",
  },
  // {
  //   id: "recipe-app",
  //   title: "Recipe App",
  //   category: "web",
  //   description:
  //     "A user-friendly platform designed to help home cooks and chefs discover, organize, and share their favorite recipes and culinary ideas.",
  //   image: "/RecipeApp.png",
  //   liveUrl: "https://recipe-web-app-taupe.vercel.app/",
  // },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    category: "web",
    description:
      "An intuitive web-based operations interface built to help administrators manage, monitor, and optimize business metrics and workflows.",
    image: "/Admin-dashboard.png",
    liveUrl: "https://admin-dashboard-psticks.vercel.app/",
  },
  // {
  //   id: "calculator-app",
  //   title: "Calculator App",
  //   category: "web",
  //   description:
  //     "A clean, responsive calculator built to handle everyday arithmetic and scientific calculations with instant visual feedback.",
  //   image: "/Calculator.png",
  //   liveUrl: "https://calculator-delta-liart-78.vercel.app/",
  // },
  // {
  //   id: "todo-app",
  //   title: "To-Do List App",
  //   category: "web",
  //   description:
  //     "A focused productivity tool designed to help users organize, prioritize, and complete daily tasks across work and study.",
  //   image: "/Todolist.png",
  //   liveUrl: "https://to-do-list-eight-delta-57.vercel.app/",
  // },
  {
    id: "weather-app",
    title: "Weather App",
    category: "web",
    description:
      "A real-time weather forecast application delivering current conditions and upcoming outlooks in a crisp, readable layout.",
    image: "/WeatherApp.png",
    liveUrl: "https://weather-web-app-alpha-seven.vercel.app/",
  },
  // {
  //   id: "blog-preview",
  //   title: "Blog Preview",
  //   category: "web",
  //   description:
  //     "A clean editorial card interface for showcasing and previewing blog articles with essential metadata and typography.",
  //   image: "/Blog.png",
  //   liveUrl: "https://blog-preview-card-three.vercel.app/",
  // },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Projects" },
  { id: "mobile", label: "Mobile Projects" },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [previewIndex, setPreviewIndex] = useState(null);
  const dialogRef = useRef(null);

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeTab);

  const imageProjects = filteredProjects.filter((project) =>
    Boolean(project.image)
  );

  const previewProject =
    previewIndex !== null ? imageProjects[previewIndex] ?? null : null;

  const openPreview = (projectId) => {
    const idx = imageProjects.findIndex((p) => p.id === projectId);
    if (idx === -1) return;
    setPreviewIndex(idx);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closePreview = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
    setPreviewIndex(null);
  };

  const showPrev = () => {
    setPreviewIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + imageProjects.length) % imageProjects.length
    );
  };

  const showNext = () => {
    setPreviewIndex((prev) =>
      prev === null ? 0 : (prev + 1) % imageProjects.length
    );
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = "";
      setPreviewIndex(null);
    };

    dialog.addEventListener("close", handleClose);

    let cleanupOutside = () => { };
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const outside = (e) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };
      let pressedOutside = false;
      const onPointerDown = (e) => {
        pressedOutside = outside(e);
      };
      const onPointerUp = (e) => {
        if (pressedOutside && outside(e)) {
          dialog.close();
        }
      };
      dialog.addEventListener("pointerdown", onPointerDown);
      dialog.addEventListener("pointerup", onPointerUp);
      cleanupOutside = () => {
        dialog.removeEventListener("pointerdown", onPointerDown);
        dialog.removeEventListener("pointerup", onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener("close", handleClose);
      cleanupOutside();
    };
  }, []);

  const handleDialogKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      showPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      showNext();
    }
  };

  return (
    <section
      className="w-full py-14 sm:py-20 px-4 sm:px-6 border-t border-[var(--border-subtle)]"
      id="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)] mb-4">
              Portfolio
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Recent Works
            </h2>
          </div>

          {/* Filter Tabs with sliding pill */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="grid grid-cols-3 sm:inline-flex w-full sm:w-auto gap-1 p-1.5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] self-start md:self-auto"
          >
            {FILTERS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-200 z-10 text-center whitespace-nowrap ${isSelected
                    ? "text-[var(--accent-fg)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="portfolioFilterPill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-xl bg-[var(--accent)] -z-10"
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-strong)] p-5 sm:p-6 lg:p-8 shadow-sm transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-semibold text-[var(--text-secondary)]">
                      {project.category === "mobile" ? (
                        <Smartphone className="w-3.5 h-3.5" />
                      ) : (
                        <Globe className="w-3.5 h-3.5" />
                      )}
                      {project.category === "mobile" ? "Mobile App" : "Web App"}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Action Links */}
                  {project.category === "mobile" ? (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <a
                        href={project.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[var(--accent)] text-[var(--accent-fg)] text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity"
                      >
                        <Icon
                          icon="logos:google-play-icon"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          aria-hidden="true"
                        />
                        <span>Android</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      {project.iosUrl ? (
                        <a
                          href={project.iosUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs sm:text-sm font-bold hover:border-[var(--border-strong)] transition-colors"
                        >
                          <Icon
                            icon="mdi:apple"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            aria-hidden="true"
                          />
                          <span>iOS</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)] text-xs sm:text-sm font-semibold cursor-default">
                          <Clock className="w-3.5 h-3.5" />
                          <span>iOS Soon</span>
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="mb-6 flex flex-wrap items-center gap-2.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-fg)] text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      {project.extraLinks?.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold hover:border-[var(--border-strong)] transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Project Preview Image */}
                  {project.image ? (
                    <button
                      type="button"
                      onClick={() => openPreview(project.id)}
                      aria-label={`Preview ${project.title} screenshot`}
                      className="relative block w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] aspect-[16/10] cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 text-white text-xs font-semibold backdrop-blur-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                        <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                        Preview
                      </span>
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] aspect-[16/10] p-6 text-center hover:border-[var(--border-strong)] transition-colors"
                    >
                      <Globe className="w-8 h-8 text-[var(--text-secondary)]" />
                      <span className="font-display text-lg font-bold text-[var(--text-primary)]">
                        {project.title}
                      </span>
                      <span className="text-xs font-medium text-[var(--text-muted)]">
                        {project.domain}
                      </span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Native Modal Lightbox for Project Image Previews */}
      <dialog
        ref={dialogRef}
        {...{ closedby: "any" }}
        aria-labelledby="preview-dialog-title"
        onKeyDown={handleDialogKeyDown}
        className="m-auto w-[min(94vw,64rem)] max-h-[90vh] rounded-2xl sm:rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] p-0 shadow-2xl overflow-hidden"
      >
        {previewProject && (
          <div className="flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[var(--border-subtle)]">
              <div className="min-w-0">
                <h1
                  id="preview-dialog-title"
                  className="font-display text-base sm:text-lg font-bold truncate text-[var(--text-primary)]"
                >
                  {previewProject.title}
                </h1>
                <p className="text-xs text-[var(--text-muted)]">
                  {previewIndex + 1} of {imageProjects.length}
                </p>
              </div>
              <button
                type="button"
                autoFocus
                onClick={closePreview}
                aria-label="Close preview"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative flex-1 bg-black/95 flex items-center justify-center p-3 sm:p-6 overflow-auto">
              <img
                src={previewProject.image}
                alt={`${previewProject.title} full preview`}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {imageProjects.length > 1 && (
              <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <button
                  type="button"
                  onClick={showPrev}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}

export default Portfolio;

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { AppLink } from "../../../components/ui/AppLink";

const sidebarFeatures = [
  { name: "Testimonials Carousel C..." },
  { name: "Contact form two-col..." },
  { name: "Create a clean, modern h...", current: true },
  { name: "Image gallery for project..." },
];

const boardColumns = [
  {
    title: "Pending",
    count: 3,
    cards: [
      { id: "US-001", priority: "high" },
      { id: "US-003", priority: "high" },
      { id: "US-008", priority: "med" },
    ],
  },
  {
    title: "Building",
    count: 1,
    cards: [
      { id: "US-008", priority: "high", building: true },
    ],
  },
  {
    title: "Human Review",
    count: 2,
    cards: [
      { id: "US-005", priority: "med", review: true },
      { id: "US-008", priority: "med", review: true },
    ],
  },
  {
    title: "Complete",
    count: 7,
    cards: [
      { id: "US-008", priority: "high" },
      { id: "US-002", priority: "med" },
      { id: "US-002", priority: "high" },
      { id: "US-006", priority: "high" },
    ],
  },
];

export function HeroSection({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal as="section" className="hero grid">
      <motion.div className="hero__copy">
        <RevealItem className="eyebrow">{content.eyebrow}</RevealItem>
        <RevealItem as="h1">
          {content.title[0]}
          <span> {content.title[1]}</span>
        </RevealItem>
        <RevealItem as="p" className="hero__lede">
          {content.description}
        </RevealItem>
        <RevealItem className="hero__actions">
          <AppLink className="button button--primary" href={content.primaryCta.href}>
            {content.primaryCta.label}
          </AppLink>
          <AppLink className="button button--secondary" href={content.secondaryCta.href}>
            {content.secondaryCta.label}
          </AppLink>
        </RevealItem>
        <RevealItem className="hero__meta">
          {content.meta.map((item) => (
            <motion.span key={item} whileHover={reduceMotion ? undefined : { y: -3 }}>
              {item}
            </motion.span>
          ))}
        </RevealItem>
      </motion.div>
      <HeroPanel />
    </SectionReveal>
  );
}

function PlaceholderLines({ count = 2, widths }) {
  const defaults = ["85%", "60%", "72%", "50%"];
  return (
    <div className="ph-lines">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="ph-line" style={{ width: (widths || defaults)[i] || "60%" }} />
      ))}
    </div>
  );
}

function HeroPanel() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="hero-panel"
      initial={reduceMotion ? false : { opacity: 0, x: 32, scale: 0.97 }}
      animate={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero-product">
        <div className="hero-product__backdrop" />

        {/* Toolbar */}
        <div className="hero-product__toolbar">
          <div className="hero-product__engine">Opus 4.6</div>
          <div className="hero-product__status">
            <span className="status-dot" />
            Running
          </div>
          <div className="hero-product__toolbar-actions">
            <span>Pause</span>
            <span>Stop</span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="hero-product__sidebar">
          <div className="hero-product__sidebar-header">
            <span className="hero-product__app-name">Relay</span>
          </div>
          <div className="hero-product__nav-item">Features:</div>
          <div className="hero-product__feature-list">
            {sidebarFeatures.map((f) => (
              <div
                key={f.name}
                className={`hero-product__feature-item${f.current ? " hero-product__feature-item--current" : ""}`}
              >
                {!f.current && <span className="hero-product__feature-check">✓</span>}
                {f.current && <span className="hero-product__feature-progress">7/13</span>}
                <span>{f.name}</span>
              </div>
            ))}
          </div>
          <div className="hero-product__sidebar-nav">
            <div className="hero-product__nav-item hero-product__nav-item--active"><span>Board</span></div>
            <div className="hero-product__nav-item"><span>Feature Spec</span></div>
            <div className="hero-product__nav-item"><span>Summary</span></div>
          </div>
        </div>

        {/* Board */}
        <motion.div
          className="hero-product__board-frame"
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-product__columns">
            {boardColumns.map((column) => (
              <div key={column.title} className="hero-product__column">
                <div className="hero-product__column-title">
                  {column.title}
                  <span className="hero-product__column-count">{column.count}</span>
                </div>
                {column.cards.map((card, i) => (
                  <div
                    key={card.id + i}
                    className={`hero-product__task${card.building ? " hero-product__task--active" : ""}${card.review ? " hero-product__task--review" : ""}`}
                  >
                    <div className="hero-product__task-meta">
                      <span>{card.id}</span>
                      <span className={`hero-product__priority hero-product__priority--${card.priority}`}>
                        {card.priority === "high" ? "HIGH" : "MED"}
                      </span>
                      <span className={`hero-product__task-dot${card.review ? " hero-product__task-dot--review" : card.building ? " hero-product__task-dot--building" : ""}`} />
                    </div>
                    <PlaceholderLines count={2} widths={["90%", "55%"]} />
                    {card.review && (
                      <div className="hero-product__task-action">Review Changes</div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Runtime Activity */}
        <motion.div
          className="hero-runtime"
          animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-runtime__tabs">
            <span className="hero-runtime__tab--active">Agent Activity</span>
            <span>Run Output</span>
            <span className="hero-runtime__timer">4s</span>
          </div>
          <div className="hero-runtime__stats">
            <span><span className="status-dot status-dot--small" />3 files edited</span>
            <span>5 tool calls</span>
            <span>21s</span>
          </div>
          <div className="hero-runtime__events">
            <div className="hero-runtime__event hero-runtime__event--success">
              ✓ Task complete. Ready for review.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

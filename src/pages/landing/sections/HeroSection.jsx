import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { AppLink } from "../../../components/ui/AppLink";

const boardColumns = [
  {
    title: "Pending",
    cards: [
      { id: "UG-001", priority: "High", text: "Define socket event boundaries for multi-agent sessions." },
      { id: "UG-002", priority: "Med", text: "Draft spec notes for branch isolation and review gates." },
      { id: "UG-003", priority: "Low", text: "Prepare environment hooks for feature summary capture." },
    ],
  },
  {
    title: "Building",
    cards: [
      { id: "UG-004", priority: "High", text: "Build reusable task board component and runtime bindings." },
    ],
  },
  {
    title: "Human Review",
    cards: [
      { id: "UG-005", priority: "Med", text: "Review accessibility pass and copy updates for docs." },
      { id: "UG-006", priority: "Med", text: "Validate route transitions and mobile navigation states." },
    ],
  },
  {
    title: "Complete",
    cards: [
      { id: "UG-007", priority: "High", text: "Generate feature spec and task decomposition." },
      { id: "UG-008", priority: "Med", text: "Open feature branch and persist structured commits." },
      { id: "UG-009", priority: "Low", text: "Capture final summary metrics and PR metadata." },
    ],
  },
];

const runtimeLines = [
  "Task complete. Ready for review.",
  "Acceptance criteria validated against generated spec.",
  "Feature branch updated with structured commit history.",
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
      <HeroPanel runtime={content.runtime} />
    </SectionReveal>
  );
}

function HeroPanel({ runtime }) {
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
        <div className="hero-product__toolbar">
          <div className="hero-product__engine">Sonnet 4.0</div>
          <div className="hero-product__status">
            <span className="status-dot" />
            Running
          </div>
          <div className="hero-product__toolbar-actions">
            <span>Pause</span>
            <span>Stop</span>
          </div>
        </div>

        <motion.div
          className="hero-product__board-frame"
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-product__board-title">Relay Board</div>
          <div className="hero-product__columns">
            {boardColumns.map((column) => (
              <div key={column.title} className="hero-product__column">
                <div className="hero-product__column-title">{column.title}</div>
                {column.cards.map((card) => (
                  <div
                    key={card.id}
                    className={`hero-product__task${
                      column.title === "Building" ? " hero-product__task--active" : ""
                    }${
                      column.title === "Human Review" ? " hero-product__task--review" : ""
                    }`}
                  >
                    <div className="hero-product__task-meta">
                      <span>{card.id}</span>
                      <span>{card.priority}</span>
                    </div>
                    <p>{card.text}</p>
                    {column.title === "Human Review" && (
                      <div className="hero-product__task-action">Review Changes</div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-runtime"
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-runtime__tabs">
            <span className="hero-runtime__tabs-title">{runtime.title}</span>
          </div>
          <div className="hero-runtime__tabs hero-runtime__tabs--subtle">
            <span>Agent Activity</span>
            <span>Run Output</span>
            <span>4s</span>
          </div>
          <div className="hero-runtime__events">
            {runtimeLines.map((line) => (
              <div className="hero-runtime__event" key={line}>
                {line}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

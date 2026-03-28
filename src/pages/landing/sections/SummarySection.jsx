import { motion, useReducedMotion } from "motion/react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { stagger } from "../../../components/motion/animations";
import { TiltCard } from "../../../components/motion/TiltCard";

export function SummarySection({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="section section--muted">
      <div className="stats-layout">
        <motion.div className="stats-grid" variants={stagger}>
          {content.metrics.map((metric) => (
            <RevealItem key={metric.label}>
              <TiltCard className="stat-card">
                <div className="stat-card__value">{metric.value}</div>
                <div className="stat-card__label">{metric.label}</div>
              </TiltCard>
            </RevealItem>
          ))}
        </motion.div>

        <RevealItem>
          <motion.div
            className="insight-panel"
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <div className="eyebrow">{content.panel.eyebrow}</div>
            <h2>{content.panel.title}</h2>
            <p>{content.panel.description}</p>
            <ul className="check-list">
              {content.panel.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}

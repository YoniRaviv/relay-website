import { motion } from "motion/react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { stagger } from "../../../components/motion/animations";
import { TiltCard } from "../../../components/motion/TiltCard";

export function WorkflowSection({ content }) {
  return (
    <SectionReveal className="section workflow-section" id="workflow">
      <RevealItem className="workflow-copy">
        <div className="eyebrow">{content.eyebrow}</div>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </RevealItem>

      <motion.div className="timeline" variants={stagger}>
        {content.steps.map((step) => (
          <RevealItem key={step.id}>
            <TiltCard className="timeline-card">
              <span className="timeline-card__id">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </TiltCard>
          </RevealItem>
        ))}
      </motion.div>
    </SectionReveal>
  );
}

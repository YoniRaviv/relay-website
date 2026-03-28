import { motion, useReducedMotion } from "motion/react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { AppLink } from "../../../components/ui/AppLink";

export function CtaSection({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="section cta-section" id="cta">
      <RevealItem>
        <motion.div
          className="cta-card"
          whileHover={reduceMotion ? undefined : { scale: 1.01 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        >
          <div className="eyebrow">{content.eyebrow}</div>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <div className="hero__actions">
            <AppLink
              className="button button--primary"
              href={content.primaryCta.href}
              target={content.primaryCta.external ? "_blank" : undefined}
              rel={content.primaryCta.external ? "noreferrer" : undefined}
            >
              {content.primaryCta.label}
            </AppLink>
            <AppLink className="button button--secondary" href={content.secondaryCta.href}>
              {content.secondaryCta.label}
            </AppLink>
          </div>
        </motion.div>
      </RevealItem>
    </SectionReveal>
  );
}

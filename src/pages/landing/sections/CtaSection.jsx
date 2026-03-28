import { motion, useReducedMotion } from "motion/react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { AppLink } from "../../../components/ui/AppLink";

export function CtaSection({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="w-[min(calc(100%-2rem),1180px)] mx-auto pb-20 relative z-[1]" id="cta">
      <RevealItem>
        <motion.div
          className="py-[clamp(2.5rem,5vw,4rem)] px-[clamp(1.6rem,4vw,3rem)] rounded-[20px] bg-surface-low text-center"
          whileHover={reduceMotion ? undefined : { scale: 1.01 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        >
          <div className="eyebrow">{content.eyebrow}</div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] tracking-[-0.05em] leading-[0.95] mx-auto max-w-[12ch]">
            {content.title}
          </h2>
          <p className="text-muted leading-7 text-base">{content.description}</p>
          <div className="flex flex-wrap justify-center gap-3.5 mt-8">
            <AppLink
              className="btn btn-primary"
              href={content.primaryCta.href}
              target={content.primaryCta.external ? "_blank" : undefined}
              rel={content.primaryCta.external ? "noreferrer" : undefined}
            >
              {content.primaryCta.label}
            </AppLink>
            <AppLink className="btn btn-secondary" href={content.secondaryCta.href}>
              {content.secondaryCta.label}
            </AppLink>
          </div>
        </motion.div>
      </RevealItem>
    </SectionReveal>
  );
}

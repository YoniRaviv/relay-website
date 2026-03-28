import { motion, useReducedMotion } from "motion/react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { stagger } from "../../../components/motion/animations";
import { TiltCard } from "../../../components/motion/TiltCard";

export function SummarySection({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal
      className="w-[min(calc(100%-2rem),1180px)] mx-auto py-[clamp(3rem,6vw,5rem)] px-[clamp(1.25rem,3vw,2.5rem)] rounded-3xl bg-gradient-to-b from-surface-mid/92 to-surface/90 relative z-[1]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-center">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={stagger}>
          {content.metrics.map((metric) => (
            <RevealItem key={metric.label} className="h-full">
              <TiltCard className="p-[clamp(1.5rem,3vw,2rem)] rounded-2xl min-h-[180px] flex flex-col justify-end h-full border border-border">
                <div className="font-display text-text-primary text-[clamp(2rem,5vw,3.4rem)] tracking-[-0.06em]">
                  {metric.value}
                </div>
                <div className="text-muted leading-relaxed">{metric.label}</div>
              </TiltCard>
            </RevealItem>
          ))}
        </motion.div>

        <RevealItem>
          <motion.div
            className="p-[clamp(1.5rem,3vw,2rem)] rounded-2xl bg-surface-mid"
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <div className="eyebrow">{content.panel.eyebrow}</div>
            <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] tracking-[-0.055em] leading-[0.95] m-0 max-w-[13ch]">
              {content.panel.title}
            </h2>
            <p className="text-muted leading-7 text-base">{content.panel.description}</p>
            <ul className="mt-5 p-0 list-none">
              {content.panel.bullets.map((bullet) => (
                <li key={bullet} className="relative mb-3.5 pl-5 text-text-primary before:content-[''] before:absolute before:top-2.5 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}

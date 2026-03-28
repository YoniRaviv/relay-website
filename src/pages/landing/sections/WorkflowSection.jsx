import { motion } from "motion/react";
import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { stagger } from "../../../components/motion/animations";
import { TiltCard } from "../../../components/motion/TiltCard";

export function WorkflowSection({ content }) {
  return (
    <SectionReveal
      className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-6 w-[min(calc(100%-2rem),1180px)] mx-auto py-[clamp(3rem,6vw,5.5rem)] relative z-[1]"
      id="workflow"
    >
      <RevealItem className="max-w-[760px]">
        <div className="eyebrow">{content.eyebrow}</div>
        <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] tracking-[-0.055em] leading-[0.95] m-0 max-w-[13ch]">
          {content.title}
        </h2>
        <p className="text-muted leading-7 text-base mt-5">{content.description}</p>
      </RevealItem>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={stagger}>
        {content.steps.map((step) => (
          <RevealItem key={step.id} className="h-full">
            <TiltCard className="p-[clamp(1.5rem,3vw,2rem)] rounded-2xl bg-surface-low min-h-[220px] h-full">
              <span className="inline-block mb-6 text-brand text-[0.82rem] tracking-[0.16em]">
                {step.id}
              </span>
              <h3 className="font-display text-[1.45rem] tracking-[-0.04em] m-0 mb-3">{step.title}</h3>
              <p className="text-muted leading-7 text-base">{step.text}</p>
            </TiltCard>
          </RevealItem>
        ))}
      </motion.div>
    </SectionReveal>
  );
}

import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { TiltCard } from "../../../components/motion/TiltCard";

export function GovernanceSection({ content }) {
  return (
    <SectionReveal className="w-[min(calc(100%-2rem),1180px)] mx-auto py-[clamp(3rem,6vw,5.5rem)] relative z-[1]">
      <RevealItem className="max-w-[760px]">
        <div className="eyebrow">{content.eyebrow}</div>
        <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] tracking-[-0.055em] leading-[0.95] m-0 max-w-[13ch]">
          {content.title}
        </h2>
      </RevealItem>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {content.modes.map((mode) => (
          <RevealItem key={mode.name} className="h-full">
            <TiltCard className="p-[clamp(1.5rem,3vw,2rem)] rounded-2xl bg-surface-low h-full">
              <h3 className="font-display text-[1.45rem] tracking-[-0.04em] m-0 mb-3">{mode.name}</h3>
              <p className="text-muted leading-7 text-base">{mode.description}</p>
            </TiltCard>
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}

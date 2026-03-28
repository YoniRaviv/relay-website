import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { TiltCard } from "../../../components/motion/TiltCard";

export function PlatformSection({ intro, cards }) {
  return (
    <SectionReveal
      className="w-[min(calc(100%-2rem),1180px)] mx-auto py-[clamp(3rem,6vw,5rem)] px-[clamp(1.25rem,3vw,2.5rem)] rounded-3xl bg-gradient-to-b from-surface-mid/92 to-surface/90 relative z-[1]"
      id="product"
    >
      <RevealItem className="max-w-[760px]">
        <div className="eyebrow">{intro.eyebrow}</div>
        <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] tracking-[-0.055em] leading-[0.95] m-0 max-w-[13ch]">
          {intro.title}
        </h2>
      </RevealItem>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {cards.map((card) => (
          <RevealItem key={card.title} className="h-full">
            <TiltCard className="p-[clamp(1.5rem,3vw,2rem)] rounded-2xl bg-surface-low h-full">
              <div className="eyebrow eyebrow--soft">{card.eyebrow}</div>
              <h3 className="font-display text-[1.45rem] tracking-[-0.04em] m-0 mb-3">{card.title}</h3>
              <p className="text-muted leading-7 text-base">{card.body}</p>
            </TiltCard>
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}

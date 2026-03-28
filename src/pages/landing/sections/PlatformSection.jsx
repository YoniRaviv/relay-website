import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { TiltCard } from "../../../components/motion/TiltCard";

export function PlatformSection({ intro, cards }) {
  return (
    <SectionReveal className="section section--muted" id="product">
      <RevealItem className="section-heading">
        <div className="eyebrow">{intro.eyebrow}</div>
        <h2>{intro.title}</h2>
      </RevealItem>

      <div className="feature-grid">
        {cards.map((card) => (
          <RevealItem key={card.title}>
            <TiltCard className="feature-card">
              <div className="eyebrow eyebrow--soft">{card.eyebrow}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </TiltCard>
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}

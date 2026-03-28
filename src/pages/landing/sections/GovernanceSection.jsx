import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { TiltCard } from "../../../components/motion/TiltCard";

export function GovernanceSection({ content }) {
  return (
    <SectionReveal className="section">
      <RevealItem className="section-heading">
        <div className="eyebrow">{content.eyebrow}</div>
        <h2>{content.title}</h2>
      </RevealItem>

      <div className="modes-grid">
        {content.modes.map((mode) => (
          <RevealItem key={mode.name}>
            <TiltCard className="mode-card">
              <h3>{mode.name}</h3>
              <p>{mode.description}</p>
            </TiltCard>
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}

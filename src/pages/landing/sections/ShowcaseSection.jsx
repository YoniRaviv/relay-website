import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { TiltCard } from "../../../components/motion/TiltCard";

export function ShowcaseSection({ content }) {
  return (
    <SectionReveal className="section">
      <RevealItem className="section-heading">
        <div className="eyebrow">{content.eyebrow}</div>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </RevealItem>

      <div className="showcase-grid">
        {content.panels.map((panel) => (
          <RevealItem key={panel.title}>
            <TiltCard className="showcase-card">
              <div className="eyebrow eyebrow--soft">{panel.label}</div>
              <h3>{panel.title}</h3>
              <p>{panel.body}</p>
              {panel.type === "summary" && <SummaryPanel panel={panel} />}
              {panel.type === "spec" && <SpecPanel panel={panel} />}
              {panel.type === "refine" && <RefinePanel panel={panel} />}
            </TiltCard>
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}

function SummaryPanel({ panel }) {
  return (
    <div className="showcase-ui">
      <div className="showcase-summary-metrics">
        {panel.stats.map(([label, value]) => (
          <div key={label} className="showcase-summary-metric">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="showcase-summary-table">
        {panel.rows.map(([story, status, model, cost]) => (
          <div key={story + status} className="showcase-summary-row">
            <span>{story}</span>
            <span>{status}</span>
            <span>{model}</span>
            <span>{cost}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecPanel({ panel }) {
  return (
    <div className="showcase-ui">
      <div className="showcase-spec-stepper">
        {[1, 2, 3, 4, 5].map((step) => (
          <span key={step} className={step === 1 ? "is-active" : ""}>
            {step}
          </span>
        ))}
      </div>
      <div className="showcase-spec-form">
        {panel.fields.map((field, index) => (
          <div key={field} className={`showcase-spec-field${index === 1 ? " showcase-spec-field--large" : ""}`}>
            {field}
          </div>
        ))}
        <div className="showcase-spec-actions">
          <span>Attach images</span>
          <span>Include unit tests</span>
        </div>
        <div className="showcase-spec-cta">Generate Specification</div>
      </div>
    </div>
  );
}

function RefinePanel({ panel }) {
  return (
    <div className="showcase-ui">
      <div className="showcase-refine-progress">
        {[1, 2, 3, 4, 5].map((step) => (
          <span key={step} className={step < 5 ? "is-complete" : ""}>
            {step}
          </span>
        ))}
      </div>
      <div className="showcase-refine-question">
        How should the hero section adapt across different screen sizes?
      </div>
      <div className="showcase-refine-options">
        {panel.options.map((option, index) => (
          <div
            key={option}
            className={`showcase-refine-option${index === 1 ? " showcase-refine-option--active" : ""}`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

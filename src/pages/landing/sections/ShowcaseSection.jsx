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
        {panel.stats.map(([label, value, sub]) => (
          <div key={label} className="showcase-summary-metric">
            <span>{label}</span>
            <strong>{value}</strong>
            {sub && <span className="showcase-summary-sub">{sub}</span>}
          </div>
        ))}
      </div>
      <div className="showcase-summary-section">
        <div className="showcase-summary-section-title">Cost by Model</div>
        {panel.models.map(([model, tokens, cost]) => (
          <div key={model} className="showcase-summary-model">
            <span className="showcase-summary-model-name">{model}</span>
            <span className="showcase-summary-model-tokens">{tokens}</span>
            <span className="showcase-summary-model-cost">{cost}</span>
          </div>
        ))}
      </div>
      <div className="showcase-summary-table">
        <div className="showcase-summary-row showcase-summary-row--header">
          <span>Story</span>
          <span>Status</span>
          <span>Model</span>
          <span>Cost</span>
        </div>
        {panel.rows.map(([story, status, model, cost]) => (
          <div key={story + status} className="showcase-summary-row">
            <span>{story}</span>
            <span className={`showcase-status showcase-status--${status.toLowerCase()}`}>{status}</span>
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
        {panel.steps.map((step, i) => (
          <div key={step} className={`showcase-spec-step${i === 0 ? " showcase-spec-step--active" : ""}`}>
            <span className="showcase-spec-step-num">{i + 1}</span>
            <span className="showcase-spec-step-label">{step}</span>
          </div>
        ))}
      </div>
      <div className="showcase-spec-form">
        <div className="showcase-spec-field">
          <span className="showcase-spec-label">Feature name (optional)</span>
          <span className="showcase-spec-value">new feature</span>
        </div>
        <div className="showcase-spec-field showcase-spec-field--large">
          <span className="showcase-spec-label">Describe the feature you want to build</span>
          <span className="showcase-spec-value showcase-spec-value--body">Create a clean, modern hero section with a black background and subtle white particle animation...</span>
        </div>
        <div className="showcase-spec-attachments">
          <span className="showcase-spec-thumb" />
          <span className="showcase-spec-thumb" />
          <span className="showcase-spec-thumb-count">2/10 images</span>
        </div>
        <div className="showcase-spec-actions">
          <span>Attach images</span>
          <span className="showcase-spec-toggle">
            <span className="showcase-spec-toggle-track"><span className="showcase-spec-toggle-knob" /></span>
            Include unit tests
          </span>
        </div>
        <div className="showcase-spec-cta">Generate Specification</div>
      </div>
    </div>
  );
}

function RefinePanel({ panel }) {
  return (
    <div className="showcase-ui">
      <div className="showcase-refine-spec-card">
        <p>Create a clean, modern hero section with a black background and subtle white particle animation...</p>
      </div>
      <div className="showcase-refine-progress">
        {[1, 2, 3, 4, 5].map((step) => (
          <span key={step} className={step < 4 ? "is-complete" : step === 4 ? "is-active" : ""}>
            {step < 4 ? "✓" : step}
          </span>
        ))}
        <span className="showcase-refine-progress-label">4 of 5</span>
      </div>
      <div className="showcase-refine-question">
        {panel.question}
      </div>
      <div className="showcase-refine-options">
        {panel.options.map((option, index) => (
          <div
            key={option}
            className={`showcase-refine-option${index === 1 ? " showcase-refine-option--active" : ""}`}
          >
            <span className={`showcase-refine-radio${index === 1 ? " showcase-refine-radio--checked" : ""}`} />
            {option}
          </div>
        ))}
      </div>
      <div className="showcase-refine-footer">
        <span>← Back</span>
        <span>Skip</span>
        <span className="showcase-refine-next">Next →</span>
      </div>
    </div>
  );
}

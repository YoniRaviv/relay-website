import { RevealItem } from "../../../components/motion/RevealItem";
import { SectionReveal } from "../../../components/motion/SectionReveal";
import { TiltCard } from "../../../components/motion/TiltCard";

export function ShowcaseSection({ content }) {
  return (
    <SectionReveal className="w-[min(calc(100%-2rem),1180px)] mx-auto py-[clamp(3rem,6vw,5.5rem)] relative z-[1]">
      <RevealItem className="max-w-[760px]">
        <div className="eyebrow">{content.eyebrow}</div>
        <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] tracking-[-0.055em] leading-[0.95] m-0 max-w-[13ch]">
          {content.title}
        </h2>
        <p className="text-muted leading-7 text-base mt-5">{content.description}</p>
      </RevealItem>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr_0.95fr] gap-5 mt-10">
        {content.panels.map((panel) => (
          <RevealItem key={panel.title} className="h-full">
            <TiltCard className="showcase-card h-full p-[clamp(1.5rem,3vw,2rem)] rounded-2xl bg-surface-low">
              <div className="eyebrow eyebrow--soft">{panel.label}</div>
              <h3 className="font-display tracking-[-0.04em] m-0 mb-3">{panel.title}</h3>
              <p className="text-muted leading-7 text-base">{panel.body}</p>
              {panel.type === "summary" && <SummaryPanel panel={panel} />}
              {panel.type === "spec" && <SpecPanel panel={panel} />}
              {panel.type === "brainstorm" && <BrainstormPanel panel={panel} />}
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

function BrainstormPanel({ panel }) {
  return (
    <div className="showcase-ui">
      <div className="showcase-brainstorm-phases">
        {panel.phases.map((phase, i) => (
          <span
            key={phase}
            className={`showcase-brainstorm-phase${i < panel.activePhase ? " is-complete" : i === panel.activePhase ? " is-active" : ""}`}
          >
            {phase}
          </span>
        ))}
      </div>
      <div className="showcase-brainstorm-question">{panel.question}</div>
      <div className="showcase-brainstorm-approaches">
        {panel.approaches.map((approach) => (
          <div
            key={approach.title}
            className={`showcase-brainstorm-approach${approach.recommended ? " showcase-brainstorm-approach--recommended" : ""}`}
          >
            {approach.recommended && (
              <span className="showcase-brainstorm-badge">Recommended</span>
            )}
            <div className="showcase-brainstorm-approach-title">{approach.title}</div>
            <p className="showcase-brainstorm-approach-desc">{approach.description}</p>
            <div className="showcase-brainstorm-tradeoffs">
              <span className="showcase-brainstorm-pro">{approach.pro}</span>
              <span className="showcase-brainstorm-con">{approach.con}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="showcase-brainstorm-footer">
        <span className="showcase-brainstorm-cta">Choose this approach →</span>
      </div>
    </div>
  );
}

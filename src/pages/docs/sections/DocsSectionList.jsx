export function DocsSectionList({ sections }) {
  return sections.map((section) => (
    <article key={section.id}>
      <div className="docs-block">
        <div id={section.id} className="docs-block__anchor" />
        <h2>{section.title}</h2>
        <p>{section.body}</p>
        {section.cards && (
          <div className="docs-card-grid">
            {section.cards.map((card) => (
              <div key={card.title} className="docs-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  ));
}

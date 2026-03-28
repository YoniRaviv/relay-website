export function DocsSectionList({ sections }) {
  return sections.map((section) => (
    <article key={section.id}>
      <div className="p-[clamp(1.5rem,3vw,2rem)] rounded-2xl bg-surface-low scroll-mt-[100px]">
        <div id={section.id} className="relative -top-[88px]" />
        <h2 className="font-display text-2xl tracking-[-0.04em] mb-3.5">{section.title}</h2>
        <p className="text-muted leading-7">{section.body}</p>
        {section.cards && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {section.cards.map((card) => (
              <div key={card.title} className="p-[clamp(1.5rem,3vw,2rem)] rounded-2xl bg-surface-mid">
                <h3 className="font-display text-[1.45rem] tracking-[-0.04em] m-0 mb-3">{card.title}</h3>
                <p className="text-muted leading-7">{card.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  ));
}

export function DocsHero({ content }) {
  return (
    <div className="docs-hero">
      <div className="eyebrow">{content.eyebrow}</div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
}

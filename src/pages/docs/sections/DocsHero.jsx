export function DocsHero({ content }) {
  return (
    <div className="p-[clamp(1.5rem,4vw,3rem)] rounded-[20px] bg-surface-high">
      <div className="eyebrow">{content.eyebrow}</div>
      <h1 className="font-display text-[clamp(2.3rem,4vw,4rem)] tracking-[-0.055em] leading-[0.95] m-0 max-w-[13ch]">
        {content.title}
      </h1>
      <p className="max-w-[62ch] mt-4 text-muted leading-7">{content.description}</p>
    </div>
  );
}

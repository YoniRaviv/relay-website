import { AppLink } from "../../../components/ui/AppLink";

export function DocsCta({ content }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4 p-[clamp(1.5rem,4vw,3rem)] rounded-[20px] bg-surface-high">
      <div>
        <h2 className="font-display text-2xl tracking-[-0.04em] m-0 mb-2">{content.title}</h2>
        <p className="text-muted leading-7">{content.description}</p>
      </div>
      <AppLink
        className="btn btn-primary shrink-0"
        href={content.button.href}
        target={content.button.external ? "_blank" : undefined}
        rel={content.button.external ? "noreferrer" : undefined}
      >
        {content.button.label}
      </AppLink>
    </section>
  );
}

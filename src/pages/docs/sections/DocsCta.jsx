import { AppLink } from "../../../components/ui/AppLink";

export function DocsCta({ content }) {
  return (
    <section className="docs-cta">
      <div>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <AppLink className="button button--primary" href={content.button.href}>
        {content.button.label}
      </AppLink>
    </section>
  );
}

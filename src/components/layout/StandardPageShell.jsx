import { Footer } from "./Footer";
import { Shell } from "./Shell";
import { AppLink } from "../ui/AppLink";

export function StandardPageShell({ currentPath, eyebrow, title, description, sections }) {
  return (
    <Shell compact currentPath={currentPath} calm>
      <main className="standard-page">
        <section className="standard-page__hero">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>

        <section className="standard-page__content">
          {sections.map((section) => (
            <article key={section.title} className="standard-page__section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.bullets && (
                <ul className="check-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
        <section className="standard-page__actions">
          <AppLink className="button button--secondary" href="/docs/">
            Read Docs
          </AppLink>
          <AppLink className="button button--primary" href="/">
            Back to Product
          </AppLink>
        </section>
      </main>
      <Footer />
    </Shell>
  );
}

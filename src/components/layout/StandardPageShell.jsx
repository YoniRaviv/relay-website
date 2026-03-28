import { Footer } from "./Footer";
import { Shell } from "./Shell";
import { AppLink } from "../ui/AppLink";

export function StandardPageShell({ currentPath, eyebrow, title, description, sections }) {
  return (
    <Shell compact currentPath={currentPath} calm>
      <main className="w-[min(calc(100%-2rem),980px)] mx-auto py-8 pb-16">
        <section className="py-8 pb-10">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="font-display text-[clamp(2.7rem,5vw,4.4rem)] tracking-[-0.04em] m-0">{title}</h1>
          <p className="max-w-[70ch] text-muted leading-[1.8]">{description}</p>
        </section>

        <section className="grid gap-4">
          {sections.map((section) => (
            <article key={section.title} className="p-6 rounded-[20px] bg-surface-low">
              <h2 className="font-display tracking-[-0.04em] m-0 mb-3">{section.title}</h2>
              <p className="max-w-[70ch] text-muted leading-[1.8]">{section.body}</p>
              {section.bullets && (
                <ul className="mt-5 p-0 list-none">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="relative mb-3.5 pl-5 text-text-primary before:content-[''] before:absolute before:top-2.5 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
        <section className="flex flex-wrap gap-3.5 pt-6">
          <AppLink className="btn btn-secondary" href="/docs/">
            Read Docs
          </AppLink>
          <AppLink className="btn btn-primary" href="/">
            Back to Product
          </AppLink>
        </section>
      </main>
      <Footer />
    </Shell>
  );
}

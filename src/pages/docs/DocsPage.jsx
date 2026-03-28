import { Footer } from "../../components/layout/Footer";
import { Shell } from "../../components/layout/Shell";
import { docsPageContent } from "../../content/docs";
import { DocsCta } from "./sections/DocsCta";
import { DocsHero } from "./sections/DocsHero";
import { DocsSectionList } from "./sections/DocsSectionList";
import { DocsSidebar } from "./sections/DocsSidebar";

export function DocsPage() {
  return (
    <Shell compact currentPath="/docs/" calm>
      <main className="docs-shell">
        <DocsSidebar
          eyebrow={docsPageContent.sidebarEyebrow}
          items={docsPageContent.sections}
          status={docsPageContent.status}
        />

        <section className="docs-content">
          <DocsHero content={docsPageContent.hero} />
          <DocsSectionList sections={docsPageContent.sections} />
          <DocsCta content={docsPageContent.cta} />
        </section>
      </main>
      <Footer />
    </Shell>
  );
}

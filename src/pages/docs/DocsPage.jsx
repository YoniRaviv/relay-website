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
      <main className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6 w-[min(calc(100%-2rem),1180px)] mx-auto py-8 pb-16 relative z-[1]">
        <DocsSidebar
          eyebrow={docsPageContent.sidebarEyebrow}
          items={docsPageContent.sections}
          status={docsPageContent.status}
        />

        <section className="grid gap-6">
          <DocsHero content={docsPageContent.hero} />
          <DocsSectionList sections={docsPageContent.sections} />
          <DocsCta content={docsPageContent.cta} />
        </section>
      </main>
      <Footer />
    </Shell>
  );
}

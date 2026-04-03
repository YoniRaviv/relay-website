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
          <div className="p-[clamp(1rem,2.5vw,1.5rem)] rounded-2xl bg-[rgba(240,167,49,0.07)] ring-1 ring-[rgba(240,167,49,0.25)]">
            <p className="text-[0.8rem] font-bold tracking-wide uppercase text-[#f0a731] mb-1">macOS install note</p>
            <p className="text-muted leading-7 text-sm mb-3">
              If you see <span className="text-[#e5ded4] font-medium">"app is damaged and should be moved to trash"</span> after installing, the app is being quarantined by macOS. Relay is not yet signed with an Apple Developer certificate. Run this in Terminal to remove the quarantine flag:
            </p>
            <code className="block bg-[rgba(0,0,0,0.35)] text-[#2ec4a6] text-[0.8rem] px-4 py-3 rounded-xl font-mono">
              xattr -cr "/Applications/Relay Studio.app"
            </code>
          </div>
          <DocsSectionList sections={docsPageContent.sections} />
          <DocsCta content={docsPageContent.cta} />
        </section>
      </main>
      <Footer />
    </Shell>
  );
}

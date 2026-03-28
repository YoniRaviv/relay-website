import { StandardPageShell } from "../../components/layout/StandardPageShell";
import { termsPage } from "../../content/sitePages";

export function TermsPage() {
  return (
    <StandardPageShell
      currentPath="/terms/"
      eyebrow={termsPage.eyebrow}
      title={termsPage.title}
      description={termsPage.description}
      sections={termsPage.sections}
    />
  );
}

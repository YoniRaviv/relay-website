import { StandardPageShell } from "../../components/layout/StandardPageShell";
import { privacyPage } from "../../content/sitePages";

export function PrivacyPage() {
  return (
    <StandardPageShell
      currentPath="/privacy/"
      eyebrow={privacyPage.eyebrow}
      title={privacyPage.title}
      description={privacyPage.description}
      sections={privacyPage.sections}
    />
  );
}

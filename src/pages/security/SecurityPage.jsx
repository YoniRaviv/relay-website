import { StandardPageShell } from "../../components/layout/StandardPageShell";
import { securityPage } from "../../content/sitePages";

export function SecurityPage() {
  return (
    <StandardPageShell
      currentPath="/security/"
      eyebrow={securityPage.eyebrow}
      title={securityPage.title}
      description={securityPage.description}
      sections={securityPage.sections}
    />
  );
}

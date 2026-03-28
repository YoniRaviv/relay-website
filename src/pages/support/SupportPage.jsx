import { StandardPageShell } from "../../components/layout/StandardPageShell";
import { supportPage } from "../../content/sitePages";

export function SupportPage() {
  return (
    <StandardPageShell
      currentPath="/support/"
      eyebrow={supportPage.eyebrow}
      title={supportPage.title}
      description={supportPage.description}
      sections={supportPage.sections}
    />
  );
}

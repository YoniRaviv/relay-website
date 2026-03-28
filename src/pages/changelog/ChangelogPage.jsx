import { StandardPageShell } from "../../components/layout/StandardPageShell";
import { changelogPage } from "../../content/sitePages";

export function ChangelogPage() {
  return (
    <StandardPageShell
      currentPath="/changelog/"
      eyebrow={changelogPage.eyebrow}
      title={changelogPage.title}
      description={changelogPage.description}
      sections={changelogPage.sections}
    />
  );
}

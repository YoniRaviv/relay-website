import { AppLink } from "../../../components/ui/AppLink";

export function DocsSidebar({ eyebrow, items, status }) {
  return (
    <aside className="docs-sidebar">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <nav className="docs-nav">
          {items.map((item) => (
            <AppLink key={item.id} className="docs-nav__link" href={`#${item.id}`}>
              {item.title}
            </AppLink>
          ))}
        </nav>
      </div>
      <div className="system-pill">
        <span className="status-dot" />
        {status}
      </div>
    </aside>
  );
}

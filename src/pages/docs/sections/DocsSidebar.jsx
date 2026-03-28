import { AppLink } from "../../../components/ui/AppLink";

export function DocsSidebar({ eyebrow, items, status }) {
  return (
    <aside className="lg:sticky lg:top-4 h-fit grid gap-8 p-6 rounded-2xl bg-surface-low">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <nav className="grid gap-2.5">
          {items.map((item) => (
            <AppLink
              key={item.id}
              className="text-muted text-[0.92rem] hover:text-brand transition-colors"
              href={`#${item.id}`}
            >
              {item.title}
            </AppLink>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-muted text-[0.88rem]">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_10px_rgba(46,196,166,0.35)] animate-pulse-dot" />
        {status}
      </div>
    </aside>
  );
}

import { useEffect, useRef, useState } from "react";
import { AppLink } from "../../../components/ui/AppLink";

export function DocsSidebar({ eyebrow, items, status }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const visibleSet = useRef(new Set());

  useEffect(() => {
    const ids = items.map((item) => item.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSet.current.add(entry.target.id);
          } else {
            visibleSet.current.delete(entry.target.id);
          }
        }
        // Pick the first visible section in document order
        for (const id of ids) {
          if (visibleSet.current.has(id)) {
            setActiveId(id);
            return;
          }
        }
      },
      { rootMargin: "-80px 0px -40% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <aside className="hidden lg:grid lg:sticky lg:top-20 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto gap-8 p-6 rounded-2xl bg-surface-low">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <nav className="grid gap-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`text-[0.92rem] py-1 transition-colors duration-150 ${
                activeId === item.id
                  ? "text-brand font-medium"
                  : "text-muted hover:text-brand"
              }`}
            >
              {item.title}
            </a>
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

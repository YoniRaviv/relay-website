import { footerContent } from "../../content/footer";
import { brand } from "../../content/brand";
import { AppLink } from "../ui/AppLink";

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-8 pt-12 pb-10 mt-4 border-t border-border/50 w-[min(calc(100%-2rem),1180px)] mx-auto">
      <div>
        <AppLink className="font-display text-[1.3rem] font-bold tracking-[-0.04em]" href="/">
          {brand.mark.primary}
          <span className="text-brand">{brand.mark.accent}</span>
        </AppLink>
        <p className="text-muted leading-7 text-base mt-2">{footerContent.description}</p>
      </div>

      <div className="flex flex-wrap gap-8">
        {footerContent.groups.map((group) => (
          <div key={group.title} className="min-w-[140px]">
            <div className="mb-3 text-text-primary text-[0.8rem] font-bold tracking-[0.14em] uppercase">
              {group.title}
            </div>
            <div className="grid gap-2.5 content-start">
              {group.links.map((link) => (
                <AppLink
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-muted text-[0.92rem] hover:text-brand transition-colors"
                >
                  {link.label}
                </AppLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

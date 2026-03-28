import { footerContent } from "../../content/footer";
import { brand } from "../../content/brand";
import { AppLink } from "../ui/AppLink";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <AppLink className="brand brand--footer" href="/">
          {brand.mark.primary}
          <span>{brand.mark.accent}</span>
        </AppLink>
        <p>{footerContent.description}</p>
      </div>

      <div className="footer__groups">
        {footerContent.groups.map((group) => (
          <div key={group.title} className="footer__group">
            <div className="footer__title">{group.title}</div>
            <div className="footer__links">
              {group.links.map((link) => (
                <AppLink
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
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

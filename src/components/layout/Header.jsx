import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { navigation } from "../../content/navigation";
import { brand } from "../../content/brand";
import { AppLink } from "../ui/AppLink";

export function Header({ compact, currentPath, calm }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className={`topbar${calm ? " topbar--calm" : ""}`}>
      <AppLink className="brand" href="/">
        {brand.mark.primary}
        <span>{brand.mark.accent}</span>
      </AppLink>

      <nav className="nav">
        <NavLinks currentPath={currentPath} />
      </nav>

      <div className="topbar__actions">
        {!compact && <AppLink className="text-link" href="#workflow">Workflow</AppLink>}
        <AppLink className="button button--primary" href={compact ? "/" : "/docs/"}>
          {compact ? "Product" : "View Docs"}
        </AppLink>
      </div>

      <button
        type="button"
        className={`mobile-menu-button${isOpen ? " mobile-menu-button--open" : ""}`}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <AnimatePresence>
        {isOpen &&
          createPortal(
            <>
              <motion.button
                type="button"
                className="mobile-menu-backdrop"
                aria-label="Close navigation menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.985 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mobile-menu__section">
                  <NavLinks currentPath={currentPath} stacked />
                </div>
                <div className="mobile-menu__section">
                  {!compact && (
                    <AppLink className="mobile-menu__text-link" href="#workflow">
                      Workflow
                    </AppLink>
                  )}
                  <AppLink className="button button--primary mobile-menu__cta" href={compact ? "/" : "/docs/"}>
                    {compact ? "Product" : "View Docs"}
                  </AppLink>
                </div>
              </motion.div>
            </>,
            document.body,
          )}
      </AnimatePresence>
    </header>
  );
}

function NavLinks({ currentPath, stacked = false }) {
  return navigation.map((item) =>
    item.external ? (
      <AppLink
        key={item.label}
        className={stacked ? "mobile-menu__link" : "nav__link"}
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        {item.label}
      </AppLink>
    ) : (
      <AppLink
        key={item.label}
        href={item.href}
        className={`${stacked ? "mobile-menu__link" : "nav__link"}${currentPath === item.href ? " nav__link--active" : ""}`}
      >
        {item.label}
      </AppLink>
    ),
  );
}

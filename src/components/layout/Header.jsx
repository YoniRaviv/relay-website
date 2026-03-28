import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { navigation } from "../../content/navigation";
import { brand } from "../../content/brand";
import { AppLink } from "../ui/AppLink";
import clsx from "clsx";

export function Header({ compact, currentPath, calm }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <>
    {/* Spacer for fixed header on mobile */}
    <div className="h-16 md:hidden" />
    <div className="fixed left-4 right-4 top-2 z-50 md:relative md:inset-auto md:w-[min(calc(100%-2rem),1180px)] md:mx-auto md:sticky md:top-3">
      {/* Topbar */}
      <header
        className={clsx(
          "flex items-center justify-between gap-4 rounded-[14px] px-5 py-3.5 backdrop-blur-[20px]",
          calm
            ? "bg-surface-low/92 shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
            : "bg-surface/72 shadow-[0_18px_40px_rgba(0,0,0,0.2)]",
        )}
      >
        <AppLink className="font-display text-[1.3rem] font-bold tracking-[-0.04em]" href="/">
          {brand.mark.primary}
          <span className="text-brand">{brand.mark.accent}</span>
        </AppLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navigation.map((item) => (
            <AppLink
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className={clsx(
                "relative text-[0.92rem] transition-colors duration-150",
                currentPath === item.href ? "text-brand" : "text-muted hover:text-brand",
              )}
            >
              {item.label}
              <span
                className={clsx(
                  "absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-brand transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  currentPath === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </AppLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          {!compact && <AppLink className="text-[0.92rem] text-muted hover:text-brand transition-colors" href="#workflow">Workflow</AppLink>}
          <AppLink className="btn btn-primary" href={compact ? "/" : "/docs/"}>
            {compact ? "Product" : "View Docs"}
          </AppLink>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative flex md:hidden items-center justify-center w-12 h-12 rounded-[10px] bg-surface-highest/72"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className={clsx(
            "absolute w-[18px] h-0.5 rounded-full bg-current transition-transform duration-150",
            isOpen ? "rotate-45" : "-translate-y-1",
          )} />
          <span className={clsx(
            "absolute w-[18px] h-0.5 rounded-full bg-current transition-transform duration-150",
            isOpen ? "-rotate-45" : "translate-y-1",
          )} />
        </button>
      </header>

    </div>

    {/* Full-screen mobile menu — portaled to body for clean stacking */}
    {createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[60] flex flex-col bg-surface px-4 pt-4 pb-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <AppLink className="font-display text-[1.3rem] font-bold tracking-[-0.04em]" href="/" onClick={() => setIsOpen(false)}>
                {brand.mark.primary}
                <span className="text-brand">{brand.mark.accent}</span>
              </AppLink>
              <button
                type="button"
                className="flex items-center justify-center w-12 h-12 rounded-[10px] bg-surface-highest/72 text-text-primary"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <span className="absolute w-[18px] h-0.5 rounded-full bg-current rotate-45" />
                <span className="absolute w-[18px] h-0.5 rounded-full bg-current -rotate-45" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 mb-6">
              {navigation.map((item) => (
                <AppLink
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "py-3 text-lg font-medium",
                    currentPath === item.href ? "text-brand" : "text-text-primary hover:text-brand",
                  )}
                >
                  {item.label}
                </AppLink>
              ))}
              {!compact && (
                <AppLink
                  className="py-3 text-lg font-medium text-text-primary hover:text-brand"
                  href="#workflow"
                  onClick={() => setIsOpen(false)}
                >
                  Workflow
                </AppLink>
              )}
            </nav>

            {/* CTA */}
            <AppLink
              className="btn btn-primary w-full"
              href={compact ? "/" : "/docs/"}
              onClick={() => setIsOpen(false)}
            >
              {compact ? "Product" : "View Docs"}
            </AppLink>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )}
    </>
  );
}

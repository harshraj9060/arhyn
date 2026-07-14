"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";

const links = [
  { href: "#services", labelKey: "nav.services" },
  { href: "#industries", labelKey: "nav.industries" },
  { href: "#work", labelKey: "nav.work" },
  { href: "#team", labelKey: "nav.team" },
  { href: "#faq", labelKey: "nav.faq" },
];

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-content px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-paper" aria-label={t("brand.homeAria")}>
          <Logo className="h-7 w-7 text-paper" />
          <span className="font-display font-semibold tracking-tight text-lg">{t("brand.name")}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-dim hover:text-paper transition-colors"
            >
              {t(l.labelKey)}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-ink hover:bg-amber-soft hover:shadow-[0_0_28px_rgba(232,163,61,0.35)]"
          >
            {t("nav.freeAudit")}
          </a>
&nbsp;&nbsp;
                        <LanguageSelector />
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-paper text-base"
            >
              {t(l.labelKey)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-medium text-ink"
          >
            {t("nav.freeAudit")}
          </a>
        </div>
      )}
    </header>
  );
}

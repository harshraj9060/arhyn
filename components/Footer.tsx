import Logo from "./Logo";
import { Github, Linkedin, Twitter, InstagramIcon } from "lucide-react";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5 text-paper mb-4">
              <Logo className="h-7 w-7 text-paper" />
              <span className="font-display font-semibold tracking-tight text-lg">Arhyn Technologies</span>
            </a>
            <p className="text-dim text-sm max-w-sm leading-relaxed">
              Transforming Businesses Through Technology — digital
              transformation, AI automation, and custom software for
              businesses still operating offline.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-dim hover:text-paper transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Connect</p>
            <div className="flex gap-4">
              <a href="https://github.com/panditajay73" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-dim hover:text-amber transition-colors">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-dim hover:text-amber transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter / X" className="text-dim hover:text-amber transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-dim hover:text-amber transition-colors">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="circuit-rule mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dim">
          <p>© {new Date().getFullYear()} Arhyn Technologies. All rights reserved.</p>
          <p className="font-mono">Built by engineers, for business owners.</p>
        </div>
      </div>
    </footer>
  );
}

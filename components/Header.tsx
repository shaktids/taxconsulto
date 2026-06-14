import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex flex-col rounded-md">
          <span className="text-xl font-black tracking-normal text-navy-950">{siteConfig.name}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{siteConfig.tagline}</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-navy-50 hover:text-navy-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <ButtonLink href="/contact" variant="secondary">
            Book Free Consultation
          </ButtonLink>
        </div>
      </div>
      <nav className="border-t border-slate-100 bg-white lg:hidden" aria-label="Mobile navigation">
        <div className="container flex gap-2 overflow-x-auto py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring whitespace-nowrap rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { navLinks, services, siteConfig } from "@/lib/site";

export function Footer() {
  const serviceLinks = services.slice(0, 7);

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="focus-ring inline-block rounded-md">
            <span className="block text-2xl font-black">{siteConfig.name}</span>
            <span className="mt-1 block text-sm font-semibold text-gold-300">{siteConfig.tagline}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">{siteConfig.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="focus-ring rounded hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="focus-ring rounded hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="focus-ring rounded hover:text-white" href="/terms-conditions">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {serviceLinks.map((service) => (
              <li key={service.title}>
                <Link className="focus-ring rounded hover:text-white" href="/services">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>Phone: +91 {siteConfig.phone}</li>
            <li>Email: {siteConfig.email}</li>
            <li>Serving businesses across India</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link className="focus-ring rounded-md border border-white/20 px-3 py-2 hover:bg-white/10" href="https://www.linkedin.com/">
              LinkedIn
            </Link>
            <Link className="focus-ring rounded-md border border-white/20 px-3 py-2 hover:bg-white/10" href="https://www.instagram.com/">
              Instagram
            </Link>
            <Link className="focus-ring rounded-md border border-white/20 px-3 py-2 hover:bg-white/10" href="https://www.facebook.com/">
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{`(c) ${new Date().getFullYear()} TaxConsulto.com. All rights reserved.`}</p>
          <p>Premium CA, tax, and compliance consulting.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-gold-500 text-navy-950 hover:bg-gold-300 border border-gold-500 shadow-lg shadow-gold-500/20",
    secondary:
      "bg-navy-900 text-white hover:bg-navy-800 border border-navy-900 shadow-lg shadow-navy-900/15",
    light:
      "bg-white text-navy-900 hover:bg-navy-50 border border-white/80 shadow-lg shadow-navy-950/10"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "red" | "outline" | "brown";
  className?: string;
};

const variants = {
  gold: "bg-brand-gold text-brand-brown-dark hover:bg-brand-gold-light border-brand-gold",
  red: "bg-brand-red text-white hover:bg-[#7d261f] border-brand-red",
  outline: "border-border-warm bg-background-cream/80 text-brand-brown hover:border-brand-gold hover:bg-white",
  brown: "bg-brand-brown text-white hover:bg-brand-brown-dark border-brand-brown",
};

export function ButtonLink({ href, children, variant = "gold", className }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-[17px] font-semibold transition duration-200",
        variants[variant],
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

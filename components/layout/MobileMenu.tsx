"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { navItems } from "@/data/site";
import { phoneLink, whatsappLink } from "@/lib/contact";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20 xl:hidden">
      <button
        type="button"
        className="focus-ring flex size-10 items-center justify-center rounded-md"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="flex w-6 flex-col gap-1.5">
          <span className={`h-0.5 rounded-full bg-navy transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 rounded-full bg-navy transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 rounded-full bg-navy transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-14 w-[min(16.5rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/45 bg-white/96 p-3 text-navy shadow-[0_22px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-bold text-navy transition hover:bg-[#eef1f5]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-2">
            <ButtonLink href={phoneLink()} variant="contact" fullMobile onClick={() => setIsOpen(false)}>
              Contact us
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="whatsapp" fullMobile target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}

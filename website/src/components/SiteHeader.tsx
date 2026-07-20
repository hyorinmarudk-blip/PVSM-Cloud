"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "PVR Promise", href: "#promise" },
  { label: "Policies", href: "#policies" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/images/poteau-valley-repair-logo.png"
            alt="Poteau Valley Repair"
            width={72}
            height={72}
            priority
            className="h-14 w-auto"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-bold uppercase tracking-[0.18em]">
              Poteau Valley Repair
            </p>
            <p className="text-xs text-zinc-400">
              Veteran Owned &amp; Operated
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors duration-200 hover:text-red-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+19184429692"
            className="hidden items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold shadow-lg shadow-red-950/40 transition duration-200 hover:-translate-y-0.5 hover:bg-red-500 sm:flex"
          >
            <Phone size={17} aria-hidden="true" />
            Call Now
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 pb-5 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-zinc-200 transition-colors hover:bg-white/5 hover:text-red-500"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:+19184429692"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold transition-colors hover:bg-red-500 sm:hidden"
            >
              <Phone size={18} aria-hidden="true" />
              Call (918) 442-9692
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
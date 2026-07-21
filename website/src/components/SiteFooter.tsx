import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const serviceLinks = [
  {
    label: "Automotive Repair",
    href: "/services/automotive-repair",
  },
  {
    label: "Diagnostics",
    href: "/services/diagnostics",
  },
  {
    label: "Mobile Service",
    href: "/services/mobile-service",
  },
  {
    label: "Lawn Mower Repair",
    href: "/services/lawn-mower-repair",
  },
  {
    label: "Small Engine Repair",
    href: "/services/small-engine-repair",
  },
  {
    label: "Detailing",
    href: "/services/detailing",
  },
];

const policyLinks = [
  {
    label: "Payment & Billing",
    href: "/policies/payment-billing",
  },
  {
    label: "Shop Terms",
    href: "/policies/shop-terms",
  },
  {
    label: "Warranty Policy",
    href: "/policies/warranty",
  },
  {
    label: "Privacy Policy",
    href: "/policies/privacy",
  },
  {
    label: "Photo Documentation",
    href: "/policies/photo-documentation",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-4">
            <Image
              src="/images/poteau-valley-repair-logo.png"
              alt="Poteau Valley Repair"
              width={90}
              height={90}
              className="h-20 w-auto"
            />

            <div>
              <p className="font-black">Poteau Valley Repair</p>
              <p className="mt-1 text-sm text-zinc-500">
                Veteran Owned &amp; Operated
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-sm leading-7 text-zinc-400">
            Honest automotive, mobile, lawn mower, and small-engine repair
            serving LeFlore County and surrounding communities.
          </p>

          <div className="mt-6 flex items-start gap-3 text-zinc-400">
            <MapPin
              size={19}
              className="mt-1 shrink-0 text-red-500"
              aria-hidden="true"
            />
            <span>LeFlore County and surrounding counties</span>
          </div>

          <div className="mt-3 flex items-center gap-3 text-zinc-400">
            <ShieldCheck
              size={19}
              className="shrink-0 text-red-500"
              aria-hidden="true"
            />
            <span>Service available by appointment</span>
          </div>
        </div>

        <div>
          <h2 className="font-black uppercase tracking-wider text-zinc-200">
            Services
          </h2>

          <nav className="mt-6 flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 transition hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-black uppercase tracking-wider text-zinc-200">
            Policies
          </h2>

          <nav className="mt-6 flex flex-col gap-3">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 transition hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-black uppercase tracking-wider text-zinc-200">
            Contact
          </h2>

          <div className="mt-6 space-y-4">
            <a
              href="tel:+19184429692"
              className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
            >
              <Phone
                size={19}
                className="shrink-0 text-red-500"
                aria-hidden="true"
              />
              (918) 442-9692
            </a>

            <a
              href="mailto:poteauvalleyrepair@gmail.com"
              className="flex items-start gap-3 break-all text-zinc-400 transition hover:text-red-500"
            >
              <Mail
                size={19}
                className="mt-1 shrink-0 text-red-500"
                aria-hidden="true"
              />
              poteauvalleyrepair@gmail.com
            </a>

            <a
              href="https://share.google/tT3Z3VIMLM7V576j6"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
            >
              <ExternalLink
                size={19}
                className="shrink-0 text-red-500"
                aria-hidden="true"
              />
              Google Business Profile
            </a>
          </div>

          <Link
            href="/request-service"
            className="mt-7 inline-flex rounded-xl bg-red-600 px-5 py-3 font-bold transition hover:bg-red-500"
          >
            Request Service
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Poteau Valley Repair. All rights reserved.</p>

          <p>
            Website and digital services powered by{" "}
            <span className="font-semibold text-zinc-400">PVSM</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
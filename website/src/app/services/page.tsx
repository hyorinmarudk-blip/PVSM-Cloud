import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Repair Services",
  description:
    "Explore automotive repair, diagnostics, mobile service, lawn mower repair, small engine repair, and detailing from Poteau Valley Repair.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
            Repair and maintenance built around honest evaluation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Review our primary service categories below. Pricing depends on the
            vehicle or equipment, required diagnosis, parts, labor, and service
            location. Call for an estimate.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-3xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-500/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/15 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={29} aria-hidden="true" />
                </div>

                <h2 className="mt-6 text-2xl font-black">{service.title}</h2>

                <p className="mt-3 leading-7 text-zinc-400">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.highlights.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-7 inline-flex items-center gap-2 font-bold text-red-500">
                  View service details
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-red-700 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black">
              Not sure which service applies?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-red-100">
              Call and describe the vehicle, equipment, symptoms, and whether
              mobile service may be needed.
            </p>
          </div>

          <a
            href="tel:+19184429692"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-red-700 transition hover:-translate-y-0.5 hover:bg-red-50"
          >
            <Phone size={20} aria-hidden="true" />
            Call (918) 442-9692
          </a>
        </div>
      </section>
    </main>
  );
}
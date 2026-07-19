import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Automotive Repair",
    description:
      "Dependable maintenance and repairs for brakes, steering, suspension, batteries, filters, leaks, and other common vehicle concerns.",
    icon: "🚗",
  },
  {
    title: "Diagnostics",
    description:
      "Honest automotive and electrical diagnostics focused on identifying the actual problem before unnecessary parts are replaced.",
    icon: "🔍",
  },
  {
    title: "Mobile Service",
    description:
      "Mobile diagnostics, scheduled on-site repairs, and emergency roadside assistance throughout LeFlore County and surrounding areas.",
    icon: "🚚",
  },
  {
    title: "Small Engine Repair",
    description:
      "Repair and maintenance for lawn mowers, generators, tillers, trimmers, edgers, and other lawn and garden equipment.",
    icon: "🛠️",
  },
  {
    title: "Detailing",
    description:
      "Basic vehicle cleaning services, including interior vacuuming, body washing, wheel cleaning, and waxing.",
    icon: "✨",
  },
];

const reasons = [
  "Veteran Owned & Operated",
  "Honest Diagnostics",
  "Quality Parts & Repairs",
  "Mobile Service Available",
  "Automotive & Small Engine Specialists",
  "Transparent Estimates",
  "Modern Digital Repair Tracking",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
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
            <a href="#services" className="transition hover:text-red-500">
              Services
            </a>
            <a href="#about" className="transition hover:text-red-500">
              About
            </a>
            <a href="#policies" className="transition hover:text-red-500">
              Policies
            </a>
            <a href="#contact" className="transition hover:text-red-500">
              Contact
            </a>
          </nav>

          <a
            href="tel:+19184429692"
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold shadow-lg shadow-red-950/40 transition hover:bg-red-500"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(9,9,11,0.9))]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
              Serving LeFlore County &amp; Surrounding Counties
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Honest repairs.
              <span className="block text-red-500">Expert diagnostics.</span>
              Service you can trust.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Veteran-owned automotive, mobile, lawn mower, and small-engine
              repair backed by transparent estimates and more than 16 years of
              industry experience.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+19184429692"
                className="rounded-xl bg-red-600 px-7 py-4 text-center font-bold shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500"
              >
                Call for an Estimate
              </a>

              <a
                href="mailto:poteauvalleyrepair@gmail.com?subject=Service%20Request"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-center font-bold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Request Service
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">
              <span>✓ Mobile service available</span>
              <span>✓ Transparent estimates</span>
              <span>✓ Quality replacement parts</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-red-600/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur">
              <Image
                src="/images/poteau-valley-repair-logo.png"
                alt="Poteau Valley Repair logo"
                width={700}
                height={700}
                priority
                className="h-auto w-full"
              />

              <div className="mt-6 border-t border-white/10 pt-6 text-center">
                <p className="text-lg font-bold">By Appointment</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Call or email to schedule shop or mobile service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-red-500">
              Our Services
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Repairs for the road, your property, and wherever you need us
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Every job begins with clear communication and an honest evaluation.
              Call for an estimate based on your specific vehicle, equipment, or
              service need.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-red-500/50"
              >
                <div className="text-4xl" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  {service.description}
                </p>
              </article>
            ))}

            <article className="rounded-2xl border border-red-500/30 bg-red-600 p-7 shadow-xl shadow-red-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-100">
                Need help?
              </p>
              <h3 className="mt-4 text-2xl font-black">
                Not sure which service you need?
              </h3>
              <p className="mt-3 leading-7 text-red-50">
                Tell us what your vehicle or equipment is doing, and we’ll help
                determine the next step.
              </p>
              <a
                href="tel:+19184429692"
                className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-bold text-red-700 transition hover:bg-red-50"
              >
                Call (918) 442-9692
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-red-500">
              Experience You Can Trust
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Local service built around honesty and accountability
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                Poteau Valley Repair is a veteran-owned and operated repair
                business serving LeFlore County and surrounding communities.
              </p>
              <p>
                Founded in June 2026 and backed by more than 16 years of
                automotive repair experience, the business was created to offer
                honest diagnostics, transparent pricing, and dependable repairs
                without unnecessary upselling.
              </p>
              <p>
                Whether you need automotive repair, electrical troubleshooting,
                lawn mower service, small-engine repair, mobile diagnostics, or
                roadside assistance, every customer receives straightforward
                communication and careful workmanship.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 sm:p-10">
            <h3 className="text-2xl font-black">Why choose us?</h3>

            <div className="mt-7 grid gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-950 px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold">
                    ✓
                  </span>
                  <span className="font-semibold">{reason}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              Digital repair tracking and customer portal features are powered by
              Poteau Valley Services Manager and are currently under development.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Customer Portal
          </p>
          <h2 className="mt-3 text-4xl font-black">Powered by PVSM</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            A secure customer portal is under development. Future features will
            include repair tracking, digital estimate approvals, invoices,
            payments, service history, repair photographs, and warranty records.
          </p>

          <button
            type="button"
            disabled
            className="mt-8 cursor-not-allowed rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-zinc-400"
          >
            Customer Portal — Coming Soon
          </button>
        </div>
      </section>

      <section id="policies" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-red-500">
              Clear Policies
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Know what to expect before work begins
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Our written policies support clear communication, fair billing,
              customer privacy, repair documentation, and dependable warranty
              service.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Payment & Billing Policy",
              "Shop Policies & Terms",
              "Warranty Policy",
              "Privacy Policy",
              "Photo Documentation Policy",
            ].map((policy) => (
              <div
                key={policy}
                className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
              >
                <h3 className="text-xl font-bold">{policy}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Full website version will be available before public launch.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-red-700 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-red-100">
              Contact Poteau Valley Repair
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Ready to discuss your repair?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-red-100">
              Call or email with your vehicle or equipment information, a
              description of the concern, and whether you need shop or mobile
              service.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="tel:+19184429692"
              className="rounded-xl bg-white px-7 py-4 text-center font-black text-red-700 transition hover:bg-red-50"
            >
              (918) 442-9692
            </a>
            <a
              href="mailto:poteauvalleyrepair@gmail.com"
              className="rounded-xl border border-white/30 px-7 py-4 text-center font-bold transition hover:bg-white/10"
            >
              Email the Shop
            </a>
            <a
              href="https://share.google/tT3Z3VIMLM7V576j6"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/30 px-7 py-4 text-center font-bold transition hover:bg-white/10"
            >
              View Google Business Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-white">Poteau Valley Repair</p>
            <p>Veteran Owned &amp; Operated</p>
          </div>

          <div className="sm:text-right">
            <p>LeFlore County and Surrounding Counties</p>
            <p>© 2026 Poteau Valley Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

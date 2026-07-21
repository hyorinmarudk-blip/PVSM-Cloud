import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  BatteryCharging,
  CalendarClock,
  Car,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  ExternalLink,
  FileCheck2,
  Gauge,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Tractor,
  Truck,
  Wrench,
  Banknote,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileSignature,
  MessageSquareText,
  ReceiptText,
  RotateCcw,
  Smartphone,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    slug: "automotive-repair",
    title: "Automotive Repair",
    description:
      "Dependable maintenance and repairs for brakes, steering, suspension, batteries, filters, leaks, and other common vehicle concerns.",
    icon: Car,
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    description:
      "Honest automotive and electrical diagnostics focused on identifying the actual problem before unnecessary parts are replaced.",
    icon: SearchCheck,
  },
  {
    slug: "mobile-service",
    title: "Mobile Service",
    description:
      "Mobile diagnostics, scheduled on-site repairs, and emergency roadside assistance throughout LeFlore County and surrounding areas.",
    icon: Truck,
  },
  {
    slug: "small-engine-repair",
    title: "Small Engine Repair",
    description:
      "Repair and maintenance for lawn mowers, generators, tillers, trimmers, edgers, and other lawn and garden equipment.",
    icon: Tractor,
  },
  {
    slug: "detailing",
    title: "Detailing",
    description:
      "Basic vehicle cleaning services, including interior vacuuming, body washing, wheel cleaning, and waxing.",
    icon: Sparkles,
  },
];

const reasons = [
  { label: "Veteran Owned & Operated", icon: BadgeCheck },
  { label: "Honest Diagnostics", icon: SearchCheck },
  { label: "Quality Parts & Repairs", icon: Wrench },
  { label: "Mobile Service Available", icon: Truck },
  { label: "Automotive & Small Engine Specialists", icon: Gauge },
  { label: "Transparent Estimates", icon: ClipboardCheck },
  { label: "Modern Digital Repair Tracking", icon: FileCheck2 },
];

const promises = [
  {
    title: "We diagnose before replacing parts.",
    description:
      "Testing and inspection come first so repairs are based on evidence instead of guesswork.",
    icon: SearchCheck,
  },
  {
    title: "We explain the repair.",
    description:
      "You receive straightforward information about the concern, recommended work, and expected cost.",
    icon: HeartHandshake,
  },
  {
    title: "We use quality parts.",
    description:
      "Whenever possible, replacement parts are sourced from reputable suppliers and selected for dependable service.",
    icon: BatteryCharging,
  },
  {
    title: "We stand behind our workmanship.",
    description:
      "Eligible repairs are supported by written warranty terms and clear procedures if a concern returns.",
    icon: ShieldCheck,
  },
  {
    title: "We provide transparent estimates.",
    description:
      "Additional work is discussed before proceeding whenever practical, so you stay informed.",
    icon: CircleDollarSign,
  },
  {
    title: "We respect your vehicle and equipment.",
    description:
      "Repair documentation and photographs help maintain an accurate record from intake through completion.",
    icon: CalendarClock,
  },
];

const policies = [
  "Payment & Billing Policy",
  "Shop Policies & Terms",
  "Warranty Policy",
  "Privacy Policy",
  "Photo Documentation Policy",
];

const repairSteps = [
  {
    number: "01",
    title: "Request Service",
    description:
      "Call or submit a service request with your contact information, vehicle or equipment details, and a description of the concern.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Inspection & Diagnosis",
    description:
      "We inspect and test the vehicle or equipment to identify the problem and determine what work may be required.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Estimate & Authorization",
    description:
      "You receive an explanation of the recommended work and estimated cost before repairs proceed whenever practical.",
    icon: FileSignature,
  },
  {
    number: "04",
    title: "Repair & Verification",
    description:
      "Authorized repairs are completed, documented, and checked to confirm proper operation before release.",
    icon: RotateCcw,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-30 bg-zinc-950" />
        <div className="absolute right-[-15rem] top-[-12rem] -z-20 h-[38rem] w-[38rem] rounded-full bg-red-700/25 blur-[130px]" />
        <div className="absolute bottom-[-18rem] left-[-14rem] -z-20 h-[34rem] w-[34rem] rounded-full bg-red-950/40 blur-[120px]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_55%,#09090b)]" />

        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
              <MapPin size={16} aria-hidden="true" />
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
                href="tel:+19189620233"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold shadow-xl shadow-red-950/40 transition duration-200 hover:-translate-y-0.5 hover:bg-red-500"
              >
                <Phone size={20} aria-hidden="true" />
                Call for an Estimate
              </a>

              <Link
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
            <Mail size={20} aria-hidden="true" />
             Request Service
            </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">
              {[
                "Mobile service available",
                "Transparent estimates",
                "Quality replacement parts",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-red-500" aria-hidden="true" />
                  {item}
                </span>
              ))}
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
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-white/10 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/20"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-red-600/15 text-red-500 transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </Link>
              );
            })}

            <article className="rounded-2xl border border-red-500/30 bg-red-600 p-7 shadow-xl shadow-red-950/30">
              <Wrench size={34} aria-hidden="true" />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-red-100">
                Need help?
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Not sure which service you need?
              </h3>
              <p className="mt-3 leading-7 text-red-50">
                Tell us what your vehicle or equipment is doing, and we’ll help
                determine the next step.
              </p>
              <a
                href="tel:+19189620233"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-red-700 transition duration-200 hover:-translate-y-0.5 hover:bg-red-50"
              >
                <Phone size={18} aria-hidden="true" />
                Call (918) 962-0233
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
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.label}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-950 px-5 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="font-semibold">{reason.label}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              Digital repair tracking and customer portal features are powered by
              Poteau Valley Services Manager and are currently under development.
            </p>
          </div>
        </div>
      </section>

      <section
        id="promise"
        className="border-y border-white/10 bg-zinc-900 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-red-500">
              The PVR Promise
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Straightforward service from diagnosis to completion
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              These principles guide how we communicate, diagnose, document, and
              complete every repair.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {promises.map((promise) => {
              const Icon = promise.icon;

              return (
                <article
                  key={promise.title}
                  className="rounded-2xl border border-white/10 bg-zinc-950 p-7"
                >
                  <Icon size={30} className="text-red-500" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">{promise.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    {promise.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-bold uppercase tracking-[0.2em] text-red-500">
        Our Repair Process
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
        Clear communication from the first call to final pickup
      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-400">
        Every job is different, but our process is built around careful
        evaluation, customer authorization, documentation, and final
        verification.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {repairSteps.map((step) => {
        const Icon = step.icon;

        return (
          <article
            key={step.number}
            className="relative rounded-3xl border border-white/10 bg-zinc-900 p-7"
          >
            <span className="absolute right-6 top-5 text-5xl font-black text-white/[0.04]">
              {step.number}
            </span>

            <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
              <Icon size={27} aria-hidden="true" />
            </div>

            <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-red-500">
              Step {step.number}
            </p>

            <h3 className="mt-3 text-xl font-black">{step.title}</h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {step.description}
            </p>
          </article>
           );
         })}
          </div>

          <div className="mt-10 text-center">
           <Link
           href="/request-service"
           className="inline-flex rounded-xl bg-red-600 px-7 py-4 font-black transition hover:-translate-y-0.5 hover:bg-red-500"
            >
              Start a Service Request
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900 py-24">
  <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
    <article className="rounded-3xl border border-white/10 bg-zinc-950 p-8 sm:p-10">
      <ShieldCheck
        size={36}
        className="text-red-500"
        aria-hidden="true"
      />

      <p className="mt-6 font-bold uppercase tracking-[0.2em] text-red-500">
        Warranty at a Glance
      </p>

      <h2 className="mt-3 text-3xl font-black">
        Workmanship backed by written terms
      </h2>

      <p className="mt-5 leading-7 text-zinc-400">
        Eligible repairs performed with parts supplied by Poteau Valley Repair
        include workmanship coverage subject to the full Warranty Policy.
      </p>

      <div className="mt-7 space-y-4">
        {[
          {
            label: "Automotive Repairs",
            coverage: "12 months or 12,000 miles",
          },
          {
            label: "Lawn & Garden Equipment",
            coverage: "90 days",
          },
          {
            label: "Small Engines",
            coverage: "90 days",
          },
          {
            label: "Electrical Repairs",
            coverage: "90 days",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col justify-between gap-2 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 sm:flex-row sm:items-center"
          >
            <span className="font-bold">{item.label}</span>
            <span className="text-sm font-semibold text-red-500">
              {item.coverage}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm leading-6 text-zinc-500">
        Coverage exclusions, customer responsibilities, parts warranties, and
        claim procedures are explained in the complete written policy.
      </p>

      <Link
        href="/policies/warranty"
        className="mt-7 inline-flex items-center gap-2 font-bold text-red-500 transition hover:text-red-400"
      >
        Read the full Warranty Policy
        <ReceiptText size={18} aria-hidden="true" />
      </Link>
    </article>

    <article className="rounded-3xl border border-white/10 bg-zinc-950 p-8 sm:p-10">
      <CreditCard
        size={36}
        className="text-red-500"
        aria-hidden="true"
      />

      <p className="mt-6 font-bold uppercase tracking-[0.2em] text-red-500">
        Payment Options
      </p>

      <h2 className="mt-3 text-3xl font-black">
        Flexible ways to pay
      </h2>

      <p className="mt-5 leading-7 text-zinc-400">
        Payment is due according to the written Payment &amp; Billing Policy.
        Financing options are subject to provider approval.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {[
          {
            label: "Cash",
            icon: Banknote,
          },
          {
            label: "Credit & Debit Cards",
            icon: CreditCard,
          },
          {
            label: "Cash App",
            icon: Smartphone,
          },
          {
            label: "Square Afterpay",
            icon: CheckCircle2,
          },
          {
            label: "Approved Checks",
            icon: ReceiptText,
          },
        ].map((method) => {
          const Icon = method.icon;

          return (
            <div
              key={method.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4"
            >
              <Icon
                size={21}
                className="shrink-0 text-red-500"
                aria-hidden="true"
              />
              <span className="font-semibold">{method.label}</span>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-sm leading-6 text-zinc-500">
        Square Afterpay is subject to customer approval. Approved business
        checks may be limited to established business customers.
      </p>

      <Link
        href="/policies/payment-billing"
        className="mt-7 inline-flex items-center gap-2 font-bold text-red-500 transition hover:text-red-400"
      >
        Review Payment &amp; Billing Terms
        <ReceiptText size={18} aria-hidden="true" />
      </Link>
    </article>
  </div>
</section>

      <section className="py-24">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="overflow-hidden rounded-3xl border border-red-500/30 bg-red-950/20">
      <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
        <div>
          <Truck
            size={42}
            className="text-red-500"
            aria-hidden="true"
          />

          <p className="mt-6 font-bold uppercase tracking-[0.2em] text-red-500">
            Mobile Service
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Repair help brought to your location
          </h2>

          <p className="mt-5 leading-8 text-zinc-300">
            Mobile diagnostics, scheduled repairs, equipment service, and
            roadside assistance are available when the job can be completed
            safely and practically outside the shop.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Mobile vehicle diagnostics",
            "Scheduled on-site repairs",
            "Emergency roadside assistance",
            "On-site mower and equipment service",
            "Battery and no-start testing",
            "Service throughout the surrounding area",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-950/70 p-4"
            >
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-red-500"
                aria-hidden="true"
              />
              <span className="font-semibold text-zinc-200">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 bg-zinc-950/50 px-8 py-7 sm:px-10 lg:flex-row lg:items-center lg:px-12">
        <p className="max-w-3xl text-sm leading-6 text-zinc-400">
          Availability depends on location, weather, road conditions, safe
          working space, parts availability, and the type of repair required.
          Some repairs must be completed at the shop.
        </p>

        <Link
          href="/services/mobile-service"
          className="shrink-0 rounded-xl border border-white/20 px-6 py-3 font-bold transition hover:bg-white/5"
        >
          Mobile Service Details
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="py-24">
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

      <section id="policies" className="bg-zinc-900 py-24">
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
            {policies.map((policy) => (
              <Link
                key={policy}
                href="/policies"
                className="rounded-2xl border border-white/10 bg-zinc-950 p-6 transition duration-200 hover:-translate-y-1 hover:border-red-500/40"
              >
                <FileCheck2
                  size={27}
                  className="text-red-500"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold">{policy}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Full website version will be available before public launch.
                </p>
              </Link>
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
              href="tel:+19189620233"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-red-700 transition duration-200 hover:-translate-y-0.5 hover:bg-red-50"
            >
              <Phone size={19} aria-hidden="true" />
              (918) 962-0233
            </a>
            <Link
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
            <Mail size={20} aria-hidden="true" />
             Request Service
            </Link>
            <a
              href="https://share.google/tT3Z3VIMLM7V576j6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-bold transition-colors hover:bg-white/10"
            >
              <MapPin size={19} aria-hidden="true" />
              View Google Business Profile
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}
